import { notFound } from 'next/navigation'

import { Container } from '@/components/layout/Container'
import Hero from '@/components/layout/Hero'
import ChoferPage from '@/components/pages/ChoferDashboard'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

import { getEmployeeByLegajo } from '@/lib/login/employee'
import { getSession } from '@/lib/login/session'

interface PageProps {
  params: Promise<{
    usuario: string
  }>
}

export default async function MainPage({ params }: PageProps) {
  const { usuario } = await params

  const session = await getSession()

  if (!session) {
    notFound()
  }

  if (session.usuario !== usuario) {
    notFound()
  }

  const empleado = await getEmployeeByLegajo(session.legajo)

  if (!empleado) {
    notFound()
  }

  if (empleado.puesto !== 'Chofer') {
    notFound()
  }

  return (
    <Container>
      <Hero
        imageLight='/images/bg-light.svg'
        imageDark='/images/bg-dark.svg'
        alt='Hero background'
        lightOpacity={0.7}
        variant='fixed'
      />

      <section className='relative flex min-h-screen items-center justify-center'>
        <div className='absolute right-6 top-6'>
          <ThemeToggle />
        </div>

        <ChoferPage empleado={empleado} />
      </section>
    </Container>
  )
}
