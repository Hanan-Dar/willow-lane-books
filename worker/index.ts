// A small Worker in front of the static site: security headers on every page, the rest from the build.
interface Env {
  ASSETS: Fetcher;
}

const handler: ExportedHandler<Env> = {
  async fetch(request, env) {
    const res = await env.ASSETS.fetch(request);
    const out = new Response(res.body, res);
    out.headers.set("X-Content-Type-Options", "nosniff");
    out.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    return out;
  },
};

export default handler;
