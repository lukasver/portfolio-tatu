import type { MediumFeed } from './types';
import sanitizeHtml from 'sanitize-html';
import he from 'he';

export const getMediumData = async (): Promise<MediumFeed | null> => {
  const response: MediumFeed = await fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@taniageuna',
    { method: 'GET' }
  ).then((res) => res.json());

  if (response) {
    const cleanedItems = response.items.map(
      ({ description, content, thumbnail, ...rest }) => {
        let image = thumbnail;
        if (!image) {
          const regex = /<img[^>]*src="([^"]*)"/;
          const match = description.match(regex);
          if (match && match[1]) {
            image = match[1];
          }
        }

        return {
          ...rest,
          thumbnail: image,
          description: he.decode(
            sanitizeHtml(description, {
              allowedTags: [],
              allowedAttributes: {},
            })
              .split('\n')
              .slice(0, 5)
              .join('\n')
          ),
          content: he.decode(
            sanitizeHtml(content, {
              allowedTags: [],
              allowedAttributes: {},
            })
              .split('\n')
              .slice(0, 5)
              .join('\n')
          ),
        };
      }
    );
    response.items = cleanedItems;
  }
  return response || null;
};
