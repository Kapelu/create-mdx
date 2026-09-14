'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import TextSphere from '@/components/ui/global'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/')
    }, 10000)

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [router])

  return (
    <section className='relative min-h-screen overflow-hidden bg-primary'>
      {/* Luna */}
      <div className=' absolute left-1/2 top-1/2 aspect-square w-[clamp(18rem,70vw,52rem)] -translate-x-1/2 -translate-y-1/2 opacity-50'>
        <TextSphere
          word='Frontend Developer • Backend Developer • Web Developer • React • Next.js • TypeScript • JavaScript • Tailwind CSS • Node.js • Express • MongoDB • PostgreSQL • Desarrollo Web • Programación • Blog de Programación • Linux • Script Bash • Aplicaciones Web • APIs • Bases de Datos'
          color='#FF0512'
          speed={1}
          twist={50}
          rotationSide='counterclockwise'
          letterSpacing={300}
          font={{
            fontFamily: 'Ubuntu',
            fontWeight: 700,
            fontSize: 8,
          }}
        />
      </div>

      <div className='absolute inset-0 z-30 bg-background/20' />

      <div className='relative z-40 flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center'>
        <h1 className='font-gentium text-8xl font-bold text-title md:text-9xl'>
          404
        </h1>

        <h2 className='text-3xl font-semibold text-title'>
          Página no encontrada
        </h2>

        <p className='font-gentium max-w-md text-xl italic text-text'>
          Lo sentimos, la página que buscas está en construcción.
        </p>

        <p className='text-sm text-text/80'>
          Serás redirigido a Inicio en <strong>{countdown}</strong> segundo
          {countdown !== 1 && 's'}.
        </p>

        <Link
          href='/'
          className='rounded-lg border border-border px-6 py-3 text-link transition hover:bg-primary/10'>
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}
