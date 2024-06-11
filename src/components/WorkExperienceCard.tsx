import { Card } from './ui/card';

type Props = {
  title: string;
  description: string;
};

function WorkExperienceCard({ title, description }: Props) {
  return (
    <Card className='border-none shadow-none py-2 flex flex-row gap-2'>
      <div className='flex-[3] flex flex-col justify-evenly'>
        <p className='text-right text font-bold'>{title}</p>
        <p className='text-right text-sm line-clamp-4'>{description}</p>
      </div>
    </Card>
  );
}

export default WorkExperienceCard;
