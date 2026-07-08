'use client'

import { useEffect, useState } from 'react'

export default function Hora() {
  const [hora, setHora] = useState('')

  useEffect(() => {
    const actualizarHora = () => {
      const ahora = new Date()

      const texto = ahora.toLocaleTimeString('es-AR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })

      setHora(`${texto} hs.`)
    }

    actualizarHora()

    const intervalo = setInterval(actualizarHora, 1000)

    return () => clearInterval(intervalo)
  }, [])

  return <time>{hora}</time>
}
