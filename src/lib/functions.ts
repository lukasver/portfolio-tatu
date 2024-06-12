import type { MediumFeed } from './types';
import sanitizeHtml from 'sanitize-html';
import pkg from 'rss-to-json';
// @ts-expect-error commonJS pkg
const { parse } = pkg;

import he from 'he';

export const getMediumData = async (): Promise<MediumFeed | null> => {
  const response: MediumFeed = await parse(
    'https://medium.com/feed/@taniageuna'
  );

  if (response) {
    const cleanedItems = response.items.map(
      ({ content_encoded, content, thumbnail, ...rest }) => {
        let image = thumbnail;
        if (!image) {
          const regex = /<img[^>]*src="([^"]*)"/;
          const match = content?.match(regex);
          if (match && match[1]) {
            image = match[1];
          }
        }

        return {
          ...rest,
          thumbnail: image,
          content_encoded: he.decode(
            sanitizeHtml(content_encoded, {
              allowedTags: [],
              allowedAttributes: {},
            }).substring(0, 300)
          ),
          content: he.decode(
            sanitizeHtml(content, {
              allowedTags: [],
              allowedAttributes: {},
            }).substring(0, 300)
          ),
        };
      }
    );
    response.items = cleanedItems;
  }
  return response || null;
};
