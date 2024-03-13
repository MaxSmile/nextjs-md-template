// src/app/_components/blogs/PostHeader.tsx
import Image from "next/image";
import DateFormatter from "../DateFormatter";
import { BlogTitle } from "@/app/_components/blogs/BlogTitle";


type Props = {
  title: string;
  picture: string;
  date: string;
};

export function PostHeader({ title, picture, date }: Props) {
  return (
    <>
      <BlogTitle>{title}</BlogTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <Image alt={title} src={picture} width={600} height={600}/>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
