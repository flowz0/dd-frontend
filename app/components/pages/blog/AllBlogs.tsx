"use client";

import { getAllBlogs } from "@/lib/blogs";
import { BlogProps } from "@/types/blog";
import BlogCard from "./BlogCard";
import { useEffect, useRef, useState } from "react";

export default function AllBlogs() {
  const [allBlogs, setAllBlogs] = useState<BlogProps[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const blogGridTopRef = useRef<HTMLDivElement | null>(null);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogs = await getAllBlogs();
        const sorted = blogs
          .filter((b): b is BlogProps => !!b.createdAt)
          .sort(
            (a, b) =>
              new Date(b.createdAt!).getTime() -
              new Date(a.createdAt!).getTime()
          );
        setAllBlogs(sorted);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (isScrollingRef.current && blogGridTopRef.current) {
      blogGridTopRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      isScrollingRef.current = false;
    }
  }, [visibleCount]);

  const visibleBlogs = allBlogs.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev += 6);
  };

  const handleShowLess = () => {
    if (visibleCount > 3) {
      isScrollingRef.current = true;
      setVisibleCount(3);
    }
  };

  return (
    <section className="mt-4">
      <div ref={blogGridTopRef}>
        <div className={`grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3`}>
          {visibleBlogs.map((blog) => (
            <div key={blog._id}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex items-center justify-center">
        {visibleCount < allBlogs.length && (
          <button
            onClick={handleShowMore}
            className="text-[#333333] ring-2 ring-[#0080DB] w-full py-2 px-5 flex items-center justify-center gap-x-3 rounded-md font-semibold transition-all duration-300 ease-in-out hover:bg-[#0080DB] hover:text-[#E6E6E6] active:scale-95 sm:w-fit"
            aria-label="Show more blog posts"
          >
            Show more blogs
          </button>
        )}
        {visibleCount > allBlogs.length && (
          <button
            onClick={handleShowLess}
            className="text-[#333333] ring-2 ring-[#0080DB] w-full py-2 px-5 flex items-center justify-center gap-x-3 rounded-md font-semibold transition-all duration-300 ease-in-out hover:bg-[#0080DB] hover:text-[#E6E6E6] active:scale-95 sm:w-fit"
            aria-label="Show less blog posts"
          >
            Show less blogs
          </button>
        )}
      </div>
    </section>
  );
}