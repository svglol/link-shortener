export default defineEventHandler(async (event) => {
  const id = decodeURI(getRouterParam(event, 'id') ?? '')
  if (!id)
    throw createError({ statusCode: 400, statusMessage: 'Invalid id' })

  return await hubKV().get(`${id}`) as number ?? 0
})
