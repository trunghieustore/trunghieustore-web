// Mọi địa chỉ cũ (*.pages.dev, www) tự chuyển về tên miền chính apple49.id.vn
const MAIN = 'apple49.id.vn';
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname !== MAIN) {
      url.hostname = MAIN;
      url.protocol = 'https:';
      url.port = '';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  }
};
