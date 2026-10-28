import type { Recipe } from '../../types/recipe'

const themes = {
  amber: 'bg-amber-950/80 border-amber-400/40 text-amber-200',
  brown: 'bg-amber-800/80 border-amber-300/40 text-amber-200',
  emerald: 'bg-emerald-950/80 border-emerald-400/40 text-emerald-200',
}

export default function ProductTag({ tag }: { tag: Recipe['productTag'] }) {
  return (
    <div
      className={`absolute left-2.5 top-2.5 flex h-[88px] w-16 flex-col items-center justify-center rounded border p-1 text-center shadow-md ${themes[tag.theme]}`}
    >
      <span className="text-[7px] font-bold uppercase tracking-tighter">{tag.label}</span>
      <span className="font-serif text-[9px] font-black leading-none text-white">{tag.name}</span>
      <span className="mt-0.5 text-[6px] text-amber-100/70">{tag.sub}</span>
    </div>
  )
}
