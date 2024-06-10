import { Card } from './ui/card';
import type { MediumFeed } from '@/lib/types';

function MediumCard(props: MediumFeed['items'][number]) {
  const { title, link, thumbnail, description } = props;
  return (
    <Card className='p-4 flex flex-row gap-2'>
      <picture className='aspect-square flex-1 h-full shrink-0 w-[160px]'>
        <img
          src={thumbnail}
          alt={title}
          className='h-full w-full max-w-[160px] object-cover rounded'
        />
      </picture>
      <article className='flex-[3] flex flex-col justify-evenly'>
        <p className='text font-bold'>{title}</p>
        <p className='text-sm line-clamp-4'>{description}</p>
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
      </article>
    </Card>
  );
}

export { MediumCard };
