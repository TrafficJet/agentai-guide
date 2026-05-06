export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === 'www.agentai-guide.com') {
    url.hostname = 'agentai-guide.com';
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
