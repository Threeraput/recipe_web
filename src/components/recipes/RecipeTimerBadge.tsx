export default function RecipeTimerBadge({ minutes }: { minutes: number }) {
  return (
    <div
      className="flex h-11 w-11 flex-none flex-col items-center justify-center rounded-full border-2 border-brand-red/80 bg-brand-cream shadow-inner"
      title={`${minutes} Minutes Cooking Time`}
    >
      <span className="text-[7px] font-bold uppercase leading-none text-brand-muted">MIN</span>
      <span className="text-sm font-black leading-none text-brand-darkred">{minutes}'</span>
    </div>
  )
}
