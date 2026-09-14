'use client'

import {
useEffect,
useRef,
useState,
type ReactNode,
} from 'react'

interface MdxProgressProps {
children: ReactNode
}

export default function MdxProgress({
children,
}: MdxProgressProps) {
const scrollRef = useRef<HTMLDivElement>(null)
const [progress, setProgress] = useState(0)

useEffect(() => {
const element = scrollRef.current

if (!element) return

const updateProgress = () => {
  const scrollHeight = element.scrollHeight
  const clientHeight = element.clientHeight
  const scrollTop = element.scrollTop

  const maxScroll = scrollHeight - clientHeight

  if (maxScroll <= 0) {
    setProgress(0)
    return
  }

  setProgress((scrollTop / maxScroll) * 100)
}

updateProgress()

element.addEventListener('scroll', updateProgress, {
  passive: true,
})

window.addEventListener('resize', updateProgress)

return () => {
  element.removeEventListener('scroll', updateProgress)
  window.removeEventListener('resize', updateProgress)
}

}, [])

return (
  <div
    ref={scrollRef}
    className='relative flex h-full min-h-0 flex-1 flex-col overflow-y-auto rounded-2xl border border-border bg-surface-2/80 shadow-xl backdrop-blur-sm'>
    <div className='sticky top-0 z-20 h-1 w-full shrink-0 overflow-hidden bg-border/40'>
      <div
        className='h-full bg-primary transition-[width] duration-100'
        style={{ width: `${progress}%` }}
      />
    </div>

    <div className='min-h-0 p-6 md:p-8'>{children}</div>
  </div>
)
}