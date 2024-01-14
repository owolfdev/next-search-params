import React from "react";
import Link from "next/link";
import { blogPosts } from "@/data/posts/posts.js";
import SearchBar from "./search-bar";

const BlogPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const value = searchParams.slug;
  const searchQuery = searchParams.search?.toString().toLowerCase() || "";
  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery)
  );
  return (
    <div className="flex flex-col gap-8">
      <div>Blog Page</div>

      <div>
        <SearchBar />
      </div>

      <div>
        {filteredPosts.map((post) => {
          return (
            <div key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
