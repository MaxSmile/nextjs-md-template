import { Blog } from "@/interfaces/blog";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const blogsDirectory = join(process.cwd(), "_blogs");

export function getBlogSlugs() {
  return fs.readdirSync(blogsDirectory);
}

export function getBlogBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(blogsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Blog;
}

export function getAllBlogs(): Blog[] {
  const slugs = getBlogSlugs();
  const Blogs = slugs
    .map((slug) => getBlogBySlug(slug))
    // sort Blogs by date in descending order
    .sort((Blog1, Blog2) => (Blog1.date > Blog2.date ? -1 : 1));
  return Blogs;
}
