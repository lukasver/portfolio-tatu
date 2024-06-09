import { d as createComponent, r as renderTemplate, f as renderComponent, l as renderHead, e as addAttribute, m as maybeRenderHead } from '../astro_D_SWTOOE.mjs';
import 'kleur/colors';
import { g as getCollection, e as $$FormattedDate, $ as $$BaseHead, a as $$Header, b as $$Footer, S as SITE_TITLE, d as SITE_DESCRIPTION, c as cn, H as HERO_ONELINER, f as SITE_SUBTITLE, B as Button } from './__CGycTNXc.mjs';
/* empty css                          */
import { P as Particles, C as Card, $ as $$Layout } from './about_B-Tzs4Lr.mjs';
import { jsx } from 'react/jsx-runtime';
/* empty css                          */

const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en" data-astro-cid-5tznm7mj> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-5tznm7mj": true })}${renderHead()}</head> <body data-astro-cid-5tznm7mj> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-5tznm7mj": true })} <main data-astro-cid-5tznm7mj> <section data-astro-cid-5tznm7mj> <ul data-astro-cid-5tznm7mj> ${posts.map((post) => renderTemplate`<li data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.slug}/`, "href")} data-astro-cid-5tznm7mj> <img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(post.data.heroImage, "src")} alt="" data-astro-cid-5tznm7mj> <h4 class="title" data-astro-cid-5tznm7mj>${post.data.title}</h4> <p class="date" data-astro-cid-5tznm7mj> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-5tznm7mj": true })} </p> </a> </li>`)} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })} </body></html>`;
}, "/Users/lucas/workspace/personal/portfolio-tatu/src/pages/blog/index.astro", void 0);

const $$file$1 = "/Users/lucas/workspace/personal/portfolio-tatu/src/pages/blog/index.astro";
const $$url$1 = "/blog";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const BorderBeam = ({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "#DC2626",
  colorTo = "#FFF5F2",
  delay = 0
}) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        "--size": size,
        "--duration": duration,
        "--anchor": anchor,
        "--border-width": borderWidth,
        "--color-from": colorFrom,
        "--color-to": colorTo,
        "--delay": `-${delay}s`
      },
      className: cn(
        "absolute inset-[0] rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
        // mask styles
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
        // pseudo styles
        "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
        className
      )
    }
  );
};

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="h-full w-full grid place-content-center" data-astro-cid-xhaoqxbd> ${renderComponent($$result, "Particles", Particles, { "client:idle": true, "className": "absolute inset-0 -z-10", "quantity": 1e3, "ease": 80, "color": "#000000", "refresh": true, "client:component-hydration": "idle", "client:component-path": "@components/ui/particles", "client:component-export": "Particles", "data-astro-cid-xhaoqxbd": true })} <div class="flex flex-col-reverse lg:flex-row gap-2 max-w-[90%] mx-auto 2xl:mb-40 relative p-4 rounded-3xl items-center" data-astro-cid-xhaoqxbd> ${renderComponent($$result, "Card", Card, { "className": "grid place-content-center flex-[2] border-none m-auto p-4 shadow-none relative sm:mt-8 md:mt-0", "data-astro-cid-xhaoqxbd": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BorderBeam", BorderBeam, { "data-astro-cid-xhaoqxbd": true })} <div class="flex flex-col gap-6" data-astro-cid-xhaoqxbd> <h1 class="text-5xl" data-astro-cid-xhaoqxbd>${HERO_ONELINER}</h1> <h2 class="text-2xl" data-astro-cid-xhaoqxbd>${SITE_SUBTITLE}</h2> <p data-astro-cid-xhaoqxbd>${SITE_DESCRIPTION}</p> <div class="flex justify-start items-center max-w" data-astro-cid-xhaoqxbd> <a href="/contact" class="no-underlined" data-astro-cid-xhaoqxbd>${renderComponent($$result2, "Button", Button, { "client:load": true, "className": "z-50", "client:component-hydration": "load", "client:component-path": "@components/ui/button", "client:component-export": "Button", "data-astro-cid-xhaoqxbd": true }, { "default": ($$result3) => renderTemplate`Get in touch` })}</a> </div> </div> ` })} <!-- <Separator orientation="vertical"/> --> <picture class="relative aspect-[4/3] grid place-content-center" data-astro-cid-xhaoqxbd> <!-- image section --> <!-- <img src="/public/avatar.jpg" alt="photo" class="w-80 h-[340px] rounded-full"/> --> </picture> </div> </main> `;
}, "/Users/lucas/workspace/personal/portfolio-tatu/src/components/Home.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Home", $$Home, {})} ` })}`;
}, "/Users/lucas/workspace/personal/portfolio-tatu/src/pages/index.astro", void 0);

const $$file = "/Users/lucas/workspace/personal/portfolio-tatu/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
