'use client'

import {
  CalendarDays,
  Eye,
  EyeOff,
  FileImage,
  Lock,
  User,
  UserPlus,
} from 'lucide-react'
import { useRef, useState, type ChangeEvent } from 'react'

export default function AltaEmpleado() {
  const [mostrarPassword, setMostrarPassword] = useState(false)
  const [imagen, setImagen] = useState<string | null>(null)

  const imagenRef = useRef<HTMLInputElement>(null)

  const handleImagen = (e: ChangeEvent<HTMLInputElement>) => {
    const archivo = e.target.files?.[0]

    if (!archivo) return

    const url = URL.createObjectURL(archivo)

    setImagen(url)
  }

  return (
    <section className='relative mx-auto w-full max-w-7xl rounded-xl border border-border bg-surface shadow-lg'>
      <header className='flex items-center gap-3 border-b border-border px-8 py-5'>
        <UserPlus className='text-primary' size={28} />

        <h1 className='text-2xl font-semibold text-heading'>
          Alta de Empleado
        </h1>
      </header>

      <form className='space-y-8 p-8 pb-28'>
        {/* DATOS ACCESO */}
        <fieldset className='rounded-xl border border-border p-6'>
          <legend className='flex items-center gap-2 px-3 font-semibold text-heading'>
            <Lock size={18} />
            Datos de Acceso
          </legend>

          <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-2'>
              <label className='mb-1 block text-sm'>Legajo *</label>

              <input
                required
                className='w-full rounded-xl border border-border bg-background p-3 outline-none transition focus:ring-2 focus:ring-primary'
              />
            </div>

            <div className='col-span-5'>
              <label className='mb-1 block text-sm'>Usuario *</label>

              <input
                required
                className='w-full rounded-xl border border-border bg-background p-3 outline-none transition focus:ring-2 focus:ring-primary'
              />
            </div>

            <div className='col-span-5'>
              <label className='mb-1 block text-sm'>Contraseña *</label>

              <div className='relative'>
                <input
                  required
                  type={mostrarPassword ? 'text' : 'password'}
                  className='w-full rounded-xl border border-border bg-background p-3 pr-12 outline-none transition focus:ring-2 focus:ring-primary'
                />

                <button
                  type='button'
                  onClick={() => setMostrarPassword(!mostrarPassword)}
                  className='absolute right-3 top-3 text-muted'>
                  {mostrarPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className='col-span-6'>
              <label className='mb-1 block text-sm'>Puesto *</label>

              <select className='w-full rounded-xl border border-border bg-background p-3 outline-none focus:ring-2 focus:ring-primary'>
                <option />
                <option>RRHH</option>
                <option>Logística</option>
                <option>Gerencia</option>
                <option>Chofer</option>
                <option>Mecánico</option>
              </select>
            </div>

            <div className='col-span-3 flex items-end'>
              <label className='flex h-12 items-center gap-3 rounded-xl border border-border px-5'>
                <input type='checkbox' defaultChecked />
                Activo
              </label>
            </div>
          </div>
        </fieldset>

        {/* DATOS PERSONALES */}

        <fieldset className='rounded-xl border border-border p-6'>
          <legend className='flex items-center gap-2 px-3 font-semibold text-heading'>
            <User size={18} />
            Datos Personales
          </legend>

          <div className='grid grid-cols-12 gap-5'>
            <Input label='DNI' className='col-span-4' />

            <Input
              label='Fecha Nacimiento'
              type='date'
              className='col-span-4'
              icon={<CalendarDays size={18} />}
            />

            <Input label='Apellido' className='col-span-6' />

            <Input label='Nombres' className='col-span-6' />

            <Input label='Estado Civil' className='col-span-4' />

            <div className='col-span-4'>
              <label className='mb-1 block text-sm'>Imagen</label>

              <input
                ref={imagenRef}
                hidden
                type='file'
                accept='image/*'
                onChange={handleImagen}
              />

              <button
                type='button'
                onClick={() => imagenRef.current?.click()}
                className='flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-border transition hover:bg-surface-2'>
                <FileImage size={18} />
                Cargar imagen
              </button>

              {imagen && (
                <img
                  src={imagen}
                  alt='preview'
                  className='mt-3 h-24 w-24 rounded-xl object-cover'
                />
              )}
            </div>
          </div>
        </fieldset>

        {/* CONTACTO */}

        <Section title='Contacto'>
          <div className='grid grid-cols-2 gap-5'>
            <Input label='Email' />

            <Input label='Teléfono' />
          </div>
        </Section>

        {/* DIRECCION */}

        <Section title='Dirección'>
          <div className='grid grid-cols-2 gap-5'>
            <Input label='Calle' />

            <Input label='Número' />

            <Input label='Piso' />

            <Input label='Departamento' />

            <Input label='Localidad' />

            <Input label='Provincia' />

            <Input label='País' />
          </div>
        </Section>

        {/* GRUPO FAMILIAR */}

        <Section title='Grupo Familiar'>
          <div className='flex gap-10'>
            <label className='flex items-center gap-3'>
              <input type='checkbox' />
              Tiene hijos
            </label>

            <Input label='Cantidad' />
          </div>
        </Section>

        {/* NOTAS */}

        <Section title='Notas'>
          <textarea className='h-32 w-full resize-none rounded-xl border border-border bg-background p-4 outline-none focus:ring-2 focus:ring-primary' />
        </Section>
      </form>

      <footer className='fixed bottom-0 right-0 z-10 flex w-full justify-end gap-4 border-t border-border bg-surface p-5'>
        <button
          type='button'
          className='rounded-xl border border-border px-6 py-3 transition hover:bg-surface-2'>
          Cancelar
        </button>

        <button
          type='submit'
          className='rounded-xl bg-primary px-6 py-3 text-white shadow transition hover:opacity-90'>
          Guardar Empleado
        </button>
      </footer>
    </section>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <fieldset className='rounded-xl border border-border p-6'>
      <legend className='px-3 font-semibold text-heading'>{title}</legend>

      {children}
    </fieldset>
  )
}

function Input({
  label,
  type = 'text',
  className = '',
  icon,
}: {
  label: string
  type?: string
  className?: string
  icon?: React.ReactNode
}) {
  return (
    <div className={className}>
      <label className='mb-1 block text-sm'>{label}</label>

      <div className='relative'>
        <input
          type={type}
          className='w-full rounded-xl border border-border bg-background p-3 outline-none transition focus:ring-2 focus:ring-primary'
        />

        {icon && (
          <span className='absolute right-3 top-3 text-muted'>{icon}</span>
        )}
      </div>
    </div>
  )
}
