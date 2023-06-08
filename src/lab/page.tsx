import React from "react";
import { getPosts } from "@/lib/posts";
import Link from "next/link";

// @ go from src
// simulate getting posts from data , use async then await to get, wait, load data.

export default async function LabListPage() {
  const posts = await getPosts();

  return (
    <main className="lab_container">
      <h1 className="lab_title">Lab Experiements</h1>
      <ul>
        {posts.map((post) => {
          return (
            <div key={post.slug}>
              <li>
                <Link href={`lab/${post.slug}`}>{post.title}</Link>
              </li>
            </div>
          );
        })}
      </ul>
    </main>
  );
}
