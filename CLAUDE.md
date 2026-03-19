# CLAUDE.md — gaming-website

## Project Overview
Project name: gaming-website
This is a beginner-friendly web project. Follow all rules below exactly in every conversation.

---

## File Structure Rules
- The project contains exactly three files (unless I explicitly ask for more):
  - `index.html` — all HTML structure goes here
  - `styles.css` — all styling goes here
  - `script.js` — all JavaScript goes here
- All three files live in the same root project folder
- Images go in a folder called `/images/` inside the project root
- Never create additional CSS or JS files unless I explicitly ask for them

## HTML Rules
- `index.html` must link to `styles.css` in the `<head>` section:
  ```html
  <link rel="stylesheet" href="styles.css">
  ```
- `index.html` must link to `script.js` just before the closing `</body>` tag:
  ```html
  <script src="script.js"></script>
  ```
- Use semantic HTML elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Every image must have an `alt` attribute describing what it shows
- Never put styles inline in HTML — all styling goes in `styles.css`
- Never put JavaScript inside HTML files — all JS goes in `script.js`

## CSS Rules
- All styling goes in `styles.css` — never inline styles in HTML
- The site must be responsive: look good on both mobile phones and desktop
- Write clean, well-commented CSS — use comments to label each section
- Do not use any external CSS frameworks (no Bootstrap, no Tailwind)

## JavaScript Rules
- All JavaScript goes in `script.js`
- Write clean, well-commented JavaScript — explain what each function does
- Do not use any JavaScript libraries unless I specifically ask for one

## Design Rules
- The Frontend Design skill is installed — use it automatically for all design work
- Produce high-quality, polished, responsive designs
- Avoid generic or plain-looking interfaces
