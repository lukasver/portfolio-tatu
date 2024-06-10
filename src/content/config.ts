import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

export const ContactFormSchema = z.object({
  name: z.string({ message: 'Please enter your name' }).min(3).max(50).trim(),
  email: z
    .string({ message: 'Please enter your email' })
    .email()
    .min(3)
    .max(50)
    .trim()
    .transform((v) => v.toLowerCase()),
  subject: z
    .string({ message: 'Please enter your subject' })
    .min(3)
    .max(50)
    .trim(),
  message: z
    .string({ message: 'Please enter your message' })
    .min(3)
    .max(255)
    .trim(),
});

export type ContactFormSchema = z.infer<typeof ContactFormSchema>;

export const collections = { blog };
