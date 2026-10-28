export default function BackgroundArt() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <svg className="line-art-bg absolute -left-6 top-8 h-72 w-44 opacity-60" viewBox="0 0 160 260">
        <path d="M 60,18 L 88,32 C 92,34 94,39 91,44 L 75,76 C 73,80 68,81 64,79 L 36,65 C 32,63 30,58 33,54 L 49,22 C 51,18 56,16 60,18 Z" />
        <line x1="49" x2="57" y1="36" y2="52" />
        <line x1="59" x2="67" y1="41" y2="57" />
        <line x1="69" x2="77" y1="46" y2="62" />
        <path d="M 62,77 L 76,140 C 78,145 83,148 88,147 L 90,147" />
        <path d="M 12,185 C 40,165 110,165 138,185 L 138,245 C 138,252 130,258 120,258 L 30,258 C 20,258 12,252 12,245 Z" />
        <path d="M 2,180 Q 75,150 148,180" />
        <path d="M 60,160 Q 75,150 90,160" />
        <path d="M 138,198 C 150,198 155,208 145,214" />
        <path d="M 12,198 C 0,198 -5,208 5,214" />
      </svg>
      <svg className="line-art-bg absolute -top-12 right-4 h-80 w-80 opacity-40" viewBox="0 0 200 200">
        <circle cx="150" cy="50" r="30" strokeDasharray="4 4" />
        <circle cx="150" cy="50" r="50" />
        <circle cx="150" cy="50" r="70" strokeDasharray="6 6" />
        <g strokeWidth="2">
          <line x1="150" x2="150" y1="-20" y2="10" />
          <line x1="80" x2="110" y1="50" y2="50" />
          <line x1="150" x2="150" y1="90" y2="120" />
          <line x1="190" x2="220" y1="50" y2="50" />
          <line x1="100" x2="122" y1="0" y2="22" />
          <line x1="100" x2="122" y1="100" y2="78" />
          <line x1="178" x2="200" y1="22" y2="0" />
          <line x1="178" x2="200" y1="78" y2="100" />
        </g>
      </svg>
      <div className="absolute bottom-0 left-0 right-0 h-16 rounded-t-[50%] bg-white/70 blur-sm" />
    </div>
  )
}
