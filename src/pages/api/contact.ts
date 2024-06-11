import { ContactFormSchema } from '@/content/config';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    console.debug('🚀 ~ data:', data);
    const parsed = ContactFormSchema.parse(data);
    const formData = new FormData();

    for (const [key, value] of Object.entries(parsed)) {
      formData.append(key, value);
    }
    formData.append('access_key', import.meta.env.CONTACT_FORM_API_KEY);
    console.debug('🚀 ~ formData:', formData);

    const resp = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    // Do something with the data, then return a success response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Success!',
        data: resp,
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
