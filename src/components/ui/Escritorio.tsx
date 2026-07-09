'use client'

import { useEffect, useState, type ReactNode } from 'react'

import { useModal } from '@/components/layout/ModalProvider'

interface EscritorioProps {
  children: ReactNode
}

const RESOLUCION_MINIMA = {
  width: 1280,
  height: 720,
}

export default function Escritorio({ children }: EscritorioProps) {
  const { showModal } = useModal()

  const [validResolution, setValidResolution] = useState(false)

  useEffect(() => {
    const verificarResolucion = () => {
      const soportada =
        window.innerWidth >= RESOLUCION_MINIMA.width &&
        window.innerHeight >= RESOLUCION_MINIMA.height

      setValidResolution(soportada)

      if (!soportada) {
        showModal({
          icon: 'warning',
          messages: [
            'La resolución actual no es compatible con este módulo.',
            `Resolución mínima requerida: ${RESOLUCION_MINIMA.width}x${RESOLUCION_MINIMA.height}.`,
            'Utilice una pantalla de escritorio para continuar.',
          ],
          buttonText: 'Aceptar',
        })
      }
    }

    verificarResolucion()

    window.addEventListener('resize', verificarResolucion)

    return () => {
      window.removeEventListener('resize', verificarResolucion)
    }
  }, [showModal])

  if (!validResolution) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-background' />
    )
  }

  return <>{children}</>
}
