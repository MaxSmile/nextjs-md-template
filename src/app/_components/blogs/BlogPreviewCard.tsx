// src/app/_components/blogs/BlogPreview.js
import Link from "next/link";

type Props = {
  title: string;
  picture: string;
  description: string;
  slug: string;
};

export function BlogPreviewCard({
  title,
  picture,
  description,
  slug,
}: Props) {
  return (
    <card data-aos="fade-up" data-aos-duration="1000">
      <img src={picture} alt={title} className="h-52 w-full rounded-t-3xl object-cover" />
      <div className="p-5 font-bold">
        <Link className="font-extrabold text-secondary dark:text-secondary"
          href={"/team/maxim-vasilkov"}>Maxim Vasilkov</Link>
        <Link href={"/blog/" + slug} >
          <h2 className="my-2 text-lg font-extrabold leading-[23px] text-black 
                    line-clamp-2">
            {title}
          </h2>
          <p className="line-clamp-4 text-sm ">
            {description}
          </p>
        </Link>
      </div>
    </card>
  );
}
