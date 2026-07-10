'use client'
import FormSection from '@/components/ui/FormSection'
import FormInput from '@/components/ui/FormInput'
import FormSelect from '@/components/ui/FormSelect'
import { Button } from '@/components/ui/Button'
import {
  Eye,
  EyeOff,
  FileImage,
  Lock,
  User,
  Users,
  UserPlus,
  NotebookTabs,
  House,
  Phone,
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
    <section className=' rounded-xl border border-border bg-surface'>
      <header className='flex items-center gap-3 border-b border-border px-8 py-5'>
        <UserPlus className='text-primary' size={28} />

        <h1 className='text-2xl font-semibold text-heading'>
          Alta de Empleado
        </h1>
      </header>

      <form className='space-y-8 p-8 pb-28'>
        {/* DATOS ACCESO */}
        <FormSection
          title='Datos de Acceso'
          icon={Lock}
          iconClassName='text-blue-500'>
          <div className='grid grid-cols-12 gap-5'>
            <FormInput label='Legajo' className='col-span-2' required />
            <FormInput label='Usuario' className='col-span-5' required />
            <FormInput
              label='Contraseña'
              type={mostrarPassword ? 'text' : 'password'}
              className='col-span-5'
              required
              icon={
                <button
                  type='button'
                  onClick={() => setMostrarPassword(!mostrarPassword)}
                  className='text-muted'>
                  {mostrarPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              }
            />

            <FormSelect label='Puesto' className='col-span-6' required>
              <option value=''>Seleccionar...</option>
              <option>RRHH</option>
              <option>Logística</option>
              <option>Gerencia</option>
              <option>Chofer</option>
              <option>Mecánico</option>
            </FormSelect>
            <FormInput
              label='Fecha de Ingreso'
              type='date'
              className='col-span-3'
            />

            <div className='col-span-3 flex items-end'>
              <label className='flex h-12 items-center gap-3 rounded-xl border border-border px-5'>
                <input type='checkbox' defaultChecked required />
                Activar
              </label>
            </div>
          </div>
        </FormSection>

        {/* CONTACTO */}
        <FormSection
          title='Contacto'
          icon={Phone}
          iconClassName='text-blue-500'>
          <div className='grid grid-cols-2 gap-5'>
            <FormInput label='Email' type='email' required />
            <FormInput label='Teléfono' type='tel' required />
          </div>
        </FormSection>
        {/* DATOS PERSONALES */}
        <FormSection
          title='Datos Personales'
          icon={User}
          iconClassName='text-blue-500'>
          <div className='space-y-8'>
            {/* DATOS PERSONALES */}
            <div className='grid grid-cols-12 gap-6'>
              <FormInput label='DNI' className='col-span-4' />

              <FormInput
                label='Fecha Nacimiento'
                type='date'
                className='col-span-4'
              />

              <div className='col-span-4 col-start-9 row-span-2 flex justify-center'>
                {!imagen ? (
                  <div className='w-full'>
                    <label className='mb-2 block text-sm font-medium text-heading'>
                      Imagen
                    </label>

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
                  </div>
                ) : (
                  <>
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
                      className='overflow-hidden rounded-xl'>
                      <img
                        src={imagen}
                        alt='Empleado'
                        className='h-45 w-40 rounded-xl object-cover transition hover:opacity-80'
                      />
                    </button>
                  </>
                )}
              </div>

              <FormInput label='Apellido' className='col-span-4' />

              <FormInput label='Nombres' className='col-span-4' />
            </div>

            {/* DIRECCIÓN */}
            <FormSection title='Dirección' icon={House}>
              <div className='grid grid-cols-2 gap-6'>
                <FormInput label='Calle' />
                <FormInput label='Número' />
                <FormInput label='Piso' />
                <FormInput label='Departamento' />
                <FormInput label='Localidad' />
                <FormInput label='Provincia' />
                <FormInput label='País' />
              </div>
            </FormSection>

            {/* GRUPO FAMILIAR */}
            <FormSection title='Grupo Familiar' icon={Users}>
              <div className='flex items-end gap-8'>
                <FormSelect label='Estado Civil' className='w-90'>
                  <option value=''>Seleccionar...</option>
                  <option value='soltero'>Soltero</option>
                  <option value='casado'>Casado</option>
                  <option value='separado'>Separado</option>
                  <option value='divorciado'>Divorciado</option>
                </FormSelect>

                <label className='flex h-12 items-center gap-3 whitespace-nowrap'>
                  <input
                    type='checkbox'
                    className='h-4 w-4 rounded border-border'
                  />
                  Tiene hijos
                </label>

                <div className='w-40'>
                  <FormInput label='Cantidad' type='number' min={0} />
                </div>
              </div>
            </FormSection>
          </div>
        </FormSection>

        {/* NOTAS */}
        <FormSection title='Notas' icon={NotebookTabs}>
          <textarea className='h-32 w-full resize rounded-xl border border-border bg-background p-4 outline-none focus:ring-2 focus:ring-primary' />
        </FormSection>

        {/* BOTONES */}
        <div className='sticky bottom-0 flex justify-end gap-4 rounded-xl border-border  px-8 py-6 backdrop-blur'>
          <Button
            type='reset'
            variant='secondary'
            size='lg'
            onClick={() => {
              setImagen(null)
              if (imagenRef.current) {
                imagenRef.current.value = ''
              }
            }}>
            Cancelar
          </Button>

          <Button type='submit' variant='primary' size='lg'>
            Agregar Empleado
          </Button>
        </div>
      </form>
    </section>
  )
}
