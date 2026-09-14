import Container from "../layout/Container"
import Hero from "../layout/Hero"

export default function Home() {
  return (
    <section className='relative min-h-screen overflow-hidden px-4 py-16 lg:py-20'>
      <Hero
        imageLight='/bg-light.svg'
        imageDark='/bg-light.svg'
        alt='Transporte Libertador'
        className='opacity-50'
      />

      <Container>
        <div className='mx-auto max-w-4xl'>
          <h1 className="text-center">Página Principal</h1>
        </div>
      </Container>
    </section>
  )
}