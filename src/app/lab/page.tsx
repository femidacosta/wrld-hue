import React from "react";
import { getPosts } from "@/lib/posts";
import Link from "next/link";
import "./lab.css";
import Image from "next/image";
// @ go from src
// simulate getting posts from data , use async then await to get, wait, load data.

export default async function LabListPage() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div className="lab_container">
      <div className="posts_title">
        {posts.map((post) => {
          return (
            <div key={post.slug}>
              <Link href={`/lab/${post.slug}`}>
                {" "}
                <Image src={post.image} alt="" width="400" height="400" />
                {post.title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
