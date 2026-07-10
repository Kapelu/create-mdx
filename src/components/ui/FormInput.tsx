'use client'

import { InputHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  className?: string
  inputClassName?: string
  labelClassName?: string
  icon?: ReactNode
}

export default function FormInput({
  label,
  type = 'text',
  className,
  inputClassName,
  labelClassName,
  icon,
  required,
  ...props
}: FormInputProps) {
  return (
    <div className={className}>
      <label
        className={clsx(
          'mb-2 flex items-center text-sm font-medium text-heading',
          labelClassName,
        )}>
        <span>{label}</span>

        {required && (
          <span
            className='ml-2 text-base font-bold text-red-500'
            title='Campo obligatorio'>
            *
          </span>
        )}
      </label>

      <div className='relative'>
        <input
          type={type}
          required={required}
          className={clsx(
            'h-12 w-full rounded-xl border border-border bg-background px-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary',
            icon && 'pr-12',
            inputClassName,
          )}
          {...props}
        />

        {icon && (
          <span className='absolute inset-y-0 right-4 flex items-center text-muted'>
            {icon}
          </span>
        )}
      </div>
    </div>
  )
}


{
  /*
  Uso

Campo normal:

<FormInput label='Apellido' />

Campo obligatorio:

<FormInput
  label='Legajo'
  required
/>

Campo obligatorio con placeholder:

<FormInput
  label='Usuario'
  required
  placeholder='Ingrese el usuario'
/>

Campo de fecha:

<FormInput
  label='Fecha de Ingreso'
  type='date'
  required
/>

Campo con icono:

<FormInput
  label='Fecha Nacimiento'
  type='date'
  icon={<CalendarDays size={18} />}
/>

Con clases personalizadas:

<FormInput
  label='Email'
  required
  className='col-span-6'
  inputClassName='bg-surface'
  labelClassName='text-primary font-semibold'
/>

Al extender InputHTMLAttributes<HTMLInputElement>, el componente acepta de forma opcional todas las propiedades nativas de un <input>, por ejemplo:

id
name
value
defaultValue
placeholder
required
disabled
readOnly
autoComplete
autoFocus
maxLength
minLength
min
max
step
pattern
accept
multiple
checked
onChange
onBlur
onFocus
onKeyDown
onClick
onInput
onInvalid
aria-*
data-*

y cualquier otra prop soportada por un elemento <input> de React.
  
*/
}