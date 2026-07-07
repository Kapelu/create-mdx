import { Container } from '@/components/layout/Container'
import Loader from '@/components/ui/Loader'

export default function Loading() {
  return (
    <Container>
      <section className='flex min-h-screen items-center justify-center'>
        <Loader
          color1='var(--primary)'
          color2='var(--warning)'
          size={60}
        />
      </section>
    </Container>
  )
}
