import { categories, type CategoryFilter } from '../../data/recipesData'

interface Props {
  value: CategoryFilter
  onChange: (value: CategoryFilter) => void
}

export default function RecipeFilterBar({ value, onChange }: Props) {
  return (
    <div
      role="tablist"
      aria-label="Recipe categories"
      className="no-scrollbar flex w-full overflow-x-auto rounded-lg sm:w-auto bg-brand-warmtan/50 p-1 text-xs font-semibold"
    >
      {categories.map((c) => (
        <button
          key={c.value}
          role="tab"
          aria-selected={value === c.value}
          onClick={() => onChange(c.value)}
          className={`flex-1 whitespace-nowrap rounded-md px-3 py-1.5 transition sm:flex-none ${
            value === c.value
              ? 'bg-white text-brand-darkred shadow-sm'
              : 'text-brand-charcoal/70 hover:text-brand-darkred'
          }`}
        >
          {c.label}
        </button>
      ))}
    </div>
  )
}
