import { Container } from '@/components/layout/Container'
import type { Empleado } from '@/types/database'
import Hero from '../layout/Hero'
import LogoutButton from '../ui/login/LogoutButtons'

interface ChoferPageProps {
  empleado: Empleado
}

export default function ChoferPage({ empleado }: ChoferPageProps) {
  return (
    <Container>
      <Hero
        imageLight='/images/login-bg.webp'
        imageDark='/images/login-bg.webp'
        alt='Hero background space'
        lightOpacity={0.7}
        variant='fixed'
      />

      <section className='relative flex min-h-screen items-center justify-center'>
        <div className='flex flex-col items-center'>
          <h2 className='mb-6 text-3xl font-bold'>Panel del Chofer</h2>

          <pre className='overflow-auto rounded-xl border border-border bg-surface p-6'>
            {JSON.stringify(empleado, null, 2)}
          </pre>

          <div className='mt-8 w-40'>
            <LogoutButton />
          </div>
        </div>
      </section>
    </Container>
  )
}
