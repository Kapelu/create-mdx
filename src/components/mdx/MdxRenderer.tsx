'use client'

import { evaluate } from '@mdx-js/mdx'
import type { MDXComponents } from 'mdx/types'

import { useEffect, useState, type ComponentType } from 'react'

import * as runtime from 'react/jsx-runtime'

import remarkGfm from 'remark-gfm'

import { useMDXComponents } from '../ui/MdxComponents'

interface MdxRendererProps {
  source: string
  className?: string
}

type MdxContent = ComponentType<{
  components?: MDXComponents
}>

export default function MdxRenderer({
  source,
  className = '',
}: MdxRendererProps) {
  const [Content, setContent] = useState<MdxContent | null>(null)

  const components = useMDXComponents()

  useEffect(() => {
    let cancelled = false

    async function compileMdx() {
      try {
        const result = await evaluate(source, {
          ...runtime,
          useMDXComponents: () => components,
          remarkPlugins: [remarkGfm],
        })

        if (!cancelled) {
          setContent(() => result.default as MdxContent)
        }
      } catch (error) {
        console.error('Error al compilar el documento MDX:', error)

        if (!cancelled) {
          setContent(null)
        }
      }
    }

    void compileMdx()

    return () => {
      cancelled = true
    }
  }, [source, components])

  if (!Content) {
    return (
      <div className={className}>
        <p className='text-muted'>Cargando documentación...</p>
      </div>
    )
  }

  return (
    <div className={className}>
      <Content components={components} />
    </div>
  )
}
