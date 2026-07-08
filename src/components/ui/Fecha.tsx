'use client'

import { useEffect, useState } from 'react'

export default function Fecha() {
  const [texto, setTexto] = useState('')

  useEffect(() => {
    const fecha = new Date()

    const dias = [
      'domingo',
      'lunes',
      'martes',
      'miércoles',
      'jueves',
      'viernes',
      'sábado',
    ]

    const meses = [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ]

    setTexto(
      `${
        dias[fecha.getDay()].charAt(0).toUpperCase() +
        dias[fecha.getDay()].slice(1)
      } ${fecha.getDate()} de ${
        meses[fecha.getMonth()]
      } del ${fecha.getFullYear()}`,
    )
  }, [])

  return <time>{texto}</time>
}
