export default defineEventHandler(async (event) => {
  const id = decodeURI(getRouterParam(event, 'id') ?? '')
  if (!id)
    throw createError({ statusCode: 400, statusMessage: 'Invalid id' })

  await hubKV().del(`${id}`)
  return useDrizzle().delete(tables.links).where(like(tables.links.id, id))
})
