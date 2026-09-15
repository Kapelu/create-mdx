'use client'

import { useEffect, useState, type ReactNode } from 'react'
import type { MDXComponents } from 'mdx/types'
import { createHighlighter } from 'shiki'
import Input from './Input'
import {
  DocumentTextIcon,
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

interface CodeBlockProps {
  code: string
  language: string
}

let highlighterPromise: ReturnType<typeof createHighlighter> | null = null

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['solarized-dark'],
      langs: [
        'tsx',
        'ts',
        'jsx',
        'js',
        'json',
        'bash',
        'shell',
        'css',
        'html',
        'md',
        'yaml',
      ],
    })
  }

  return highlighterPromise
}

function CodeBlock({
  code,
  language,
}: CodeBlockProps) {
  const [highlightedCode, setHighlightedCode] = useState('')

  useEffect(() => {
    let cancelled = false

    async function highlight() {
      const highlighter = await getHighlighter()

      const supportedLanguages = [
        'tsx',
        'ts',
        'jsx',
        'js',
        'json',
        'bash',
        'shell',
        'css',
        'html',
        'md',
        'yaml',
      ]

      const supportedLanguage = supportedLanguages.includes(language)
        ? language
        : 'tsx'

      const html = highlighter.codeToHtml(code, {
        lang: supportedLanguage,
        theme: 'solarized-dark',
      })

      if (!cancelled) {
        setHighlightedCode(html)
      }
    }

    void highlight()

    return () => {
      cancelled = true
    }
  }, [code, language])

  if (!highlightedCode) {
    return (
      <pre className='my-6 max-h-[70vh] overflow-auto rounded-xl border border-foreground bg-surface p-5 text-left text-sm leading-relaxed'>
        <code className='text-text'>{code}</code>
      </pre>
    )
  }

  return (
    <pre
      className='my-6 max-h-[70vh] overflow-auto rounded-xl border border-foreground bg-surface p-5 text-left text-sm leading-relaxed'
      dangerouslySetInnerHTML={{
        __html: highlightedCode,
      }}
    />
  )
}

function MdxCode({
  children,
  className,
}: {
  children?: ReactNode
  className?: string
}) {
  const language = className?.match(/language-(\w+)/)?.[1]

  if (language) {
    return (
      <code className='text-sm'>
        {children}
      </code>
    )
  }

  return (
    <code className='rounded bg-surface-2 px-1.5 py-0.5 font-mono text-xl text-primary'>
      {children}
    </code>
  )
}

function MdxPre({
  children,
}: {
  children?: ReactNode
}) {
  const child = children as ReactNode

  let code = ''
  let language = 'tsx'

  if (
    child &&
    typeof child === 'object' &&
    'props' in child &&
    child.props
  ) {
    const props = child.props as {
      children?: ReactNode
      className?: string
    }

    code = String(props.children ?? '').replace(/\n$/, '')

    const languageMatch =
      props.className?.match(/language-(\w+)/)

    language = languageMatch?.[1] ?? 'tsx'
  }

  return (
    <CodeBlock
      code={code}
      language={language}
    />
  )
}

const mdxComponents: MDXComponents = {
  Input,

  DocumentTextIcon,
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  UserIcon,

  p: ({ children }) => (
    <p className='mb-4 text-base leading-7 text-foreground last:mb-0'>
      {children}
    </p>
  ),

  ul: ({ children }) => (
    <ul className='my-6 space-y-3 text-base'>
      {children}
    </ul>
  ),

  ol: ({ children }) => (
    <ol className='mb-4 ml-6 list-decimal space-y-2 text-base'>
      {children}
    </ol>
  ),

  li: ({ children }) => (
    <li className='flex items-start gap-2'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        className='mt-1 h-5 w-5 shrink-0 text-green-500'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M5 13l4 4L19 7'
        />
      </svg>

      <span>{children}</span>
    </li>
  ),

  strong: ({ children }) => (
    <strong className='font-semibold text-heading'>
      {children}
    </strong>
  ),

  em: ({ children }) => (
    <em className='italic text-muted'>
      {children}
    </em>
  ),

  code: MdxCode,

  pre: MdxPre,

  h1: ({ children }) => (
    <h1 className='mb-6 mt-10 text-center text-4xl font-bold tracking-tight'>
      {children}
    </h1>
  ),

  h2: ({ children }) => (
    <h2 className='mb-3 text-xl font-semibold text-heading'>
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h3 className='mb-2 text-lg font-semibold text-heading'>
      {children}
    </h3>
  ),

  h4: ({ children }) => (
    <h4 className='mb-2 text-base font-semibold text-heading'>
      {children}
    </h4>
  ),

  blockquote: ({ children }) => (
    <blockquote className='my-6 border-l-4 border-primary pl-4 italic text-muted'>
      {children}
    </blockquote>
  ),

  a: ({ children, href }) => {
    const isExternal =
      href?.startsWith('http://') ||
      href?.startsWith('https://')

    return (
      <a
        href={href}
        className='text-brand underline underline-offset-4 hover:opacity-80'
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    )
  },

  hr: () => (
    <hr className='my-10 border-neutral-300 dark:border-neutral-700' />
  ),

  table: ({ children }) => (
    <div className='my-6 w-full overflow-x-auto'>
      <table className='w-full border-collapse border border-border text-sm'>
        {children}
      </table>
    </div>
  ),

  thead: ({ children }) => (
    <thead className='bg-muted'>
      {children}
    </thead>
  ),

  tbody: ({ children }) => (
    <tbody>{children}</tbody>
  ),

  tr: ({ children }) => (
    <tr className='border-b border-border last:border-b-0'>
      {children}
    </tr>
  ),

  th: ({ children }) => (
    <th className='border-r border-border px-4 py-3 text-left font-semibold text-heading last:border-r-0'>
      {children}
    </th>
  ),

  td: ({ children }) => (
    <td className='border-r border-border px-4 py-3 text-muted last:border-r-0'>
      {children}
    </td>
  ),
}

export function useMDXComponents(): MDXComponents {
  return mdxComponents
}