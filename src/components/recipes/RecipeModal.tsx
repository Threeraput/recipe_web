import { useEffect } from 'react'
import type { Recipe } from '../../types/recipe'

interface Props {
  recipe: Recipe
  onClose: () => void
}

export default function RecipeModal({ recipe, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={recipe.title}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
    >
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <div className="relative h-40 bg-zinc-900 sm:h-52">
          <img src={recipe.image} alt={recipe.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <button
            aria-label="Close modal"
            onClick={onClose}
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-brand-red"
          >
            ✕
          </button>
          <div className="absolute bottom-3 left-4 text-white">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
              {recipe.categoryLabel}
            </span>
            <h3 className="text-xl font-extrabold uppercase">{recipe.title}</h3>
            <p className="text-xs text-zinc-300">{recipe.meta}</p>
          </div>
        </div>
        <div className="p-4 sm:p-6">
          <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-darkred">Ingredients Needed</h4>
          <ul className="mb-4 list-inside list-disc space-y-1 text-xs text-brand-charcoal">
            {recipe.ingredients.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-darkred">
            Step-by-Step Instructions
          </h4>
          <ol className="mb-5 space-y-1 text-xs leading-relaxed text-brand-muted">
            {recipe.directions.map((s, i) => (
              <li key={i}>
                {i + 1}. {s}
              </li>
            ))}
          </ol>
          <div className="flex justify-end border-t border-brand-warmtan pt-3">
            <button
              onClick={onClose}
              className="rounded-lg px-4 py-2 text-xs font-semibold text-brand-charcoal transition hover:bg-brand-beige"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
