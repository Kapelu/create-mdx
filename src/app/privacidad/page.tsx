import type { Metadata } from 'next'
import Container from '@/components/layout/Container'
import AppConfig from '@/data/AppConfig'

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description: 'Política de privacidad del sitio web de Transporte Libertador.',
  alternates: { canonical: `${AppConfig.url}/privacidad` },
}

export default function Page() {
  return (
    <section className='min-h-screen px-4 py-16 lg:py-20'>
      <Container>
        <article className='mx-auto max-w-4xl rounded-3xl border border-border bg-background p-8 shadow-lg md:p-12'>
          <h1 className='text-4xl font-bold text-title'>Política de privacidad</h1>
          <p className='mt-8 text-lg leading-relaxed text-foreground'>
            Este sitio utiliza los datos enviados voluntariamente a través del formulario de contacto únicamente para responder consultas relacionadas con Componentes.
          </p>
          <p className='mt-6 text-lg leading-relaxed text-foreground'>
            Para consultas sobre el tratamiento de información personal, podés comunicarte mediante los canales publicados en la sección de contacto.
          </p>
        </article>
      </Container>
    </section>
  )
}
