import { FormTextArea } from './ui/textarea';
import { Card } from './ui/card';
import { cn } from '@/lib/utils';
import { FormInput } from './ui/input';
import { Button } from './ui/button';
import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
} from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import { Form } from './ui/form';
import { ContactFormSchema } from '@/content/config';
import { Toaster, toast } from 'sonner';

type Props = {
  className?: string;
  mode: string;
};

function ContactForm({ className, mode }: Props) {
  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(ContactFormSchema),
  });
  const [timer, setTimer] = useState(0);
  const interval = useRef<NodeJS.Timeout>();

  const onSubmit: SubmitHandler<ContactFormSchema> = async (data) => {
    const loading = toast.loading('Sending...');
    try {
      const resp = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (resp.status === 200) {
        setTimer(60);
        interval.current = setInterval(() => setTimer((pv) => pv - 1), 1000);
        toast.success('Message sent 🎉!', {
          description: 'Thank you, I will get back to you asap!',
          duration: 15_000,
        });
        return;
      }
      throw new Error('Failed to send message');
    } catch (e) {
      toast.error('Failed to send message');
    } finally {
      toast.dismiss(loading);
    }
  };

  const onInvalid: SubmitErrorHandler<ContactFormSchema> = (_errors) => {
    toast.error('Please fill in all fields');
  };

  useEffect(() => {
    if (timer === 1 || timer < 0) {
      clearInterval(interval.current);
      setTimer(0);
    }
    () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, [interval.current, timer]);

  return (
    <Card
      className={cn(
        className,
        'relative pt-8 px-8 pb-2 border-none shadow-none'
      )}
    >
      <Toaster position='top-right' toastOptions={{ closeButton: true }} />
      <Form {...form}>
        <form
          // method='POST'
          className='flex flex-col gap-1'
          onSubmit={form.handleSubmit(onSubmit, onInvalid)}
        >
          {mode !== 'production' && <DevTool control={form.control} />}
          <div className='flex flex-row gap-1'>
            <FormInput
              control={form.control}
              label='Name'
              type='text'
              placeholder='Vitalik'
              name='name'
            />
            <FormInput
              control={form.control}
              label='Email'
              type='email'
              placeholder='satoshi@btc.com'
              name='email'
            />
          </div>
          <div>
            <FormInput
              control={form.control}
              label='Subject'
              type='text'
              placeholder='Hello Tatu 👋'
              name='subject'
            />
          </div>
          <div>
            <FormTextArea
              name='message'
              placeholder="What's on your mind?..."
              className='min-h-20'
              control={form.control}
            />
          </div>
          <Button
            className='w-full mt-2'
            type='submit'
            disabled={!!timer || form.formState.isSubmitting}
          >
            Submit
          </Button>
          {!!timer && (
            <p className='text-muted-foreground text-xs text-center'>
              ✅ Message sent! You can send another message in {timer} seconds.
            </p>
          )}
        </form>
      </Form>
    </Card>
  );
}

export { ContactForm };
