import { d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_D_SWTOOE.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './about_B-Tzs4Lr.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Resume", "description": "Lorem ipsum dolor sit amet" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main-container"> <h1>Contact</h1> </main> ` })}`;
}, "/Users/lucas/workspace/personal/portfolio-tatu/src/pages/contact.astro", void 0);

const $$file = "/Users/lucas/workspace/personal/portfolio-tatu/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
