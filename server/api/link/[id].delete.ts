import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const { id } = await getValidatedRouterParams(event, z.object({
    id: z.string().min(1),
  }).parse)

  await hubKV().del(`${id}`)
  const link = await useDrizzle().query.links.findFirst({
    where: like(tables.links.id, id),
    columns: { qrCode: true },
  })
  if (link)
    await hubBlob().delete(link.qrCode)
  return useDrizzle().delete(tables.links).where(like(tables.links.id, id))
})
