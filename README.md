# Advanced Creation Studio — Website

Live site: **https://christophergrisconis-coder.github.io/advanced-creation-studio/**

A three-file static site. No build step, no npm, no framework. Open `index.html` in a browser and it runs. Push to `main` and GitHub Pages redeploys in about 60 seconds.

---

## Files

| File | What's in it |
| --- | --- |
| `index.html` | All page content and structure. Every section is marked with an HTML comment (`<!-- HERO -->`, `<!-- WORK -->`, etc.) |
| `styles.css` | Design tokens at the top, then section-by-section styles in the same order as the HTML |
| `main.js` | All interactions, each in its own labeled block |

---

## Design tokens — change these first

Everything on the page reads from CSS variables at the top of `styles.css`. Change one value, it updates site-wide.

```css
/* Dark theme — line ~34 */
--accent: #e08a3c;        /* buttons, links, accents */
--bg: #100f0e;            /* page background */
--text: #ece8e2;          /* body text */

/* Light theme — line ~48 */
--accent: #b8641b;
--bg: #faf8f4;
--text: #1d1b18;
```

Fonts are loaded from Fontshare in `index.html` (line ~13) and assigned at `styles.css` line ~28:

```css
--font-display: 'Clash Display', 'Georgia', serif;   /* headings */
--font-body: 'Satoshi', 'Helvetica Neue', sans-serif; /* everything else */
```

**Never hardcode a color or font size.** Use the tokens: `var(--accent)`, `var(--text-base)`, `var(--space-6)`.

---

## What already works

These are built and tested — don't rebuild them, extend them.

| Feature | Where |
| --- | --- |
| Dark / light toggle (follows system preference, manual override) | `main.js` → "Theme toggle" |
| Sticky header with scrolled state | `main.js` → "Sticky header state" |
| Mobile hamburger menu | `main.js` → "Mobile menu" |
| Fade-up scroll reveals | `main.js` → "Reveal on scroll" (add class `reveal` to any element) |
| Animated stat counters | `main.js` → "Animated stat counters" (add `data-count="500"` `data-suffix="+"`) |
| Work grid category filter | `main.js` → "Work filter" |
| Contact form validation | `main.js` → "Contact form" |

---

## Extension points

### Adding a dropdown menu to the nav

The nav is at `index.html` line ~24 (`<nav class="nav">`). Each item is a flat `<a>`. To add a dropdown, wrap an item in a container, add a `<ul>` panel, and toggle a class on hover/click. Style it with `--surface`, `--border`, `--radius-md`, `--shadow-md` so it matches everything else.

### Adding a project to the work grid

Copy any `<article class="work__item">` block in `index.html` (line ~140 onward). Two things control it:

- `data-type="guide"` — must match a filter button's `data-filter` value (`guide`, `app`, `site`)
- `class="work__thumb work__thumb--a"` — the gradient tile. Variants `--a` through `--f` are defined at `styles.css` line ~268

To add a new filter category, add a `<button class="chip" data-filter="yourtype">` and use `data-type="yourtype"` on the items. The filter JS picks it up automatically — no code change needed.

### Adding a purchase / e-commerce platform

The site is static, so use a hosted checkout that works with plain HTML:

- **Stripe Payment Links** — create a link in the Stripe dashboard, drop it in as `<a class="btn" href="https://buy.stripe.com/...">Buy now</a>`. Zero backend.
- **Stripe Buy Button** — paste the `<script>` and `<stripe-buy-button>` snippet where you want the widget.
- **Gumroad / Lemon Squeezy / Shopify Buy Button** — all provide an embed snippet that drops straight into the HTML.

Add a `<!-- SHOP -->` section between `<!-- WORK -->` and `<!-- PROCESS -->`. Reuse the `.cards` grid and `.card` classes so the product tiles match the service tiles.

### Adding a real contact form backend

The form currently validates and shows a confirmation but sends nothing. Point it at a hosted form service:

```html
<form class="form" id="contactForm" action="https://formspree.io/f/YOUR_ID" method="POST">
```

Then remove the `e.preventDefault()` line in `main.js` → "Contact form", or keep it and submit via `fetch`. Formspree, Basin and Web3Forms all work with static hosting.

---

## Rules for anyone editing this — human or AI

1. Use the existing CSS variables. No new hardcoded hex values or pixel sizes.
2. Every new interactive control must actually work before it ships. No decorative buttons, no fake progress bars, no dead dropdowns.
3. Keep light and dark mode both working. Test the toggle after any style change.
4. Keep it responsive. Breakpoints are at 900px, 760px and 400px in `styles.css`.
5. Keep it accessible — semantic tags, `aria-label` on icon-only buttons, visible focus outlines.
6. Don't add a build step. This site's value is that it's three files anyone can open and edit.

---

## Handoff prompt

Copy this into any AI coding tool when you want changes made:

```
This is a static three-file website: index.html, styles.css, main.js.
No build step, no framework, no npm. It deploys via GitHub Pages.

Before changing anything, read the design tokens at the top of styles.css.
All colors, font sizes and spacing come from CSS variables — use them,
never hardcode a hex value or a pixel size.

The site has a working dark/light theme toggle, mobile menu, scroll
reveals, animated counters, a category filter on the work grid, and a
validated contact form. Do not rebuild these. Extend them.

Rules:
- Every control you add must visibly function. No placeholder UI.
- Both light and dark mode must still work after your change.
- Must stay responsive at 900px, 760px and 400px.
- Keep semantic HTML and aria labels on icon-only buttons.
- Do not introduce a build step or a framework.

What I want changed: [describe it here]

When you're done, tell me exactly which files you touched and what to
click to confirm the new feature is working.
```

---

## Deploying

**GitHub Pages** — already enabled on the `main` branch. Push and it goes live.

```bash
git add .
git commit -m "Describe the change"
git push
```

**Custom domain** — add a file named `CNAME` containing just your domain (e.g. `advancedcreationstudio.com`), then point your DNS at GitHub Pages:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | christophergrisconis-coder.github.io |

**Cloudflare Pages** — connect this repo in the Cloudflare dashboard, leave the build command empty and set the output directory to `/`. It's a static site, so there's nothing to build.

---

© Advanced Creation Studio — Concord, North Carolina
