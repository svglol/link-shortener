export default defineNuxtRouteMiddleware(async (to) => {
  if (to.params.id) {
    const { data: link } = await useFetch(`/api/link/${to.params.id}`)
    if (link) {
      await $fetch(`/api/link/${link.value?.id}/increment-views`, { method: 'POST' })
      navigateTo(link.value?.url ?? '', { external: true })
    }
  }
  return createError({ statusCode: 404, statusMessage: 'Page Not Found' })
})
