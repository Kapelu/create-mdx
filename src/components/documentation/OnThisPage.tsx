'use client'

import { useEffect, useState } from 'react'

interface HeadingItem {
  id: string
  text: string
  level: number
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

function collectHeadings(container: HTMLElement): HeadingItem[] {
  const usedIds = new Set<string>()
  const headings = Array.from(
    container.querySelectorAll<HTMLHeadingElement>('h2, h3, h4')
  )

  return headings.map((heading) => {
    const text = heading.textContent?.trim() ?? ''
    const baseId = heading.id || slugify(text) || 'section'
    let id = baseId
    let counter = 2

    while (usedIds.has(id)) {
      id = `${baseId}-${counter}`
      counter += 1
    }

    heading.id = id
    usedIds.add(id)

    return {
      id,
      text,
      level: Number(heading.tagName.substring(1)),
    }
  })
}

export default function OnThisPage() {
  const [headings, setHeadings] = useState<HeadingItem[]>([])

  useEffect(() => {
    const container = document.getElementById('content-container')

    if (!container) {
      return
    }

    const update = () => {
      setHeadings(collectHeadings(container))
    }

    update()

    const observer = new MutationObserver(update)
    observer.observe(container, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  if (headings.length === 0) {
    return <aside className='hidden xl:block' aria-hidden='true' />
  }

  return (
    <aside className='hidden xl:block'>
      <nav
        aria-label='En esta página'
        className='sticky max-h-[calc(100dvh-128px)] overflow-y-auto pl-2'
      >
        <p className='mb-3 text-xs font-semibold uppercase tracking-wider text-muted'>
          En esta página
        </p>

        <ul className='space-y-1 border-l border-border'>
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={[
                  'block py-1 text-sm text-muted transition-colors hover:text-heading',
                  heading.level === 3 ? 'pl-5' : '',
                  heading.level === 4 ? 'pl-8 text-xs' : '',
                  heading.level === 2 ? 'pl-3' : '',
                ].join(' ')}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
