import { Container } from '@/components/layout/Container'
import Hero from '../layout/Hero'
import { ThemeToggle } from '../ui/ThemeToggle'
import { Button } from '../ui/Button'
import LogoutButton from '../ui/LogoutButtons'
export const dynamic = 'force-dynamic'
export const revalidate = 0
import { redirect } from 'next/navigation'

import { getEmployeeByLegajo } from '@/lib/employee'
import { getSession } from '@/lib/session'

export default async function EmpleadoPage() {
  const session = await getSession()

  if (!session) {
    redirect('/login')
  }

  const empleado = await getEmployeeByLegajo(session.legajo)

  if (!empleado) {
    redirect('/login')
  }

  return (
    <Container>
      <Hero
        imageLight='/images/bg.webp'
        imageDark='/images/bg.webp'
        alt='Hero background space'
        lightOpacity={0.7}
        variant='fixed'
      />

      <section className='relative flex min-h-screen items-center justify-center'>
        <div className='relative flex flex-col items-center'>
          <div className='absolute right-0 top-0 -translate-y-12'>
            <ThemeToggle />
          </div>

          <h1 className='mb-6 text-3xl font-bold'>Empleado autenticado</h1>

          <pre className='overflow-auto rounded-xl border border-border bg-surface p-6'>
            {JSON.stringify(empleado, null, 2)}
          </pre>

          <div className='mt-8 w-40 justify-center'>
            <LogoutButton/>
          </div>
        </div>
      </section>
    </Container>
  )
}
