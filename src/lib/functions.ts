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

export const getCustomArticles = () => {
  const articles: Partial<MediumFeed> = {
    status: 'ok',
    items: [
      {
        author: 'Tania Geuna',
        category: [
          'Cryptocurrencies',
          'Events',
          'Ethereum',
          'Web3',
          'Defi',
          'Brazil',
        ],
        content:
          'The Smat team was present at Ethereum Rio 2022, a regional event with a global outlook that was celebrated last week, from 11th to 20th March, at Rio de Janeiro city in Brazil, including the Ethereum Foundation maximum conference.',
        content_encoded:
          'The Smat team was present at Ethereum Rio 2022, a regional event with a global outlook that was celebrated last week, from 11th to 20th March, at Rio de Janeiro city in Brazil, including the Ethereum Foundation maximum conference.',
        title:
          'Smat attended the first major crypto and DeFi conference in Latam',
        thumbnail: '/eth-rio.webp',
        link: 'https://www.linkedin.com/pulse/smat-attended-first-major-crypto-defi-conference-latam-smat-s-a/',
        id: '1',
        published: '2022-03-22T00:00:00.000Z',
        enclosures: [],
        media: {},
        created: '2022-03-22T00:00:00.000Z',
      },
    ],
  };
  return articles;
};
