import { Blog } from "@/interfaces/blog";
import { BlogPreviewCard } from "./BlogPreviewCard";

export function BlogsList({ blogs }: {
  blogs: Blog[];
}) {

  return (
    <section>
      <div className="grid gap-x-[30px] gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogs && blogs.map((post) => (
          <BlogPreviewCard
            key={post.slug}
            title={post.title}
            picture={post.picture}
            slug={post.slug}
            description={post.description}
          />
        ))}
        {!blogs && <p>Nothing to show...</p>}
      </div>
    </section>
  );
}
