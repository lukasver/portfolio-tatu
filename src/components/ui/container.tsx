import { type ReactNode } from 'react';

function Container({ children }: { children: ReactNode }) {
  return (
    <div className='min-h-screen max-w-screen-2xl mx-auto'>{children}</div>
  );
}

export { Container };
