import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderComponent, m as maybeRenderHead, s as spreadAttributes, g as renderSlot, A as AstroError, h as UnknownContentCollectionError, i as renderUniqueStylesheet, j as renderScriptElement, k as createHeadAndContent, u as unescapeHTML, l as renderHead } from '../astro_D_SWTOOE.mjs';
import 'kleur/colors';
import pLimit from 'p-limit';
import { p as prependForwardSlash } from '../astro/assets-service_CHmY7hUg.mjs';
/* empty css                           */
import { clsx } from 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { Linkedin } from 'lucide-react';
/* empty css                           */

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const $$Astro$6 = createAstro("https://taniageuna.com");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/lucas/workspace/personal/portfolio-tatu/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$5 = createAstro("https://taniageuna.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/blog-placeholder-1.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><!-- <link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin />
<link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin /> --><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}`;
}, "/Users/lucas/workspace/personal/portfolio-tatu/src/components/BaseHead.astro", void 0);

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underlined rounded-b-none"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const $$Astro$4 = createAstro("https://taniageuna.com");
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + subpath?.[0];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(["uppercase", buttonVariants({ variant: "link" }), className, { "!text-black cursor-default pointer-events-none": isActive }], "class:list")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/lucas/workspace/personal/portfolio-tatu/src/components/HeaderLink.astro", void 0);

const SITE_TITLE = "Tania Geuna | Political Scientist";
const NAME = "Tania";
const LASTNAME = "Geuna";
const FULL_NAME = `${NAME} ${LASTNAME}`;
const SITE_DESCRIPTION = `Labore tempor quis aute consequat amet enim aute id aliquip fugiat est ullamco ullamco. Labore laborum dolor ut dolor duis sit. Amet dolore culpa velit dolore enim Lorem. Esse veniam eiusmod pariatur ea eiusmod ut Lorem. Adipisicing proident excepteur fugiat excepteur ullamco enim commodo. Incididunt sint ut magna pariatur ea.`;
const SITE_SUBTITLE = `Tempor aliqua nulla irure.`;
const HERO_ONELINER = "Incididunt sit officia aliqua fugiat mollit exercitation sit.";
const NAVIGATION = [
  {
    title: "About",
    url: "/about"
  },
  {
    title: "Resume",
    url: "/resume"
  },
  {
    title: "Portfolio",
    url: "/portfolio"
  },
  {
    title: "My thoughts",
    url: "/blog"
  },
  {
    title: "Contact",
    url: "/contact"
  }
];
const SOCIAL_NETWORKS = [
  {
    title: "Linkedin",
    url: "https://linkedin.com/in/tania-geuna",
    icon: "Linkedin"
  },
  {
    title: "Twitter",
    url: "https://x.com/tania-geuna",
    icon: "Twitter"
  },
  {
    title: "Medium",
    url: "https://medium.com/@taniageuna",
    icon: "Medium"
  }
];

const Separator = React.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    }
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="z-50 m-0 p-0 bg-background-pastel shadow-[0 2px 8px rgba(var(--black), 5%)]"> <nav class="mx-auto max-w-screen-2xl flex items-center justify-between py-4 px-4 md:px-16 gap-2"> <div class="flex-0"> <h2 class="text-xl font-header font-semibold"><a href="/">${FULL_NAME}</a></h2> </div> <div class="flex flex-row gap-1 items-center justify-end flex-1 "> ${NAVIGATION.map(({ title, url }, index) => renderTemplate`<div class="flex flex-row gap-1"> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": url }, { "default": ($$result2) => renderTemplate`${title}` })} <div class="shrink-0"> ${NAVIGATION?.length - 1 !== index && renderTemplate`${renderComponent($$result, "Separator", Separator, { "orientation": "vertical" })}`} </div> </div>`)} </div> </nav> ${renderComponent($$result, "Separator", Separator, {})} </header>`;
}, "/Users/lucas/workspace/personal/portfolio-tatu/src/components/Header.astro", void 0);

const Icons = {
  Twitter: (props) => /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 507.91 446.91",
      role: "none",
      width: "100%",
      height: "100%",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      fill: "black",
      ...props,
      children: [
        /* @__PURE__ */ jsx("title", { children: "X" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            xmlns: "http://www.w3.org/2000/svg",
            d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
          }
        )
      ]
    }
  ),
  Github: (props) => /* @__PURE__ */ jsx(
    "svg",
    {
      viewBox: "0 0 32 32",
      "aria-hidden": "true",
      width: "32px",
      height: "32px",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
        }
      )
    }
  ),
  Linkedin,
  Medium: (props) => /* @__PURE__ */ jsx(
    "svg",
    {
      width: "32px",
      height: "32px",
      viewBox: "0 0 256 146",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      preserveAspectRatio: "xMidYMid",
      ...props,
      children: /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z",
          fill: "#000000"
        }
      ) })
    }
  )
  // sun: SunMedium,
  // moon: Moon,
  // loxgo: (props: LucideProps) => (
  //   <Image
  //     src={getAssets("v2/v2-isologo.webp")}
  //     //@ts-expect-error SafeNumber wierd error
  //     width={100}
  //     //@ts-expect-error SafeNumber wierd error
  //     height={100}
  //     alt="Logo"
  //     {...props}
  //   />
  // ),
  // MoreHorizontal: MoreHorizontal,
  // downloadCloud: DownloadCloud,
  // cancelCircle: XCircle,
  // checkCircle: CheckCircle,
  // logIn: LogIn,
  // logOut: LogOut,
  // chevronDown: ChevronDown,
};

