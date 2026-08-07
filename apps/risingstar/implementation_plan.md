# Comprehensive Implementation Plan - Rising Kids School Project

This document details the step-by-step history and plans for building and customizing the **Rising Kids School** website within the monorepo structure.

---

## Phase 1: Turborepo Setup for schoolwebsites

Set up a Turborepo in `/schoolwebsites` with one application, `risingstar`, using Next.js and TypeScript, and a shared UI styling package.

### Monorepo Setup (Root Configs)
Create workspace configuration files, build pipeline configurations, and dependency definitions.

- **[package.json](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/package.json)**: Define workspaces (`apps/*`, `packages/*`), turbo scripts, and development dependencies.
- **[turbo.json](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/turbo.json)**: Configure turbo build, dev, and lint pipelines.
- **[.gitignore](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/.gitignore)**: Replicate build caches, node_modules, and env file patterns.

### Internal UI Library
Replicate CSS design tokens and style sheets setup of UI components, mapping under the `@schoolwebsites/ui` package.

- **[packages/ui/package.json](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/packages/ui/package.json)**: Define package properties, dependencies (`sass`, `bootstrap`), and build scripts.
- **[packages/ui/src/index.scss](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/packages/ui/src/index.scss)**: Main Sass entrypoint importing design tokens, bootstrap theme, base rules, layout, buttons, forms, and themes.
- **[packages/ui/src/_variables.scss](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/packages/ui/src/_variables.scss)**: Theme variables and tokens mapped under the `--sw-` prefix.
- **[packages/ui/src/_bootstrap-theme.scss](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/packages/ui/src/_bootstrap-theme.scss)**: Map Bootstrap custom utility variables to our theme variables.
- **[packages/ui/src/_base.scss](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/packages/ui/src/_base.scss)**: Base resets and typography styles.
- **[packages/ui/src/_layout.scss](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/packages/ui/src/_layout.scss)**: Gutter, narrow-container, and basic structural alignments.
- **[packages/ui/src/_buttons.scss](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/packages/ui/src/_buttons.scss)**: Extension of Bootstrap buttons custom styles.
- **[packages/ui/src/_forms.scss](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/packages/ui/src/_forms.scss)**: Extensions of Bootstrap form control styles.
- **[packages/ui/src/_light-theme.scss](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/packages/ui/src/_light-theme.scss)**: Light-theme-specific aesthetic enhancements.

### Rising Star Application
Create the `risingstar` Next.js Application under `apps/risingstar`.

- **[apps/risingstar/package.json](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/apps/risingstar/package.json)**: Next.js dependencies and script definitions, referencing the local UI package `@schoolwebsites/ui` via file reference.
- **[apps/risingstar/next.config.mjs](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/apps/risingstar/next.config.mjs)**: Define basic Next.js configuration.
- **[apps/risingstar/tsconfig.json](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/apps/risingstar/tsconfig.json)**: TypeScript configuration.
- **[apps/risingstar/global.d.ts](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/apps/risingstar/global.d.ts)**: TypeScript CSS and SCSS module declarations.
- **[apps/risingstar/app/layout.tsx](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/apps/risingstar/app/layout.tsx)**: Base layout importing Bootstrap & `@schoolwebsites/ui`, with common header/footer components.
- **[apps/risingstar/app/page.tsx](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/apps/risingstar/app/page.tsx)**: Premium school landing page.
- **[apps/risingstar/app/globals.css](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/apps/risingstar/app/globals.css)**: Custom CSS tweaks specific to Rising Star application.

---

## Phase 2: Localization to Vijay Nagar, Ghaziabad

Localize the website to be fully relevant to **Vijay Nagar, Ghaziabad, India**. This involves updating generated image assets and text context.

### Image Assets Localized
- **classroom.png**: Vibrant indoor classroom setting featuring Indian children learning.
- **hero_school.png**: Modern colorful school building with Indian students in school uniforms.
- **indoor_games.png**: Soft mat play area showing puzzle blocks and toddler sensory play.
- **outdoor_games.png**: Green grassy playground featuring slides, swings, and kids running.

### Content Localized
- CBSE aligned foundations and environmental science (EVS) syllabus integrations.
- Localized school day timeline (prayer assembly, tiffin fruit break, and school van drop-offs).
- Transport coverage areas (Vijay Nagar, Pratap Vihar, Siddharth Vihar).

---

## Phase 3: Rising Kids School Customization (Branding & Logo)

Rebrand the school website from **Rising Star** to **Rising Kids School** based on physical pamphlet details.

