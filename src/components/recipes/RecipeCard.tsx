import type { Recipe } from '../../types/recipe'
import ProductTag from './ProductTag'
import RecipeBadge from './RecipeBadge'
import RecipeTimerBadge from './RecipeTimerBadge'

interface Props {
  recipe: Recipe
  onSelect: (recipe: Recipe) => void
}

export default function RecipeCard({ recipe, onSelect }: Props) {
  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`View full recipe: ${recipe.title}`}
      onClick={() => onSelect(recipe)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect(recipe)
        }
      }}
      className="card-shadow group flex w-[78vw] max-w-[300px] flex-none cursor-pointer snap-start flex-col justify-between overflow-hidden rounded-xl border border-brand-warmtan/50 bg-white focus-visible:outline-2 focus-visible:outline-brand-red sm:w-[285px] lg:w-[300px]"
    >
      <div className="relative h-52 overflow-hidden bg-zinc-900 sm:h-56">
        <img
          src={recipe.image}
          alt={recipe.title}
          loading="lazy"
          style={{ objectPosition: recipe.imagePosition }}
          className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />
        <ProductTag tag={recipe.productTag} />
        {recipe.badge && <RecipeBadge type={recipe.badge} />}
        <div className="absolute bottom-2.5 left-3 right-3 text-white">
          <h3 className="text-sm font-extrabold uppercase tracking-wider transition-colors group-hover:text-amber-300">
            {recipe.title}
          </h3>
          <p className="text-[11px] font-medium tracking-tight text-zinc-300">
            {recipe.totalMinutes} mins | {recipe.servings}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between bg-gradient-to-b from-white to-brand-cream/40 p-3.5 text-xs">
        <div>
          <div className="mb-2.5 rounded bg-brand-red px-2 py-0.5 text-center text-[10px] font-bold uppercase tracking-wide text-white">
            Prep Time: {recipe.prepTime} | Cooking: {recipe.cookTime}
          </div>
          <div className="mb-2 flex items-start justify-between gap-1">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-brand-darkred">
                Ingredients
              </span>
              <ul className="mt-0.5 space-y-0.5 text-[10px] text-brand-charcoal/80">
                {recipe.summaryIngredients.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <RecipeTimerBadge minutes={recipe.totalMinutes} />
          </div>
          <div className="mt-2 border-t border-brand-warmtan/70 pt-2">
            <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-wider text-brand-darkred">
              Directions
            </span>
            <ol className="line-clamp-3 text-[10px] leading-relaxed text-brand-charcoal/70">
              {recipe.directions.map((step, i) => (
                <li key={i} className="inline">
                  {i + 1}. {step}{' '}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-brand-warmtan/50 pt-2">
          <span className="text-[9px] uppercase tracking-wider text-brand-muted">{recipe.tagline}</span>
          <span className="text-[10px] font-bold text-brand-red group-hover:underline">View Full Recipe →</span>
        </div>
      </div>
    </article>
  )
}
