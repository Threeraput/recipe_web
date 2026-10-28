# Recommended Recipes Showcase

Responsive recipe carousel built with React, TypeScript, Vite and Tailwind CSS v4.

## Features

- Horizontal snap-scroll carousel with Previous/Next buttons, ArrowLeft/ArrowRight keys, mouse drag and touch swipe
- Category filter (All Dishes, Noodles, Desserts, Salads)
- Recipe card with product tag, badge, prep/cook time and a minute timer badge
- Full recipe modal (close with Esc, backdrop click or the close button)
- Responsive layout for mobile, tablet and desktop

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check and build to dist/
npm run preview  # preview the production build
npm run lint     # run Oxlint
```

## Project structure

```text
src/
├── components/
│   ├── common/
│   │   └── ArrowButton.tsx
│   └── recipes/
│       ├── BackgroundArt.tsx      # decorative line-art background
│       ├── ProductTag.tsx         # product pack label on the card image
│       ├── RecipeBadge.tsx        # BESTSELLER / SPICY / ...
│       ├── RecipeCard.tsx
│       ├── RecipeCarousel.tsx
│       ├── RecipeFilterBar.tsx
│       ├── RecipeModal.tsx
│       └── RecipeTimerBadge.tsx
├── data/recipesData.ts            # recipe data and category list
├── hooks/useHorizontalScroll.ts   # scroll buttons, keyboard and drag
├── types/recipe.ts                # Recipe type
├── App.tsx
├── index.css                      # Tailwind import and brand theme
└── main.tsx
```

## Adding a recipe

Add an object to the `recipes` array in `src/data/recipesData.ts`. Fields follow the `Recipe` type in `src/types/recipe.ts`. Use the optional `imagePosition` (CSS `object-position`) to control how the image is cropped.