### Custom Branding Logo
- Generated a clean, high-resolution vector school emblem: a golden circular ring with a blue inner shield, glowing torch, book, green laurels, and text "RISING KIDS SCHOOL / NURTURING EXCELLENCE".
- Saved at [logo.png](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/apps/risingstar/public/images/logo.png).

### Layout & Page Customizations
- Updated header brand names, layout metadata, and copyright fields in [layout.tsx](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/apps/risingstar/app/layout.tsx).
- Customized footer with the official address: `📍 C 47, Sector 9, New Vijay Nagar, Ghaziabad, U.P. 201009`.
- Created an interactive **Digital Pamphlet Card** component in [page.tsx](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/apps/risingstar/app/page.tsx) featuring a sunny yellow theme with floating drawing elements (pencils, rulers, paint brushes, numbers).

### Image Text Editing
- Modified school signboards and banners on [outdoor_games.png](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/apps/risingstar/public/images/outdoor_games.png) and [hero_school.png](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/apps/risingstar/public/images/hero_school.png) to read "RISING KIDS SCHOOL" in English and "राइजिंग किड्स स्कूल" in Hindi.

### Playgroup & Nursery Gallery Additions
- Generated [indoor_dice_mat.png](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/apps/risingstar/public/images/indoor_dice_mat.png): features interactive alphabet learning mats, plush dice toys, and a mini-slider.
- Generated [nursery_activities.png](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/apps/risingstar/public/images/nursery_activities.png): features sorting games, shapes blocks, and low play tables.
- Integrated both images into the gallery filter views on the home page.

### Google Maps Navigation integration
- Integrated a live Google Maps map iframe at the bottom of the Inquiry / FAQ section on the home page using the school coordinates `q=28.643333,77.427889` (corresponding to `28°38'36.0"N 77°25'40.4"E`) to ensure a red location pin marker is dropped precisely on the school campus.
- Styled the map container card with `.badge-pill-kids`, rounded borders, and shadows for seamless branding integration.

### Favicon (Title Logo) integration
- Embedded the custom school emblem `logo.png` as the website favicon by adding a `<link rel="icon">` reference inside the Next.js layout head configuration in [layout.tsx](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/apps/risingstar/app/layout.tsx).

### Glassmorphism & Floating Stationery background
- Designed a custom seamless SVG background pattern composed of school supply icons (books, notebooks, pencils, rulers, pens, and palettes) rendered dynamically in CSS, with extra-large font sizes (`80px - 90px`).
- Set the background to repeat infinitely across the screen (`background-repeat: repeat; background-size: 600px 600px`) inside [globals.css](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/apps/risingstar/app/globals.css).
- Created a smooth infinite sliding diagonal animation (`pattern-slide`) that translates the background position continuously for a premium floating watermark aesthetic.
- Positioned all primary landing page sections and content cards at `z-index: 2` and the background container at `z-index: 1` to ensure stationery items remain visible on top of section gradients/colors but behind the card contents.
- Restyled all landing page containers (curriculums, inquiries, FAQs, core values cards, header) to feature highly transparent white backdrops with CSS glassmorphism (`backdrop-filter: blur(5px)` and opacity `0.4 - 0.5`) so the background pattern slides clearly behind all panels.
- Resolved static override conflict in banner floating illustration classes (`.illust-brush`, `.illust-pencil`, `.illust-ruler`) inside [globals.css](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/apps/risingstar/app/globals.css) to enable the floating animation to play smoothly on the hero banner.
- Restored the main `.hero-school` background layout gradient to be solid, hiding the sliding stationery backdrop in the main hero header area.

### Interactive Desk Flat-Lay Showcase
- Re-architected the hero section to keep the left column text completely clean, uncluttered, and professional, removing any background handwriting collisions.
- Designed a custom skeuomorphic flat-lay desk container (`.desk-container`) inside [page.tsx](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/apps/risingstar/app/page.tsx) and [globals.css](file:///Users/anmolgupta/Documents/Projects/myspace/schoolwebsites/apps/risingstar/app/globals.css) that showcases:
  1. A Polaroid-style photo card of the classroom (`/images/classroom.png`) complete with white frame edges, shadow offsets, and an interactive rotation hover effect.
  2. A stack of layered textbooks (purple and orange-yellow books with bindings) sitting underneath the Polaroid card to add height and dimensions.
  3. A pinned yellow Post-it sticky note (`.desk-sticky-note` with a red thumbtack) saying "Play. Learn. Grow!" in custom cursive.
  4. A spiral-bound notebook sheet lying flat on the desk, playing the human hand cursive writing animation spelling out school features.
  5. Playful desk accessories: a floating kids milk mug (`🥛`) and glowing stars (`⭐️`, `✨`) drifting gently around the desk to fully utilize empty whitespace and create a premium, balanced workspace layout.
