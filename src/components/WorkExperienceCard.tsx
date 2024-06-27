import { Card } from './ui/card';

type Props = {
  title: string;
  description: string;
  date: string;
};

function WorkExperienceCard({ title, description, date }: Props) {
  return (
    <Card className='border-none shadow-none py-2 flex flex-row gap-2'>
      <div className='flex-[3] flex flex-col justify-evenly gap-2'>
        <div className='flex flex-col sm:flex-row justify-start gap-2 md:gap-6'>
          <p className='text font-bold'>{title}</p>
          <i className='text-muted-foreground text-sm'>{date}</i>
        </div>
        <p className='text-sm text-justify'>{description}</p>
      </div>
    </Card>
  );
}

export default WorkExperienceCard;
