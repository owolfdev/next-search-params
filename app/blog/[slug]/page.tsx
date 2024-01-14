import React from "react";
import path from "path";
import { blogPosts } from "@/data/posts/posts.js";

export async function generateStaticParams() {
  const posts = blogPosts;

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  return (
    <div>
      <div>{post?.title}</div>
      <div>{post?.content}</div>
    </div>
  );
}
