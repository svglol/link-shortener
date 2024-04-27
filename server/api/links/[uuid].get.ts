import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const { uuid } = await getValidatedRouterParams(event, z.object({
    uuid: z.string().min(1),
  }).parse)

  return useDrizzle().query.links.findMany({
    where: like(tables.links.uuid, uuid),
    orderBy: (links, { desc }) => [desc(links.createdAt)],
  })
})
