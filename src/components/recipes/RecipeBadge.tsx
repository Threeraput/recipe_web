import type { RecipeBadgeType } from '../../types/recipe'

const styles: Record<RecipeBadgeType, string> = {
  BESTSELLER: 'bg-brand-red/90 text-white',
  'CHEF PICK': 'bg-brand-red/90 text-white',
  SPICY: 'bg-brand-red text-white',
  TRADITIONAL: 'bg-brand-gold/90 text-brand-charcoal',
  POPULAR: 'bg-brand-gold/90 text-brand-charcoal',
}

export default function RecipeBadge({ type }: { type: RecipeBadgeType }) {
  return (
    <div
      className={`absolute top-3 right-3 rounded px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider shadow ${styles[type]}`}
    >
      {type}
      {type === 'SPICY' && ' 🌶️'}
    </div>
  )
}
