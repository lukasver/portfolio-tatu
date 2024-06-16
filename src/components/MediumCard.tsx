import { Badge } from './ui/badge';
import { Card } from './ui/card';
import type { MediumFeed } from '@/lib/types';

function MediumCard(props: MediumFeed['items'][number]) {
  const { title, link, thumbnail, content, category } = props;
  return (
    <Card className='p-4 flex flex-col gap-2'>
      <div className='flex flex-col lg:flex-row gap-2'>
        <picture className='lg:w-[160px] shrink-0'>
          <img
            src={thumbnail}
            alt={title}
            className='h-full w-full object-cover rounded'
          />
        </picture>
        <article className='flex flex-col justify-evenly'>
          <p className='text font-bold'>{title}</p>
          <p className='text-sm line-clamp-4'>{content}</p>
        </article>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='overflow-x-scroll line-clamp-1 gap-2 flex flex-row my-2'>
          {category?.map((tag) => (
            <Badge
              variant={'secondary'}
              className='text-white bg-secondary text-xs whitespace-nowrap capitalize'
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className='flex justify-end items-center'>
          <a
            rel='nofollow noopener noreferrer'
            className='text-xs font-bold'
            href={link}
            target='_blank'
          >
            See more...
          </a>
        </div>
      </div>
    </Card>
  );
}

export { MediumCard };
