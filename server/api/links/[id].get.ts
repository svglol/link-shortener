export default defineEventHandler(async (event) => {
  const uuid = decodeURI(getRouterParam(event, 'id') ?? '')
  if (!uuid)
    throw createError({ statusCode: 400, statusMessage: 'Invalid id' })

  return useDrizzle().query.links.findMany({
    where: like(tables.links.uuid, uuid),
    orderBy: (links, { desc }) => [desc(links.createdAt)],
  })
})
