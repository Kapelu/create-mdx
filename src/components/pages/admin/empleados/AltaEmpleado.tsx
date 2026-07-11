'use client'

import { useEffect, useRef, useState, type ChangeEvent } from 'react'
import {
  Eye,
  EyeOff,
  FileImage,
  House,
  Lock,
  NotebookTabs,
  Phone,
  User,
  Users,
} from 'lucide-react'

import { Button } from '@/components/ui/Button'
import FormInput from '@/components/ui/FormInput'
import FormSection from '@/components/ui/FormSection'
import FormSelect from '@/components/ui/FormSelect'

export default function AltaEmpleado() {
  const [mostrarPassword, setMostrarPassword] = useState(false)
  const [imagen, setImagen] = useState<string | null>(null)

  const imagenRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    return () => {
      if (imagen) {
        URL.revokeObjectURL(imagen)
      }
    }
  }, [imagen])

  const handleImagen = (e: ChangeEvent<HTMLInputElement>) => {
    const archivo = e.target.files?.[0]

    if (!archivo) return

    if (imagen) {
      URL.revokeObjectURL(imagen)
    }

    setImagen(URL.createObjectURL(archivo))
  }

  const handleReset = () => {
    if (imagen) {
      URL.revokeObjectURL(imagen)
    }

    setImagen(null)
    setMostrarPassword(false)

    if (imagenRef.current) {
      imagenRef.current.value = ''
    }
  }

  return (
    <form className='space-y-6 p-6'>
      <FormSection
        title='Datos de Acceso'
        icon={Lock}
        iconClassName='text-blue-500'>
        <div className='grid grid-cols-12 gap-5'>
          <FormInput
            label='Legajo'
            name='legajo'
            type='number'
            className='col-span-3'
            required
          />

          <FormInput
            label='Usuario'
            name='usuario'
            className='col-span-4'
            required
          />

          <FormInput
            label='Contraseña'
            name='password'
            type={mostrarPassword ? 'text' : 'password'}
            className='col-span-5'
            required
            icon={
              <button
                type='button'
                onClick={() => setMostrarPassword((prev) => !prev)}
                className='flex items-center justify-center text-muted transition hover:text-heading'
                aria-label={
                  mostrarPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'
                }>
                {mostrarPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            }
          />

          <FormSelect
            label='Puesto'
            name='puesto'
            className='col-span-5'
            defaultValue=''
            required>
            <option value='' disabled>
              Seleccionar...
            </option>
            <option value='RRHH'>RRHH</option>
            <option value='Logística'>Logística</option>
            <option value='Gerencia'>Gerencia</option>
            <option value='Chofer'>Chofer</option>
            <option value='Mecánico'>Mecánico</option>
          </FormSelect>

          <FormInput
            label='Fecha de Ingreso'
            name='fechaIngreso'
            type='date'
            className='col-span-4'
            required
          />

          <div className='col-span-3 flex items-end'>
            <label className='flex h-12 w-full cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-5 text-sm font-medium text-heading'>
              <input
                type='checkbox'
                name='activo'
                defaultChecked
                className='h-4 w-4 rounded border-border accent-primary'
              />
              Empleado activo
            </label>
          </div>
        </div>
      </FormSection>

      <FormSection
        title='Datos Personales'
        icon={User}
        iconClassName='text-blue-500'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-9 grid grid-cols-12 gap-5'>
            <FormInput
              label='DNI'
              name='dni'
              type='number'
              className='col-span-4'
              required
            />

            <FormInput
              label='Fecha de Nacimiento'
              name='fechaNacimiento'
              type='date'
              className='col-span-4'
              required
            />

            <FormSelect
              label='Estado Civil'
              name='estadoCivil'
              className='col-span-4'
              defaultValue=''>
              <option value='' disabled>
                Seleccionar...
              </option>
              <option value='Soltero'>Soltero</option>
              <option value='Casado'>Casado</option>
              <option value='Separado'>Separado</option>
              <option value='Divorciado'>Divorciado</option>
              <option value='Viudo'>Viudo</option>
            </FormSelect>

            <FormInput
              label='Apellido'
              name='apellido'
              className='col-span-6'
              required
            />

            <FormInput
              label='Nombres'
              name='nombres'
              className='col-span-6'
              required
            />
          </div>

          <div className='col-span-3'>
            <label className='mb-2 block text-sm font-medium text-heading'>
              Imagen
            </label>

            <input
              ref={imagenRef}
              hidden
              name='imagen'
              type='file'
              accept='image/*'
              onChange={handleImagen}
            />

            <button
              type='button'
              onClick={() => imagenRef.current?.click()}
              className='flex h-40 w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-background transition hover:border-primary hover:bg-surface-2'>
              {imagen ? (
                <img
                  src={imagen}
                  alt='Vista previa del empleado'
                  className='h-full w-full object-cover'
                />
              ) : (
                <span className='flex flex-col items-center gap-3 text-sm text-muted'>
                  <FileImage size={30} />
                  Cargar imagen
                </span>
              )}
            </button>
          </div>
        </div>
      </FormSection>

      <FormSection title='Contacto' icon={Phone} iconClassName='text-blue-500'>
        <div className='grid grid-cols-12 gap-5'>
          <FormInput
            label='Email'
            name='email'
            type='email'
            className='col-span-7'
            required
          />

          <FormInput
            label='Teléfono'
            name='telefono'
            type='tel'
            className='col-span-5'
            required
          />
        </div>
      </FormSection>

      <FormSection title='Dirección' icon={House} iconClassName='text-blue-500'>
        <div className='grid grid-cols-12 gap-5'>
          <FormInput
            label='Calle'
            name='direccion.calle'
            className='col-span-6'
            required
          />

          <FormInput
            label='Número'
            name='direccion.numero'
            type='number'
            className='col-span-2'
            required
          />

          <FormInput
            label='Piso'
            name='direccion.piso'
            className='col-span-2'
          />

          <FormInput
            label='Departamento'
            name='direccion.dpto'
            className='col-span-2'
          />

          <FormInput
            label='Localidad'
            name='direccion.localidad'
            className='col-span-4'
            required
          />

          <FormInput
            label='Departamento / Partido'
            name='direccion.departamento'
            className='col-span-4'
            required
          />

          <FormInput
            label='Provincia'
            name='direccion.provincia'
            className='col-span-2'
            required
          />

          <FormInput
            label='País'
            name='direccion.pais'
            className='col-span-2'
            defaultValue='Argentina'
            required
          />
        </div>
      </FormSection>

      <FormSection
        title='Grupo Familiar'
        icon={Users}
        iconClassName='text-blue-500'>
        <div className='grid grid-cols-12 gap-5'>
          <label className='col-span-6 flex h-12 cursor-pointer items-center gap-3 self-end rounded-xl border border-border bg-background px-5 text-sm font-medium text-heading'>
            <input
              type='checkbox'
              name='hijos.tiene'
              className='h-4 w-4 rounded border-border accent-primary'
            />
            Tiene hijos
          </label>

          <FormInput
            label='Cantidad de hijos'
            name='hijos.cantidad'
            type='number'
            min={0}
            defaultValue={0}
            className='col-span-6'
          />
        </div>
      </FormSection>

      <FormSection
        title='Notas'
        icon={NotebookTabs}
        iconClassName='text-blue-500'>
        <textarea
          name='notas'
          rows={5}
          className='w-full resize-none rounded-xl border border-border bg-background p-4 text-heading outline-none transition focus:border-primary focus:ring-2 focus:ring-primary'
        />
      </FormSection>

      <div className='flex justify-end gap-4 border-t border-border pt-6'>
        <Button
          type='reset'
          variant='secondary'
          size='lg'
          onClick={handleReset}>
          Cancelar
        </Button>

        <Button type='submit' variant='primary' size='lg'>
          Agregar Empleado
        </Button>
      </div>
    </form>
  )
}
