// src/app/_components/blogs/BlogCard.tsx
import React from 'react';
import Link from 'next/link';

type BlogCardProps = {
    blog: {
        picture: string;
        title: string;
        description: string;
    };
    slug: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ blog, slug }) => {
    return (
        <card data-aos="fade-up" data-aos-duration="1000">
            <div className="relative rounded-3xl object-cover">
                <Link href={"/blog/" + slug}>
                    <img src={blog.picture} alt={blog.title} className="h-52 w-full rounded-t-3xl " />
                </Link>
                <div className="p-5 text-sm font-bold">
                    <p className="font-extrabold text-secondary dark:text-secondary">
                        <Link href="/team/maxim-vasilkov">Maxim Vasilkov</Link>
                    </p>
                    <Link href={"/blog/" + slug}>
                        <h2 className="my-[10px] text-lg font-extrabold leading-[23px] text-black line-clamp-2">
                            {blog.title}
                        </h2>
                        <p className="line-clamp-4">
                            {blog.description}
                        </p>
                    </Link>
                </div>
            </div>
        </card>
    );
};

export default BlogCard;
