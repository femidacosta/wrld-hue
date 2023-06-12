import kv from "@vercel/kv";

export default async function ViewCounterRoute() {
  const pageViews = await kv.incr("views");

  return <div>Viewed {pageViews} times.</div>;
}
