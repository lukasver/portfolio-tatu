import { type ReactNode } from 'react';

function Container({ children }: { children: ReactNode }) {
  return (
    <div className='h-[calc(100vh-150px)] max-w-screen-2xl mx-auto'>
      {children}
    </div>
  );
}

export { Container };
