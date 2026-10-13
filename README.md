# MockupPro

A marketing landing page for a product mockup generator — hero, feature grid, template showcase,
pricing, testimonials and an FAQ.

**[See it live →](https://placeit-two.vercel.app)**

---

## What this is

A front-end build, not a working generator. The page sells a product: it walks a visitor from the
hero through what the tool would do — AI-fitted mockups, 3000+ templates, video and apparel
mockups, 8K exports — and ends on pricing and an FAQ.

There is no upload or rendering behind it. "Upload Your Design" is a section on the page, not a
feature. This repository is the interface.

## What is worth looking at

- A long-form landing page laid out end to end, responsive from mobile up
- A mobile navigation drawer that toggles cleanly
- Accordion sections and an FAQ where the chevron rotates with its panel
- A template gallery and testimonial layout built on a consistent spacing scale

## Built with

Static HTML with Tailwind CSS via CDN, Font Awesome for icons, and a single file of vanilla
JavaScript for the menu and accordions. No build step and no dependencies to install. Photography
is from Unsplash. Deployed on Vercel.

## Running it locally

```bash
git clone https://github.com/DustinAbhishekk/placeit.git
cd placeit
python -m http.server 8000
```

Open `http://localhost:8000`

Opening `index.html` directly from the filesystem works too, since nothing here needs a server.

## A note on the files

`index.html` and `landing.html` are currently identical copies of the same page. Only `index.html`
is served; the duplicate is a leftover and will be removed.
