import { cn } from '@/lib/utils';
import React from 'react';
import { FULL_NAME } from 'src/consts';

function Copyright({ className }: { className?: string }) {
  const today = new Date();
  return (
    <div
      className={cn(
        className,
        'pt-2 px-4 md:px-16 mx-auto max-w-screen-2xl flex flex-row justify-between items-center gap-2 text-xs'
      )}
    >
      <p>
        &copy; {today.getFullYear()} {FULL_NAME}. All rights reserved.
      </p>
      <p>
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
