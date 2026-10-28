import { useCallback, useRef } from 'react'

// Supports arrow buttons, ArrowLeft/Right keys and mouse drag; touch uses native scroll.
export function useHorizontalScroll<T extends HTMLElement>(step = 310) {
  const ref = useRef<T>(null)
  const drag = useRef({ active: false, startX: 0, startLeft: 0, moved: false })

  const scrollByStep = useCallback(
    (dir: 1 | -1) => ref.current?.scrollBy({ left: dir * step, behavior: 'smooth' }),
    [step],
  )

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') scrollByStep(1)
    if (e.key === 'ArrowLeft') scrollByStep(-1)
  }

  const onMouseDown = (e: React.MouseEvent) => {
    if (!ref.current) return
    drag.current = { active: true, startX: e.pageX, startLeft: ref.current.scrollLeft, moved: false }
  }
  const onMouseMove = (e: React.MouseEvent) => {
    const d = drag.current
    if (!d.active || !ref.current) return
    const dx = e.pageX - d.startX
    if (Math.abs(dx) > 5) d.moved = true
    ref.current.scrollLeft = d.startLeft - dx
  }
  const end = () => {
    drag.current.active = false
  }
  // Suppress the click that follows a drag.
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.stopPropagation()
      drag.current.moved = false
    }
  }

  return {
    ref,
    scrollByStep,
    handlers: { onKeyDown, onMouseDown, onMouseMove, onMouseUp: end, onMouseLeave: end, onClickCapture },
  }
}
