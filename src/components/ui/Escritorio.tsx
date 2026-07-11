'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

import { useModal } from '@/components/layout/ModalProvider'

interface EscritorioProps {
  children: ReactNode
  className?: string
}

const RESOLUCION_MINIMA = {
  width: 776,
  height: 590,
}

const ANCHO_MAXIMO = 1200

export default function Escritorio({ children, className }: EscritorioProps) {
  const { showModal } = useModal()

  const [validResolution, setValidResolution] = useState(false)
  const modalMostrado = useRef(false)

  useEffect(() => {
    const verificarResolucion = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      const soportada =
        width >= RESOLUCION_MINIMA.width && height >= RESOLUCION_MINIMA.height

      setValidResolution(soportada)

      if (!soportada && !modalMostrado.current) {
        modalMostrado.current = true

        showModal({
          icon: 'warning',
          messages: [
            'La resolución actual no es compatible con este módulo.',
            `Resolución disponible: ${width}x${height}.`,
            `Resolución mínima requerida: ${RESOLUCION_MINIMA.width}x${RESOLUCION_MINIMA.height}.`,
          ],
          buttonText: 'Aceptar',
        })
      }

      if (soportada) {
        modalMostrado.current = false
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
      <div className='flex h-full min-h-0 w-full items-center justify-center bg-background' />
    )
  }

  return (
    <div className='mx-auto flex h-full min-h-0 w-full max-w-300 flex-col'>
      <div className={className}>{children}</div>
    </div>
  )
}
