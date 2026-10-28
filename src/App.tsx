import { useMemo, useState } from 'react'
import ArrowButton from './components/common/ArrowButton'
import BackgroundArt from './components/recipes/BackgroundArt'
import RecipeCarousel from './components/recipes/RecipeCarousel'
import RecipeFilterBar from './components/recipes/RecipeFilterBar'
import RecipeModal from './components/recipes/RecipeModal'
import { recipes, type CategoryFilter } from './data/recipesData'
import { useHorizontalScroll } from './hooks/useHorizontalScroll'
import type { Recipe } from './types/recipe'

export default function App() {
  const [category, setCategory] = useState<CategoryFilter>('all')
  const [selected, setSelected] = useState<Recipe | null>(null)
  const scroller = useHorizontalScroll<HTMLDivElement>()

  const visible = useMemo(
    () => (category === 'all' ? recipes : recipes.filter((r) => r.category === category)),
    [category],
  )

  const changeCategory = (value: CategoryFilter) => {
    setCategory(value)
    scroller.ref.current?.scrollTo({ left: 0 })
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-brand-cream font-sans text-brand-charcoal antialiased selection:bg-brand-red selection:text-white">
      <BackgroundArt />
      <main className="relative z-10 pb-16 pt-8">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-2xl font-extrabold uppercase tracking-wide text-brand-red sm:text-3xl md:text-4xl">
                Recommended
              </h2>
              <div className="-mt-2.5 -rotate-1 pl-1 font-script text-3xl font-bold text-brand-darkred sm:-mt-3 sm:text-4xl md:text-5xl">
                Recipes
              </div>
              <p className="mt-2 max-w-lg text-xs font-medium text-brand-muted sm:text-sm">
                Handcrafted traditional recipes with our signature pre-portioned ingredients. Fast, authentic, and
                delicious.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <RecipeFilterBar value={category} onChange={changeCategory} />
              <div className="flex items-center gap-1.5 self-end sm:self-auto">
                <ArrowButton direction="left" onClick={() => scroller.scrollByStep(-1)} />
                <ArrowButton direction="right" onClick={() => scroller.scrollByStep(1)} />
              </div>
            </div>
          </div>

          <RecipeCarousel recipes={visible} onSelect={setSelected} scroller={scroller} />

          <div className="mt-3 flex items-center justify-between px-2 text-xs text-brand-muted">
            <span className="inline-flex items-center gap-1.5 text-[11px]">
              <svg className="h-4 w-4 animate-pulse text-brand-red" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="sm:hidden">Swipe to discover recipes</span>
              <span className="hidden sm:inline">Scroll or swipe horizontally to discover all curated recipes</span>
            </span>
            <span className="whitespace-nowrap pl-2 font-semibold text-brand-charcoal/70">
              Showing {visible.length} Featured Recipes
            </span>
          </div>
        </div>
      </main>
      {selected && <RecipeModal recipe={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
