# Comprehensive Rebrand — Local Review Package

**Branch:** `rebrand/comprehensive-review` (local only — not pushed to GitHub)

## Preview locally

From the `advanced-creation-studio` folder:

```bash
python3 -m http.server 8080
```

Then open: **http://localhost:8080**

Pages to review:
- http://localhost:8080/index.html — Home (merged live + GitHub main)
- http://localhost:8080/about.html
- http://localhost:8080/services.html
- http://localhost:8080/programs.html
- http://localhost:8080/contact.html

---

## What was merged

### From live site (advancedcreationstudio.com)
- Hero tagline: **Reentry with Dignity. Results with Purpose.**
- Positioning statement in hero lead
- Hero info cards (government / evidence / reintegration)
- Four pillar cards (government-trusted, evidence-based, human-centered, workforce)
- "What we offer" + program pillars list
- CTA copy: Let's Partner / advance safer communities
- Contact: chrisgrisconis@icloud.com, (980) 980-9449, (980) 680-8909
- Web3Forms contact submission

### From GitHub main (kept)
- 5-page structure + full navigation
- Stat strip, hero panel (Why Agencies Choose Us)
- Services preview grid (6 cards)
- Flagship program teaser
- About: story, positioning pillars, key messages, brand identity
- Services: full catalog, process timeline, completion checklist
- Programs: overview, three pillars, tone block, delivery standard
- Contact: expanded form fields (name, agency, interest)
- Heap analytics, mobile nav, scroll reveal

### Brand kit applied
- Colors: Navy `#0B1120`, Blue `#1E90FF`, White `#FFFFFF`, Gray `#A0A4AB`
- Typography: Montserrat headings, Lato body
- Geometric styling: 4px radius, diagonal section dividers, square icon containers
- Logos: `logo-white.svg` (header), `logo-mono.svg` (footer), `logo.svg` (about)

---

## Brand checklist

- [x] Logo variants wired (SVG; PNG swap-ready when exported from brand kit PDF)
- [x] CSS variables — no stray `#8A8F98` in stylesheet
- [x] Montserrat + Lato on all pages
- [x] Contact email + both phones in footer and contact page
- [x] All 5 pages navigable
- [x] Copy tone: credible, dignified — no casual language
- [x] All substantive sections from both sources present
- [ ] **Not pushed** — awaiting your approval

---

## Remaining items for you

1. **Logo PNGs** — Export from brand kit PDF to `/assets/` when ready (`logo-full-color.png`, `logo-white.png`, `logo-monochrome.png`). SVGs work now.
2. **Physical address** — Contact page uses "North Carolina — serving partners nationwide" (no street address in either source).
3. **Approve & push** — Reply when ready; we can push to `rebrand/comprehensive-review` and optionally deploy via Cloudflare.

---

## Files changed

| File | Summary |
|------|---------|
| `index.html` | Live hero/pillars/offerings + main stat strip, services, program teaser |
| `about.html` | Positioning copy, gray swatch `#A0A4AB`, footer |
| `services.html` | Footer contact |
| `programs.html` | "What we offer" section, footer |
| `contact.html` | Web3Forms, live contact info, footer |
| `css/style.css` | Brand variables, geometric components, offerings/hero-side styles |
| `js/main.js` | Web3Forms async submit |
| `wrangler.toml` | Cloudflare static deploy config |
