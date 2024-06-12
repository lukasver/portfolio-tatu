import { Card } from './ui/card';

type Props = {
  title: string;
  description: string;
  date: string;
};

function WorkExperienceCard({ title, description, date }: Props) {
  return (
    <Card className='border-none shadow-none py-2 flex flex-row gap-2'>
      <div className='flex-[3] flex flex-col justify-evenly'>
        <div className='flex flex-row justify-start md:justify-end gap-6'>
          <p className='md:text-right text font-bold'>{title}</p>
          <i className='text-muted-foreground text-sm'>{date}</i>
        </div>
        <p className='md:text-right text-sm line-clamp-4'>{description}</p>
      </div>
    </Card>
  );
}

export default WorkExperienceCard;
