import { z } from 'zod'

export default defineCachedEventHandler(async (event) => {
  const { id } = await getValidatedRouterParams(event, z.object({
    id: z.string().min(1),
  }).parse)

  return useDrizzle().query.links.findFirst({
    where: like(tables.links.id, id),
  })
}, { maxAge: 60 * 60 })
