'use client'

import { evaluate } from '@mdx-js/mdx'
import type { MDXComponents } from 'mdx/types'
import { useEffect, useState, type ComponentType } from 'react'
import * as runtime from 'react/jsx-runtime'
import remarkGfm from 'remark-gfm'

import { useMDXComponents } from '../components/ui/MdxComponents'

interface MdxRendererProps {
  source: string
  className?: string
}

export default function MdxRenderer({
  source,
  className = '',
}: MdxRendererProps) {
  const [Content, setContent] = useState<ComponentType<{
    components?: MDXComponents
  }> | null>(null)
  const components = useMDXComponents()

  useEffect(() => {
    let cancelled = false

    async function compile() {
      const result = await evaluate(source, {
        ...runtime,
        useMDXComponents: () => components,
        remarkPlugins: [remarkGfm],
      })

      if (!cancelled) {
        setContent(() => result.default)
      }
    }

    void compile()

    return () => {
      cancelled = true
    }
  }, [components, source])

  if (!Content) {
    return (
      <div className={className}>
        <p className='text-base text-muted'>Cargando documentación...</p>
      </div>
    )
  }

  return (
    <div className={className}>
      <Content components={components} />
    </div>
  )
}
