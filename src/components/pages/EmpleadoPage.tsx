import { Container } from '@/components/layout/Container'
import { ThemeToggle } from '../ui/ThemeToggle'
import Hero from '../layout/Hero'
import { Button } from '../ui/Button'
import { redirect } from 'next/navigation'
import { getEmployeeByLegajo } from '@/lib/employee'
import { getSession } from '@/lib/session'
import type { Empleado } from '@/types/database'


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
        <div className='relative'>
          <div className='absolute right-0 top-0 -translate-y-12'>
            <ThemeToggle />
          </div>
          <h1 className='mb-6 text-3xl font-bold'>Empleado autenticado</h1>

          <pre className='overflow-auto rounded-xl border border-border bg-surface p-6'>
            {JSON.stringify(empleado, null, 2)}
          </pre>
        </div>

        <Button href='/'>salir</Button>
      </section>
    </Container>
  )
}
