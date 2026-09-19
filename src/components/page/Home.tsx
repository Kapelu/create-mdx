import fs from 'node:fs/promises'
import path from 'node:path'

import Container from '../layout/Container'
import Hero from '../layout/Hero'
import MdxDocument from '../mdx/MdxDocument'
import DocumentationSidebar from '../documentation/DocumentationSidebar'
import OnThisPage from '../documentation/OnThisPage'

interface HomeProps {
  searchParams?: Promise<{
    doc?: string
  }>
}

async function getDocuments() {
  const directory = path.resolve(process.cwd(), 'src/doc')
  const entries = await fs.readdir(directory, { withFileTypes: true })

  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.mdx'))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b))
}

function getDocumentPath(documents: string[], requestedDocument?: string) {
  if (requestedDocument && documents.includes(requestedDocument)) {
    return `src/doc/${requestedDocument}`
  }

  return documents[0] ? `src/doc/${documents[0]}` : null
}

export default async function Home({ searchParams }: HomeProps) {
  const documents = await getDocuments()
  const params = searchParams ? await searchParams : undefined
  const documentPath = getDocumentPath(documents, params?.doc)

  return (
    <section className='relative flex min-h-0 flex-1 overflow-hidden px-4 py-8 lg:py-10'>
      {/* <Hero
        imageLight='/bg-light.svg'
        imageDark='/bg-light.svg'
        alt='Transporte Libertador'
        className='opacity-50'
      /> */}

      <Container>
        <div className='grid grid-cols-1 gap-x-1 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[220px_minmax(0,760px)_220px]'>
          <DocumentationSidebar documents={documents} />

          <main
            id='content-container'
            className='min-w-0'
          >
            <div className='mdx-scroll h-[calc(100dvh-128px)] overflow-y-auto rounded-2xl border border-border bg-surface-2/80 p-6 shadow-xl backdrop-blur-sm md:p-8'>
              {documentPath ? (
                <MdxDocument filePath={documentPath} />
              ) : (
                <p className='text-base text-muted'>
                  No hay documentos MDX disponibles.
                </p>
              )}
            </div>
          </main>

          <OnThisPage />
        </div>
      </Container>
    </section>
  )
}
