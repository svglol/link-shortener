import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const objectSchema = z.object({ url: z.string(), uuid: z.string() })
  const body = await readValidatedBody(event, objectSchema.safeParse)
  if (!body.data)
    return null

  const config = useRuntimeConfig()
  const id = await makeID()
  const qrcode = await generateQR(`${config.public.baseUrl}${id}`)
  ensureBlob(qrcode, { maxSize: '8MB', types: ['image/png'] })
  const blob = await hubBlob().put(id, qrcode)

  return (await useDrizzle().insert(tables.links).values({ id, url: body.data.url, uuid: body.data.uuid, qrCode: blob.pathname }).returning()).pop()
})

async function makeID() {
  const length = 5
  const links = await useDrizzle().query.links.findMany({ columns: { id: true } })
  let result = ''
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    if (result.length === length) {
      const filtered = links.filter(link => link.id === result)
      if (filtered.length > 0) {
        result = ''
        i = -1
      }
    }
  }
  return result
}

async function generateQR(text: string) {
  return await $fetch<Blob>(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(text)}&margin=50`)
}
