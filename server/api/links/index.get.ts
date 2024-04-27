export default defineCachedEventHandler(async () => {
  return useDrizzle().query.links.findMany()
}, { maxAge: 60 })
