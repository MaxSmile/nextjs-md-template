// src/app/blog/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBlogs } from "@/lib/api";
import Container from "@/app/_components/Container";
import { BlogsList } from "../_components/blogs/BlogsList";
// import Head from "next/head";
// import Pagination from "./Pagination";


const title = `Blogs!`;
type Params = {
  params: {
    page: string;
  };
};
export default async function BlogsListPage({ params }: Params) {
  const page = params.page;
    // const page = 1;
  // const blogsPerPage = 18;
  // const start = (page - 1) * blogsPerPage;
  // const end = page * blogsPerPage;
  // const totalPages = Math.ceil(Object.keys(blogs).length / blogsPerPage);
  // const keys = Object.keys(blogs).slice(start, end);

  // const pagination = <Pagination limit={totalPages} baseLink="/blog" current={page} />;

  // let hasPart = keys.map((key:any) => {
  //     let blog = blogs[key];
  //     return {
  //         "@type": "Article",
  //         "name": blog.title,
  //         "headline": blog.title,
  //         "url": "https://vasilkoff.com/blog/" + key,
  //         "image": "https://vasilkoff.com/" + blog.picture,
  //         "description": blog.description,
  //         "author": {
  //             "@type": "Organization",
  //             "name": "Vasilkoff",
  //             "url": "https://vasilkoff.com"
  //         }
  //     }
  // });


  if (!!page) {
    return notFound();
  }


  return (
    <main>
      <Container>
      <h1 className="m-8">
        {title}
      </h1>
        <BlogsList blogs={getAllBlogs()} />
      </Container>
            {/* <Head>
              <title>Vasilkoff Blogs - page: {page}</title>
              <meta
                  name="description"
                  content={`Explore page ${page} on Vasilkoff's blog. Dive into insights, trends, and stay ahead with our expert articles about web-development, blockchain, and AI.`}
              />
              <meta property="og:url" content={"https://vasilkoff.com/blog/"+page} />
              <meta property="og:image" content="https://vasilkoff.com/assets/blog/blog.webp" />
              <meta property="og:description" content="Explore the latest in mobile apps and web-development, blockchain, and AI on Vasilkoff's blog. Dive into insights, trends, and stay ahead with our expert articles." />

              <script type="application/ld+json"
                  dangerouslySetInnerHTML={{
                      __html: `
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Blog",
  "description": "A collection of blog posts written by our team",
  "hasPart": ${JSON.stringify(hasPart)}
}`
                  }} />
          </Head> */}
    </main>
  );
}



export function generateMetadata(): Metadata {
 

  const title = `Blogs!`;

  return {
    openGraph: {
      title,
      images: [],
    },
  };
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
