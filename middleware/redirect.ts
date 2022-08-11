export default defineNuxtRouteMiddleware(async (to) => {
  if (to.params.id) {
    const client = useClient();
    const link = await client.query('links.get', { id: String(to.params.id) });
    if (link) {
      return externalRedirect(link.url);
    }
  }
  return throwError(createError({ statusCode: 404, statusMessage: 'Page Not Found' }));
});
