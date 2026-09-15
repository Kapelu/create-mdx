import Container from '../layout/Container'
import Hero from '../layout/Hero'
import MdxDocument from '../mdx/MdxDocument'

export default function Home() {
  return (
    <section className='relative flex min-h-0 flex-1 overflow-hidden px-4 py-8 lg:py-10'>
      <Hero
        imageLight='/bg-light.svg'
        imageDark='/bg-light.svg'
        alt='Transporte Libertador'
        className='opacity-50'
      />

      <Container>
        <div className='mx-auto max-w-4xl'>
          <div className='mdx-scroll h-[calc(100dvh-128px)] overflow-y-auto rounded-2xl border border-border bg-surface-2/80 p-6 shadow-xl backdrop-blur-sm md:p-8'>
            <MdxDocument filePath='src/doc/Input.tsx.mdx' />
          </div>
        </div>
      </Container>
    </section>
  )
}
