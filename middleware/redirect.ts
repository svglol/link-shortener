export default defineNuxtRouteMiddleware(async to => {
  if (to.params.id) {
    const { $client } = useNuxtApp()
    const { data: link } = await $client.get.useQuery({
      id: String(to.params.id),
    })
    if (link) {
      return externalRedirect(link.value?.url ?? '')
    }
  }
  return createError({ statusCode: 404, statusMessage: 'Page Not Found' })
})
