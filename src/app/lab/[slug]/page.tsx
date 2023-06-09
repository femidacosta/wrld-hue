import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/posts";
// functions that return

//sees slug, needs to build pages from slug
//sees generateStaticParams, sees the posts, will return when it gets the slug
// this is triggering next to load all of the pages
export function generateStaticParams() {
  const posts = getPosts();

  return posts.map((post) => {
    slug: post.slug;
  });
}

type LabPostParams = { params: { slug: string } };

export default async function LabPost({ params }: LabPostParams) {
  const post = await getPostBySlug(params.slug);
  // run this function to get info about post/slug
  // we expect it to use the params, to find the sluf , the slug is a string
  if (!post) {
    notFound();
  }

  return (
    <main>
      <h1>{post?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body.html }}></div>
    </main>
    //got post and info is given
  );
}

//run and return an array which becomes the params
// to return an arry of params we can go and get the slug
//
