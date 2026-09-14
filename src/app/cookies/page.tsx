import type { Metadata } from 'next'
import Container from '@/components/layout/Container'
import AppConfig from '@/data/AppConfig'

export const metadata: Metadata = {
  title: 'Política de cookies',
  description: 'Información sobre el uso de cookies en el sitio web de Transporte Libertador.',
  alternates: { canonical: `${AppConfig.url}/cookies` },
}

export default function Page() {
  return (
    <section className='min-h-screen px-4 py-16 lg:py-20'>
      <Container>
        <article className='mx-auto max-w-4xl rounded-3xl border border-border bg-background p-8 shadow-lg md:p-12'>
          <h1 className='text-4xl font-bold text-title'>Política de cookies</h1>
          <p className='mt-8 text-lg leading-relaxed text-foreground'>
            Este sitio puede utilizar tecnologías necesarias para su funcionamiento y para mejorar la experiencia de navegación.
          </p>
          <p className='mt-6 text-lg leading-relaxed text-foreground'>
            Si se incorporan herramientas de terceros que utilicen cookies adicionales, esta política deberá actualizarse para reflejar su finalidad y configuración.
          </p>
        </article>
      </Container>
    </section>
  )
}
