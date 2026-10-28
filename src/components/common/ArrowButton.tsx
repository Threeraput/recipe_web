interface Props {
  direction: 'left' | 'right'
  onClick: () => void
}

export default function ArrowButton({ direction, onClick }: Props) {
  return (
    <button
      type="button"
      aria-label={direction === 'left' ? 'Previous recipe' : 'Next recipe'}
      onClick={onClick}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-warmtan bg-white text-brand-charcoal shadow transition hover:border-brand-red hover:bg-brand-red hover:text-white"
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d={direction === 'left' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
