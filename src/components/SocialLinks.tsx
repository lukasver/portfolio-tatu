import { SOCIAL_NETWORKS } from '@/config/consts';
import { Icons } from './ui/icons';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

function SocialLinks({ className }: Props) {
  return (
    <div className={cn(className, 'flex flex-row gap-4')}>
      {SOCIAL_NETWORKS.map(({ title, icon, url }) => {
        const Icon = Icons[icon];
        return (
          <a
            href={url}
            target='_blank'
            key={url}
            rel='noreferrer noopener'
            className={cn(
              'no-underlined',
              buttonVariants({
                size: 'lg',
                variant: 'outline',
              })
            )}
          >
            <span className='sr-only'>Follow me on {title}</span>
            <Icon className='size-6' />
          </a>
        );
      })}
    </div>
  );
}

export { SocialLinks };
