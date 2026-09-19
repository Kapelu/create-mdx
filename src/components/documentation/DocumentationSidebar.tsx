import Link from 'next/link'

interface DocumentationSidebarProps {
  documents: string[]
}

function getDocumentLabel(fileName: string) {
  return fileName
    .replace(/\.mdx$/, '')
    .replace(/\.(tsx|ts|jsx|js)$/, '')
}

export default function DocumentationSidebar({
  documents,
}: DocumentationSidebarProps) {
  return (
    <aside className='hidden lg:block'>
      <nav
        aria-label='Documentación'
        className='sticky max-h-[calc(100dvh-128px)] overflow-y-auto pr-1'
      >
        <p className='mb-3 px-3 text-xl font-semibold uppercase tracking-wider text-muted'>
          Documentación
        </p>

        <ul className='space-y-1'>
          {documents.map((document) => (
            <li key={document}>
              <Link
                href={`/?doc=${encodeURIComponent(document)}`}
                className='block rounded-lg px-3 py-2 text-xl font-medium text-foreground transition-colors hover:bg-surface-2 hover:text-heading'
              >
                {getDocumentLabel(document)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
