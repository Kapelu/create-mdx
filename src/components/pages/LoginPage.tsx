import { Container } from '@/components/layout/Container'
import { ThemeToggle } from '../ui/ThemeToggle'
import Hero from '../layout/Hero'
import Login from '../ui/Login'

export default function LoginPage() {
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

          <Login />

        </div>
      </section>
    </Container>
  )
}
