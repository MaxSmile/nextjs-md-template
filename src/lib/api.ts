import { Blog, Member, Portfolio, Service } from "@/interfaces/docTypes";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const blogsDirectory = join(process.cwd(), "_blogs");
const portfolioDirectory = join(process.cwd(), "_portfolio");
const servicesDirectory = join(process.cwd(), "_services");
const membersDirectory = join(process.cwd(), "_members");

export function getBlogSlugs() {
  return fs.readdirSync(blogsDirectory);
}

export function getPortfolioSlugs() {
  return fs.readdirSync(portfolioDirectory);
}

export function getServiceSlugs() {
  return fs.readdirSync(servicesDirectory);
}

export function getMemberSlugs() {
  return fs.readdirSync(membersDirectory);
}

export function getBlogBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(blogsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Blog;
}

export function getPortfolioBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  //console.log("realSlug", realSlug);
  const fullPath = join(portfolioDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Portfolio;
}

export function getServiceBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(servicesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Service;
}


export function getMemberBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(membersDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Member;
}

export function getAllBlogs(): Blog[] {
  const slugs = getBlogSlugs();
  const Blogs = slugs
    .map((slug) => getBlogBySlug(slug))
    // sort Blogs by date in descending order
    .sort((Blog1, Blog2) => (Blog1.date > Blog2.date ? -1 : 1));
  return Blogs;
}

export function getAllPortfolios(): Portfolio[] {
  const slugs = getPortfolioSlugs();
  const portfolios = slugs
    .map((slug) => getPortfolioBySlug(slug))
    // sort portfolios by date in descending order
    .sort((Port1, Port2) => (Port1.date > Port2.date ? -1 : 1));
  return portfolios;
}


export function getAllServices(): Service[] {
  const slugs = getServiceSlugs();
  const services = slugs
    .map((slug) => getServiceBySlug(slug))
    // sort services by date in descending order
    .sort((Service1, Service2) => (Service1.date > Service2.date ? -1 : 1));
  return services;
}

export function getAllMembers(): Member[] {
  const slugs = getMemberSlugs();
  const members = slugs
    .map((slug) => getMemberBySlug(slug))
    // sort members by date in descending order
    .sort((Member1, Member2) => (Member1.date > Member2.date ? -1 : 1));
  return members;
}