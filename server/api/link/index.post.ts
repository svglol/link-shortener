import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const objectSchema = z.object({ url: z.string(), uuid: z.string() })
  const body = await readValidatedBody(event, objectSchema.safeParse)
  if (!body.data)
    return null
  return (await useDrizzle().insert(tables.links).values({ id: await makeID(), url: body.data.url, uuid: body.data.uuid }).returning()).pop()
})

async function makeID() {
  const length = 5
  const links = await useDrizzle().query.links.findMany()
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
