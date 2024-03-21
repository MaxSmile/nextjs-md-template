// src/app/_components/blogs/PostHeader.tsx
import Image from "next/image";
import DateFormatter from "../DateFormatter";
import Link from "next/link";
import { Blog } from "@/interfaces/docTypes";
import { ArrowLeftCircle, Link45deg } from "react-bootstrap-icons";
import Container from "../Container";


export function PostHeader({blog}: {blog: Blog}) {
  return (
      <Container>
        <div className="relative w-full py-14 md:my-14 md:inline-block md:py-0 lg:my-[128px]">
          <div className="heading relative mb-8 text-center lg:mb-0 lg:w-1/2 lg:text-left ">
            <p className="text-secondary py-4"><a href="javascript:history.back()"><ArrowLeftCircle className="text-2xl" /></a></p>
            <h1 className="text-secondary">{blog.title}</h1>
            <p className="text-secondary py-4">
              <Link href="/team/maxim-vasilkov" className="text-secondary">
                Author: <span className="px-4 font-semibold sm:text-lg"><Link45deg className='inline-block' />Maxim Vasilkov</span>
              </Link>
            </p>
            
          </div>
          <p className="text-secondary py-4 text-sm">
              Date:&nbsp;<DateFormatter dateString={blog.date} />&nbsp;
              {blog.time && <><br />Time&nbsp;to&nbsp;read:&nbsp;{blog.time}</>}
            </p>
          <div
            className="top-0 mt-6 right-0 md:mt-0 lg:absolute"
            data-aos='fade-left'
            data-aos-duration="1000"
          >
            <Image
              width={445}
              height={400}
              src={blog.picture}
              alt={blog.title}
              className="mx-auto h-80 rounded-[32px] object-cover sm:h-[400px] sm:w-[445px] border border-gray"
            />
          </div>
        </div>
      </Container>
  );
}
