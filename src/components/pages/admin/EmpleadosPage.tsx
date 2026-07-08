'use client'

import { FormEvent, useState } from 'react'

export default function EmpleadosPage() {
  const [form, setForm] = useState({
    legajo: '',
    dni: '',
    imagen: '',
    apellido: '',
    nombres: '',
    fechaNacimiento: '',
    direccion: '',
    telefono: '',
    email: '',
    puesto: '',
    activo: true,
  })

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const response = await fetch('/api/empleados', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...form,
        legajo: Number(form.legajo),
        dni: Number(form.dni),
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      alert(data.error)
      return
    }

    alert('Empleado guardado correctamente')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='grid max-w-4xl gap-4 rounded-xl border border-border bg-surface p-6'>
      <input
        placeholder='Legajo'
        value={form.legajo}
        onChange={(e) => setForm({ ...form, legajo: e.target.value })}
      />

      <input
        placeholder='DNI'
        value={form.dni}
        onChange={(e) => setForm({ ...form, dni: e.target.value })}
      />

      <input
        placeholder='Imagen'
        value={form.imagen}
        onChange={(e) => setForm({ ...form, imagen: e.target.value })}
      />

      <input
        placeholder='Apellido'
        value={form.apellido}
        onChange={(e) => setForm({ ...form, apellido: e.target.value })}
      />

      <input
        placeholder='Nombres'
        value={form.nombres}
        onChange={(e) => setForm({ ...form, nombres: e.target.value })}
      />

      <input
        type='date'
        value={form.fechaNacimiento}
        onChange={(e) => setForm({ ...form, fechaNacimiento: e.target.value })}
      />

      <input
        placeholder='Dirección'
        value={form.direccion}
        onChange={(e) => setForm({ ...form, direccion: e.target.value })}
      />

      <input
        placeholder='Teléfono'
        value={form.telefono}
        onChange={(e) => setForm({ ...form, telefono: e.target.value })}
      />

      <input
        placeholder='Email'
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        placeholder='Puesto'
        value={form.puesto}
        onChange={(e) => setForm({ ...form, puesto: e.target.value })}
      />

      <label className='flex gap-2'>
        <input
          type='checkbox'
          checked={form.activo}
          onChange={(e) => setForm({ ...form, activo: e.target.checked })}
        />
        Activo
      </label>

      <button
        type='submit'
        className='rounded bg-primary px-4 py-2 text-primary-foreground'>
        Guardar
      </button>
    </form>
  )
}
