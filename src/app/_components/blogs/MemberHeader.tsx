import Image from 'next/image';
import DateFormatter from '../DateFormatter';
import { Member } from '@/interfaces/docTypes';
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import Container from '../Container';

export function MemberHeader({ article }: { article: Member }) {
  return (
    <Container>
      <div className="py-14 md:my-14 md:flex md:items-center lg:my-[128px]">
        {/* Image on the left */}
        <div className="flex-shrink-0 mb-8 md:mb-0" data-aos="fade-right" data-aos-duration="1000">
          <Image
            width={445 / 2}
            height={400 / 2}
            src={article.picture}
            alt={article.title}
            className="rounded-[32px] object-cover sm:h-[200px] sm:w-[222px] border border-gray"
          />
        </div>
        
        {/* Content on the right */}
        <div className="flex-grow text-center md:text-left md:ml-8">
          <p className="text-secondary py-4">
            <a href="javascript:history.back()" className="inline-block">
              <ArrowLeftCircle className="text-3xl" />
            </a>
          </p>
          <h1 className="text-secondary mb-4 text-3xl">{article.title}</h1>
          <p className="text-secondary">
            Date:&nbsp;<DateFormatter dateString={article.date} />
            {article.time && (
              <>
                <br />
                Time&nbsp;to&nbsp;read:&nbsp;{article.time}
              </>
            )}
          </p>
        </div>
      </div>
    </Container>
  );
}
