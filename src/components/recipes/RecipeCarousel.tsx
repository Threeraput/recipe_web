import { useHorizontalScroll } from '../../hooks/useHorizontalScroll'
import type { Recipe } from '../../types/recipe'
import RecipeCard from './RecipeCard'

interface Props {
  recipes: Recipe[]
  onSelect: (recipe: Recipe) => void
  scroller: ReturnType<typeof useHorizontalScroll<HTMLDivElement>>
}

export default function RecipeCarousel({ recipes, onSelect, scroller }: Props) {
  return (
    <div
      ref={scroller.ref}
      {...scroller.handlers}
      role="region"
      aria-label="Recipe carousel"
      className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-4 pb-6 pt-2 sm:mx-0 sm:gap-6 sm:px-0"
    >
      {recipes.map((r) => (
        <RecipeCard key={r.id} recipe={r} onSelect={onSelect} />
      ))}
    </div>
  )
}
