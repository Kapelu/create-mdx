import Container from '../layout/Container'
import Hero from '../layout/Hero'
import MdxDocument from '../mdx/MdxDocument'
import MdxProgress from './MdxProgress'

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
        <div className='mx-auto flex h-full min-h-0 max-w-4xl'>
          <MdxProgress>
            <MdxDocument filePath='src/doc/Input.tsx.mdx' />
          </MdxProgress>
        </div>
      </Container>
    </section>
  )
}
