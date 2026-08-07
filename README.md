# Advanced Creation Studio — Website

Marketing website for **advancedcreationstudio.com** — a government-focused strategy and creative studio, featuring the flagship **Recidivism Reduction & Reentry Support Program**.

Built as a static, dependency-free HTML/CSS/JS site — no build step required. Open it locally, edit directly in VS Code, and deploy anywhere that serves static files (GitHub Pages, Netlify, Vercel, S3, etc.).

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home — hero, service overview, flagship program teaser |
| `about.html` | Studio positioning, brand pillars, brand identity showcase |
| `services.html` | Full service catalog + delivery process + completion checklist |
| `programs.html` | Flagship Recidivism Reduction & Reentry Support Program deep-dive |
| `contact.html` | Contact form + contact details |

## Project structure

```
advancedcreationstudio/
├── index.html
├── about.html
├── services.html
├── programs.html
├── contact.html
├── css/
│   └── style.css       # full design system: colors, type, components
├── js/
│   └── main.js          # mobile nav, scroll reveal, active nav link, form handling
├── assets/
│   ├── logo.svg          # full-color logo
│   ├── logo-white.svg    # white logo (used in header/footer on dark backgrounds)
│   ├── logo-mono.svg     # monochrome logo
│   └── favicon.svg
└── README.md
```

## Brand system

Sourced from the official brand kit (`Brandkit Digital Ad Presentation.pdf`):

- **Colors** — Navy `#0B1120`, Blue `#1E90FF`, White `#FFFFFF`, Support Gray `#8A8F98`
- **Typography** — [Montserrat](https://fonts.google.com/specimen/Montserrat) (headings), [Lato](https://fonts.google.com/specimen/Lato) (body)
- **Visual language** — bold geometry, directional chevron shapes, strong hierarchy
- **Tone** — Credible · Dignified · Strategic · Compassionate
- **Slogans in use** — "Complete. Professional. Contract-Ready." / "Clear. Consistent. Confident." / "One brand. Every touchpoint. Built for trust and compliance." / "Designed to win."

All colors and fonts are defined once as CSS custom properties at the top of `css/style.css` — change them there and the whole site updates.

## ⚠️ Before you publish — placeholders to replace

This is real, working code, but a few values are intentionally placeholders since they weren't in the source brand kit:

1. **Contact info** — search `contact.html`, `index.html`, `about.html`, `services.html`, `programs.html` footers for:
   - `hello@advancedcreationstudio.com`
   - `[YOUR PHONE NUMBER]`
   - `[YOUR ADDRESS]`, `[City, State ZIP]`
2. **Contact form endpoint** — `contact.html`'s `<form id="contact-form" action="#" ...>` needs a real `action`. Options:
   - [Formspree](https://formspree.io) — swap `action="#"` for your Formspree endpoint, no backend needed
   - A serverless function (Vercel/Netlify Functions, AWS Lambda) that emails or logs submissions
   - Your own backend endpoint
3. **Favicon** — `assets/favicon.svg` is an SVG favicon (works in all modern browsers). Add a `favicon.ico` fallback if you need older-browser support.
4. **Analytics/tracking** — none included by default. Add your tracking snippet before `</head>` on each page if needed.

## Running locally

No build tools needed. Either:

```bash
# Option 1 — just open it
open index.html

# Option 2 — serve it (recommended, avoids file:// quirks)
npx serve .
# or
python3 -m http.server 8000
```

## Deploying to GitHub Pages

```bash
git init
git add .
git commit -m "Initial site build"
git branch -M main
git remote add origin https://github.com/<your-username>/advancedcreationstudio.git
git push -u origin main
```

Then in the repo: **Settings → Pages → Deploy from branch → `main` / root**. To use `advancedcreationstudio.com`, add a `CNAME` file containing just the domain, and point your domain's DNS (A/ALIAS records) at GitHub Pages per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Browser support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge). Uses CSS Grid, Flexbox, `IntersectionObserver` (with a no-JS fallback in `main.js`), and CSS custom properties.
