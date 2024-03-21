import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBlogs, getBlogBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/Container";
import { PostHeader } from "@/app/_components/blogs/PostHeader";
import { PostBody } from "@/app/_components/blogs/PostBody";


export default async function BlogPage({ params }: Params) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return notFound();
  }

  const content = await markdownToHtml(blog.content || "");

  return (
    <main>
      <Container>
        <article className="mb-32">
          <PostHeader
            title={blog.title}
            picture={blog.picture}
            date={blog.date}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return notFound();
  }

  const title = blog.title;

  return {
    openGraph: {
      title,
      images: [blog.picture],
    },
  };
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
