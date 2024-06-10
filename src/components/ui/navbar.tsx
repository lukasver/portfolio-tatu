import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './drawer';
import { Button, buttonVariants } from './button';
import { Icons } from './icons';
import { SocialLinks } from '../SocialLinks';
import { cn } from '@/lib/utils';
import { Separator } from './separator';
import React from 'react';
import Copyright from '../Copyright';

type Props = {
  links: Array<{ title: string; url: string }>;
  title?: string;
  description?: string;
};

function MobileNav(props: Props) {
  const { description, title } = props;
  return (
    <Drawer>
      <DrawerTrigger>
        <Button variant={'outline'} size={'lg'} className='size-12 p-1'>
          <Icons.Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent className='max-w-screen'>
        {(title || description) && (
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
          </DrawerHeader>
        )}
        <div className='flex flex-col gap-2'>
          {props.links?.map(({ title, url }) => {
            return (
              <React.Fragment key={url}>
                <a
                  href={url}
                  className={cn(
                    'no-underlined',
                    'uppercase',
                    buttonVariants({ variant: 'link' })
                  )}
                >
                  {title}
                </a>
                <Separator className='max-w-[90%] mx-auto' />
              </React.Fragment>
            );
          })}
        </div>
        {/* {NAVIGATION?.length -1 !== index && <Separator orientation="vertical"/>} */}
        <DrawerFooter className='mt-2 flex flex-col gap-0'>
          <SocialLinks
            className={'-mt-4 flex justify-center items-center gap-2 mb-2'}
          />
          <Copyright className='mt-0 pt-0' />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export { MobileNav };
