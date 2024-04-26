export default defineCachedEventHandler(async (event) => {
  const id = decodeURI(getRouterParam(event, 'id') ?? '')
  if (!id)
    throw createError({ statusCode: 400, statusMessage: 'Invalid id' })

  return useDrizzle().query.links.findFirst({
    where: like(tables.links.id, id),
  })
}, { maxAge: 60 })