function SocialLinks({ className }) {
  return /* @__PURE__ */ jsx("div", { className: cn(className, "flex flex-row gap-4"), children: SOCIAL_NETWORKS.map(({ title, icon, url }) => {
    const Icon = Icons[icon];
    return /* @__PURE__ */ jsxs(
      "a",
      {
        href: url,
        target: "_blank",
        className: cn(
          "no-underlined",
          buttonVariants({
            size: "lg",
            variant: "outline"
          })
        ),
        children: [
          /* @__PURE__ */ jsxs("span", { className: "sr-only", children: [
            "Follow me on ",
            title
          ] }),
          /* @__PURE__ */ jsx(Icon, { className: "size-6" })
        ]
      },
      url
    );
  }) });
}

const $$Astro$3 = createAstro("https://taniageuna.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = /* @__PURE__ */ new Date();
  Astro2.url;
  return renderTemplate`${maybeRenderHead()}<footer class="mt-2 bg-background-pastel/70 fixed bottom-0 left-0 right-0"> ${renderComponent($$result, "Separator", Separator, {})} <div class="pt-2 px-4 md:px-16 mx-auto max-w-screen-2xl flex flex-row justify-between items-center gap-2 text-xs"> <p>&copy; ${today.getFullYear()} ${FULL_NAME}. All rights reserved.</p> <p>By <a href="https://lucasverdiell.xyz" target="_blank" class="underlined">LEV</a></p> </div> ${renderComponent($$result, "SocialLinks", SocialLinks, { "className": "-mt-4 flex justify-center items-center gap-2 mb-2", "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/lucas/workspace/personal/portfolio-tatu/src/components/SocialLinks", "client:component-export": "SocialLinks" })} </footer>`;
}, "/Users/lucas/workspace/personal/portfolio-tatu/src/components/Footer.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://taniageuna.com", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/first-post.md": () => import('../first-post_DsKGtsCa.mjs'),"/src/content/blog/markdown-style-guide.md": () => import('../markdown-style-guide_B8Lhb1Tv.mjs'),"/src/content/blog/second-post.md": () => import('../second-post_CgIEt5L1.mjs'),"/src/content/blog/third-post.md": () => import('../third-post_B_nV1dtH.mjs'),"/src/content/blog/using-mdx.mdx": () => import('../using-mdx_DSb3ZO-x.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"first-post":"/src/content/blog/first-post.md","second-post":"/src/content/blog/second-post.md","third-post":"/src/content/blog/third-post.md","using-mdx":"/src/content/blog/using-mdx.mdx","markdown-style-guide":"/src/content/blog/markdown-style-guide.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/first-post.md": () => import('../first-post_Czw628x1.mjs'),"/src/content/blog/markdown-style-guide.md": () => import('../markdown-style-guide_zkN_5GBB.mjs'),"/src/content/blog/second-post.md": () => import('../second-post_C4Xs5mWg.mjs'),"/src/content/blog/third-post.md": () => import('../third-post_C3jtwMkE.mjs'),"/src/content/blog/using-mdx.mdx": () => import('../using-mdx_BeLbwIKg.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const $$Astro$2 = createAstro("https://taniageuna.com");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "/Users/lucas/workspace/personal/portfolio-tatu/src/components/FormattedDate.astro", void 0);

const $$Astro$1 = createAstro("https://taniageuna.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-bvzihdzo> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-bvzihdzo": true })}${renderHead()}</head> <body data-astro-cid-bvzihdzo> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-bvzihdzo": true })} <main data-astro-cid-bvzihdzo> <article data-astro-cid-bvzihdzo> <div class="hero-image" data-astro-cid-bvzihdzo> ${heroImage && renderTemplate`<img${addAttribute(1020, "width")}${addAttribute(510, "height")}${addAttribute(heroImage, "src")} alt="" data-astro-cid-bvzihdzo>`} </div> <div class="prose" data-astro-cid-bvzihdzo> <div class="title" data-astro-cid-bvzihdzo> <div class="date" data-astro-cid-bvzihdzo> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-bvzihdzo": true })} ${updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-bvzihdzo>
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-bvzihdzo": true })} </div>`} </div> <h1 data-astro-cid-bvzihdzo>${title}</h1> <hr data-astro-cid-bvzihdzo> </div> ${renderSlot($$result, $$slots["default"])} </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bvzihdzo": true })} </body></html>`;
}, "/Users/lucas/workspace/personal/portfolio-tatu/src/layouts/BlogPost.astro", void 0);

const $$Astro = createAstro("https://taniageuna.com");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/lucas/workspace/personal/portfolio-tatu/src/pages/blog/[...slug].astro", void 0);

const $$file = "/Users/lucas/workspace/personal/portfolio-tatu/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseHead as $, Button as B, HERO_ONELINER as H, SITE_TITLE as S, ____slug_ as _, $$Header as a, $$Footer as b, cn as c, SITE_DESCRIPTION as d, $$FormattedDate as e, SITE_SUBTITLE as f, getCollection as g, $$HeaderLink as h };
