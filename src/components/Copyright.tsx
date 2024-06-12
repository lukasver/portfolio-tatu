import { cn } from '@/lib/utils';
import { FULL_NAME } from '@/config/consts';

function Copyright({ className }: { className?: string }) {
  const today = new Date();
  return (
    <div
      className={cn(
        className,
        'pt-2 md:px-2 lg:px-16 mx-auto max-w-screen-2xl flex flex-row justify-between items-center gap-2 text-xs'
      )}
    >
      <p className='text-muted-foreground'>
        &copy; {today.getFullYear()} {FULL_NAME}. All rights reserved.
      </p>
      <p className='text-muted-foreground'>
        By{' '}
        <a
          href='https://lucasverdiell.xyz'
          target='_blank'
          className='underlined'
        >
          LEV
        </a>
      </p>
    </div>
  );
}

export default Copyright;
