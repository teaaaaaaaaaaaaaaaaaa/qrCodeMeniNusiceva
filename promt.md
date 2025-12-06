You are an expert front-end developer and designer.  
Create a **single-page React app in TypeScript** with classic **CSS files** (no Tailwind, no CSS-in-JS).

The page will be opened from a **QR code** on phones, so it must be:

- **Mobile-first**, perfectly responsive
- Very fast, minimal but stylish
- One single page (no routing)

## GENERAL STYLE / THEME

Overall vibe: **1920s Great Gatsby / vintage casino**, elegant and luxurious but minimal.

Design requirements:

- Background: **off-white / slightly textured vintage paper** feel, but implemented with CSS only (e.g. subtle gradient + noise effect using a CSS trick, no external images).
- Color palette:
  - main text: very dark brown or near-black
  - accents: **gold / champagne**, used sparingly for borders, titles, separators, hover states
- Typography:
  - Use **Google Fonts**:
    - One elegant serif font for titles (e.g. "Playfair Display" or "Cinzel")
    - One **italic serif** font for menu items (e.g. "Cormorant Garamond" or "Playfair Display italic")
  - Titles in uppercase with letter-spacing for an Art Deco feel
  - Menu items in **italic**, slightly larger than normal, with good line spacing
- Layout:
  - Max width around 480–600px, centered on the screen
  - Content vertically centered or slightly above center on mobile
  - Enough padding so it feels airy

## CONTENT

Main title on the page (large, animated):

> nusiceva 17a Meni

Under that, one section "Cocktails" (no heading necessary, but can have a subtle label or separator), with **four items** written exactly like this (but you may correct spelling to proper English):

1. Mimosa — (orange juice, champagne)
2. Whiskey Sour — (simple syrup, whisky Walker, lime juice)
3. French 75 — (champagne, simple syrup, gin, lemon juice)
4. Smoothie Cosmopolitan — (smoothie from mixed fruits, vodka, simple syrup, lemon juice)

Below that, another section “Others” or similar (you can name it in a stylish way, e.g. “Extras”), with these lines:

- Beer – Banjalucko pivo
- Tequila – shots
- Ice Tea
- Expensive Vodka – shots

Text should be in English for ingredients, but keep “Banjalucko pivo” as-is.

## ANIMATIONS & INTERACTIONS

I want tasteful, smooth animations (no overkill).

1. **Intro animation for the main title**

   - When the page loads, the text `nusiceva 17a Meni` should appear with a **typewriter / typing effect**:
     - Letters appear one by one
     - Slight blinking cursor at the end while it types
     - After it finishes typing, the cursor can fade out
   - Implement this typing effect in **React + TypeScript**, no external libraries.

2. **Section fade-in**

   - After the title finishes typing (or after a short delay), the cocktail list and the “others” section should:
     - Fade in and slightly move up (e.g. translateY from 10–15px to 0)
     - Use CSS transitions or keyframes

3. **Hover / tap effects** (subtle)

   - On desktop hover or mobile tap:
     - Each drink line can have a slight gold glow / underline animation
   - Maybe a subtle **golden border shimmer** around the main card when hovered (desktop) or when first loaded (CSS animation).

4. **Subtle background animation**
   - Optional but desirable: a very gentle, slow animation like:
     - Faint moving shadow, or
     - Slight gradient shift
   - Keep it extremely subtle so text remains fully readable.

## CREATIVE DETAILS (YOU MUST IMPLEMENT)

Add some small visual details that reinforce the **1920s casino / Great Gatsby** vibe:

- A **decorative Art Deco border** around the main content card:
  - Thin gold lines
  - Maybe geometric corners (you can do this purely with CSS borders / pseudo-elements)
- Title area can have:
  - Small **Art Deco style separator** (e.g. a horizontal line with a small diamond shape in the center) implemented with CSS and pseudo-elements.
- Use small **card-suit icons** (♦ ♣ ♠ ♥) purely as text/icons near the section titles or at the bottom (no external icon libs). For example:
  - A minimal footer line like: `♦♣♠♥` centered at the bottom with opacity 0.6 and small size.
- Ensure all these details are subtle and do not distract from readability.

## TECHNICAL REQUIREMENTS

- Use **React + TypeScript**.
- Assume this is a **Vite + React + TS** project or Create React App with TypeScript – but just output the necessary files for the main simple app.
- Use regular **CSS** files (e.g. `index.css`, `App.css`).
- Files to generate (with full code for each):

  1. `index.html` (basic, with proper `<meta name="viewport" content="width=device-width, initial-scale=1">` and Google Fonts link)
  2. `src/main.tsx`
  3. `src/App.tsx`
  4. `src/App.css`
  5. `src/index.css` (if needed)

- In `App.tsx`:
  - Implement the typing effect using React hooks (`useState`, `useEffect`) in TypeScript.
  - After typing is done, trigger a state that adds a class to animate the content sections (for fade-in).
- Make sure the page looks good on:
  - **Small phones** (narrow width)
  - Tablets
  - Desktop (can simply be centered with max-width)

## ACCESSIBILITY & QUALITY

- Use semantic HTML where possible (`<main>`, `<section>`, headings).
- Ensure sufficient color contrast (dark text on light background).
- Avoid tiny font sizes; make it readable on mobile.

## OUTPUT FORMAT

Return the **complete code** ready to be used, in clearly separated sections, for example:
