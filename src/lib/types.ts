export interface MediumFeed {
  status: 'ok';
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: Array<{
    id: string;
    title: string;
    published: string;
    link: string;
    created: string;
    author: string;
    thumbnail: string;
    content_encoded: string;
    content: string;
    enclosures: [];
    category: string[];
    media: {};
  }>;
}
