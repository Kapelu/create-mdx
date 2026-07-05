import { notFound } from 'next/navigation'

import { Container } from '@/components/layout/Container'
import Hero from '@/components/layout/Hero'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import LogoutButton from '@/components/ui/LogoutButtons'

import { getSession } from '@/lib/session'
import { getEmployeeByLegajo } from '@/lib/employee'

export const dynamic = 'force-dynamic'
export const revalidate = 0

interface PageProps {
  params: Promise<{
    usuario: string
  }>
}

export default async function DashboardPage({ params }: PageProps) {
  const { usuario } = await params

  const session = await getSession()

  if (!session) {
    notFound()
  }

  // Impide acceder al dashboard de otro usuario
  //if (session.usuario !== usuario) {
  //  notFound()
  //}

  const empleado = await getEmployeeByLegajo(session.legajo)

  if (!empleado) {
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
        <div className='relative flex flex-col items-center'>
          <div className='absolute right-0 top-0 -translate-y-12'>
            <ThemeToggle />
          </div>

          <h1 className='mb-6 text-3xl font-bold'>Dashboard</h1>

          <pre className='overflow-auto rounded-xl border border-border bg-surface p-6'>
            {JSON.stringify(empleado, null, 2)}
          </pre>

          <div className='mt-8 w-40 justify-center'>
            <LogoutButton />
          </div>
        </div>
      </section>
    </Container>
  )
}
