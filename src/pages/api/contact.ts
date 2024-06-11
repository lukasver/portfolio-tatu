import { ContactFormSchema } from '@/content/config';
import type { APIRoute } from 'astro';

const apiKey = import.meta.env.CONTACT_FORM_API_KEY;

if (!apiKey) {
  throw new Error("Form couldn't be sent");
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const parsed = ContactFormSchema.parse(data);
    const formData = new FormData();

    for (const [key, value] of Object.entries(parsed)) {
      formData.append(key, value);
    }

    if (!apiKey) {
      throw new Error("Form couldn't be sent");
    }
    formData.append('access_key', apiKey);

    const resp = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    // Do something with the data, then return a success response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Form submitted successfully',
      }),
      { status: 200 }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({
        message: e instanceof Error ? e.message : 'Error submitting form',
        success: false,
      }),
      { status: 400 }
    );
  }
};
