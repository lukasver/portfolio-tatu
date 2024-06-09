import { d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_D_SWTOOE.mjs';
import 'kleur/colors';
import sanitizeHtml from 'sanitize-html';
import he from 'he';
import { jsxs, jsx } from 'react/jsx-runtime';
import { C as Card, P as Particles, $ as $$Layout } from './about_B-Tzs4Lr.mjs';

const getMediumData = async () => {
  const response = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@taniageuna",
    { method: "GET" }
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
              allowedAttributes: {}
            }).split("\n").slice(0, 5).join("\n")
          ),
          content: he.decode(
            sanitizeHtml(content, {
              allowedTags: [],
              allowedAttributes: {}
            }).split("\n").slice(0, 5).join("\n")
          )
        };
      }
    );
    response.items = cleanedItems;
  }
  return response || null;
};

function MediumCard(props) {
  const { title, link, thumbnail, description } = props;
  return /* @__PURE__ */ jsxs(Card, { className: "p-4 flex flex-row gap-2", children: [
    /* @__PURE__ */ jsx("picture", { className: "aspect-square flex-1 h-full shrink-0 w-[160px]", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: thumbnail,
        alt: title,
        className: "h-full w-full max-w-[160px] object-cover rounded"
      }
    ) }),
    /* @__PURE__ */ jsxs("article", { className: "flex-[3] flex flex-col justify-evenly", children: [
      /* @__PURE__ */ jsx("p", { className: "text font-bold", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm line-clamp-4", children: description }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end items-center", children: /* @__PURE__ */ jsx(
        "a",
        {
          rel: "nofollow noopener noreferrer",
          className: "text-xs font-bold",
          href: link,
          children: "See more..."
        }
      ) })
    ] })
  ] });
}

const $$Portfolio = createComponent(async ($$result, $$props, $$slots) => {
  const mediumData = await getMediumData();
  const SOCIAL_MEDIA_LINKS = [
    { title: "Focus desarrollos", url: "https://https://focusdesarrollos.com.ar" },
    { title: "Smat", url: "https://smat.io" },
    { title: "Bank of Chain", url: "https://https://bankofchain.io" }
  ];
  const OTHER_PROJECT_LINKS = [
    { title: "Brochures Focus", url: "https://https://focusdesarrollos.com.ar" },
    { title: "Wedding website Marie & Anthony", url: "https://smat.io" },
    { title: "Bank of Chain", url: "https://https://bankofchain.io" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolio", "description": "Lorem ipsum dolor sit amet" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main-container flex flex-col md:flex-row gap-6 p-6"> ${renderComponent($$result2, "Particles", Particles, { "client:idle": true, "className": "absolute inset-0 -z-10", "quantity": 1e3, "ease": 80, "color": "#000000", "refresh": true, "client:component-hydration": "idle", "client:component-path": "@components/ui/particles", "client:component-export": "Particles" })} <section id="articles" class="flex-1 h-full"> <h1 class="border-b-2 border-muted uppercase text-right mb-2">Articles</h1> <div class="flex flex-col gap-4 max-h-[490px] overflow-y-scroll"> ${mediumData?.items?.map((props) => renderTemplate`${renderComponent($$result2, "MediumCard", MediumCard, { ...props })}`)} </div> </section> <div class="flex-1 h-full flex flex-col gap-12"> <section id="social-media"> <h1 class="border-b-2 border-muted uppercase text-left">Social Media</h1> <ul class="h-full flex flex-col justify-evenly"> ${SOCIAL_MEDIA_LINKS.map(
    ({ url, title }) => renderTemplate`<li> <a${addAttribute(url, "href")} target="_blank" rel="nofollow noopener">${title}</a> </li>`
  )} </ul> </section> <section id="other-projects"> <h1 class="border-b-2 border-muted uppercase text-left">Other Projects</h1> <ul class="h-full flex flex-col justify-evenly"> ${OTHER_PROJECT_LINKS.map(
    ({ url, title }) => renderTemplate`<li> <a${addAttribute(url, "href")} target="_blank" rel="nofollow noopener">${title}</a> </li>`
  )} </ul> </section> </div> </main>  ` })}`;
}, "/Users/lucas/workspace/personal/portfolio-tatu/src/pages/portfolio.astro", void 0);

const $$file = "/Users/lucas/workspace/personal/portfolio-tatu/src/pages/portfolio.astro";
const $$url = "/portfolio";

export { $$Portfolio as default, $$file as file, $$url as url };
