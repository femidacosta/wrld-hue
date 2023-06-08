// simulate a database /CMS of posts
// 2 functions that return list of posts

const POSTS = [
  {
    id: 1,
    title: "Lab_01",
    slug: "lab-01",
    content: "Explore this lab ",
    date: "2023-07-06",
    type: "js",
  },
  {
    id: 2,
    title: "Lab_02",
    slug: "lab-02",
    content: "Explore this Lab",
    date: "2023-07-06",
    type: "three.js",
  },
  {
    id: 3,
    title: "Lab_03",
    slug: "lab-03",
    content: "Explore this Lab",
    date: "2023-07-06",
    type: "three.js",
  },
];

export function getPosts() {
  // call API or DB to get post data
  return POSTS;
}

// get post by ID number
export function getPostById(postId: number) {
  return getPosts().find((post) => post.id === postId);
}

// takes one parameter called slug
// returning by a filter or find
export function getPostBySlug(slug: string) {
  return getPosts().find((post) => post.slug === slug);
}
