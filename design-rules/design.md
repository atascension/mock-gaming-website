# design.md — Retro Gaming Archive Website

## 1. Project Summary

This is a retro gaming archive website. It acts as a historical journey through video game
history — covering the major revolutions in gaming and the classic consoles that defined each
era. As visitors scroll through the site, they experience a story unfolding, not just a page
of information. The site has a strong retro, 8-bit aesthetic throughout.

The website also serves as the home base for a retro gaming video series where the host
visits people's personal retro gaming collections. The primary goal of the site is to get
retro gaming fans to fill out a form to be featured on that series.

---

## 2. Target Audience

**Who visits this site:** Retro gaming fans — people who grew up playing classic consoles
or who have a deep passion for video game history.

**The ONE action we want them to take:** Fill out the contact form to apply to be featured
on the retro gaming collection series.

---

## 3. Pages & Structure

The website has four pages:

### Page 1 — Home
- **Hero Section:** Full-width opening area with the site name, a short punchy tagline,
  and a clear call-to-action button (e.g. "Get Featured" or "Start Your Journey")
- **What Is This Place:** A short intro block explaining what the archive is and why it exists
- **Highlights Strip:** A preview row teasing the History page — e.g. 3 clickable era cards
  (Arcade Era, 8-bit Era, 16-bit Era) that link to the History page
- **Featured CTA Banner:** A bold section near the bottom inviting visitors to apply to
  be featured on the show — links to the Contact page

### Page 2 — About
- **Our Story:** What this archive is, why it was built, and what makes it different
- **The Mission:** The purpose — preserving and celebrating retro gaming history
- **The Show:** A short section explaining the retro gaming collection series and what
  being featured means
- **A Personal Touch:** Could include a photo or short bio of the creator (placeholder
  for now if no content is ready)

### Page 3 — History
- **Intro Banner:** Sets the scene — "Every game has a story. Every console has a legacy."
- **Timeline Journey:** A scrollable, visually rich timeline that walks visitors through
  the major eras of video game history:
  - The Arcade Era (1970s)
  - The 8-Bit Era (1980s) — NES, Atari, Commodore 64
  - The 16-Bit Era (early 1990s) — SNES, Sega Genesis
  - The 32/64-Bit Era (mid 1990s) — PlayStation, N64, Sega Saturn
  - The Early 2000s — PS2, GameCube, Xbox, Game Boy Advance
- **Console Spotlight Cards:** Individual feature cards for iconic consoles — image,
  release year, key games, why it mattered
- **Closing CTA:** Invite visitors to submit their own collection story

### Page 4 — Contact
- **Intro Block:** Explains what being featured means and what to expect
- **Contact Form Fields:**
  - Full Name
  - Email Address
  - City / State / Country
  - How long have you been collecting?
  - Describe your collection (textarea — open field)
  - How did you find us? (dropdown: Google, Social Media, Word of Mouth, Other)
  - Submit Button ("Apply to Be Featured")
- **Note below form:** "We read every submission personally and will be in touch within
  7–10 days if you're a good fit."

---

## 4. Visual Feel & Tone

The site should feel like a journey — a story being told as you scroll. It is not a basic
informational website. Every section should feel intentional and immersive.

**Tone words:** Retro, bold, atmospheric, nostalgic, storytelling, immersive, passionate.

The aesthetic is rooted in classic arcade and 8-bit culture — pixel fonts for headings,
subtle scanline or grid textures in the background, and design choices that reference the
golden age of gaming without being campy or clichéd.

**Important:** The site must look professionally designed. It should not look AI-generated,
generic, or templated. Every design decision should feel deliberate and craft-driven.

---

## 5. Color Palette (60-30-10 Rule)

| Role        | % of Site | Color Name       | Hex Code  |
|-------------|-----------|------------------|-----------|
| Background  | 60%       | Soft Retro Gray  | `#EBEBEB` |
| Text        | 30%       | Rich Near-Black  | `#1A1A1A` |
| Accent      | 10%       | Arcade Red       | `#CC0000` |

**Usage notes:**
- `#EBEBEB` — used for page backgrounds, section fills, and card backgrounds
- `#1A1A1A` — used for all body text, headings, and navigation links
- `#CC0000` — used for buttons, hover states, timeline markers, highlights, and borders
  on key elements. Use sparingly so it pops.
- Do NOT use color gradients. Flat, intentional color use only.
- Accessibility: All text and background combinations must meet WCAG AA contrast standards.
  The near-black on light gray combination exceeds this easily.

---

## 6. Typography

Both fonts are loaded from **Google Fonts** — free and no install required.

| Role              | Font Name       | Where It's Used                              |
|-------------------|-----------------|----------------------------------------------|
| Primary (Display) | Press Start 2P  | Page titles, section headings, hero text     |
| Secondary (Body)  | Rajdhani        | Body text, form labels, nav links, subtitles |

**Font usage rules:**
- `Press Start 2P` is an 8-bit pixel font. Use it large and use it boldly. Do NOT use it
  for small body text — it becomes unreadable below 14px. Headlines and hero text only.
- `Rajdhani` is clean, geometric, and slightly technical — a perfect complement. Use it
  for all body copy, descriptions, labels, and navigation. It is very easy to read.
- Suggested heading sizes:
  - H1 (hero): 32–48px in Press Start 2P
  - H2 (section titles): 20–28px in Press Start 2P
  - H3 (card titles): 16–20px in Rajdhani (Semi-Bold)
  - Body: 16–18px in Rajdhani (Regular)
  - Small text / labels: 14px in Rajdhani

---

## 7. Interactive Features

### Scroll Animations
- Elements fade in or slide up as the visitor scrolls down — subtle, not distracting
- Timeline entries animate in one at a time as the user reaches them
- Console cards have a gentle hover lift effect (box-shadow grows slightly on hover)
- The hero section may have a subtle animated background element (e.g. slow pixel grid pulse)

### Contact Form
- All fields are required except the "How did you find us?" dropdown
- Basic validation: email must be in correct format, name and email cannot be blank
- Submit button changes state on hover (color shift from red to darker red)
- After submission, a simple thank-you message replaces the form:
  "Thanks for applying! We'll be in touch within 7–10 days."
- No page reload on submit (JavaScript handles this)

---

## 8. What to Avoid

- No AI-generated aesthetics — no generic hero layouts, no stock photo backgrounds,
  no cookie-cutter card designs
- No color gradients — flat, intentional color only
- No cluttered layouts — each section breathes, nothing is overcrowded
- No cheap-looking fonts — only the two approved Google Fonts above
- No flashing or seizure-inducing animations — all animations are smooth and subtle
- No external CSS frameworks (no Bootstrap, no Tailwind) — custom CSS only
- No JavaScript libraries unless specifically requested later

---

## 9. Technical Decisions (Made for the User)

The following choices were made by the developer on the user's behalf since they are
technical in nature:

- **Responsive design:** The site will work on phones, tablets, and desktops. Mobile layout
  stacks everything vertically. Desktop layout uses wider multi-column sections.
- **Google Fonts link method:** Both fonts will be loaded via a single `<link>` tag in the
  `<head>` of index.html — no download required.
- **Scroll animations:** Handled with the browser's built-in `IntersectionObserver` API —
  no libraries needed, fast and lightweight.
- **Form submission:** Handled with JavaScript — the page does not reload, and a thank-you
  message appears after the user submits.
- **File structure:** Follows the project rules exactly — `index.html`, `styles.css`,
  `script.js` all in the root folder. Images in `/images/`.
- **Navigation:** A persistent top navigation bar linking to all four pages. On mobile,
  this collapses into a simple hamburger-style menu.
