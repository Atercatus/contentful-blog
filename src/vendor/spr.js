export function spr(res) {
  if (!res) return;

  // Serverless Pre-Rendering(SPR): https://vercel.com/blog/serverless-pre-rendering
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
}
