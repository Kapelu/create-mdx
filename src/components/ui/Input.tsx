'use client'

import clsx from 'clsx'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import {
  ChangeEventHandler,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
  useState,
} from 'react'

interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'className' | 'onChange'
> {
  label?: string
  floating?: boolean
  icon?: ReactNode
  className?: string
  inputClassName?: string
  labelClassName?: string
  multiline?: boolean
  textareaRows?: number
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

const base =
  'peer w-full border border-border bg-background text-muted text-sm outline-none transition-colors disabled:pointer-events-none disabled:opacity-50 focus:border-primary focus:ring-1 focus:ring-primary'

export default function Input({
  label,
  floating = false,
  icon,
  className,
  inputClassName,
  labelClassName,
  multiline = false,
  textareaRows = 4,
  type = 'text',
  placeholder = '',
  required = false,
  onChange,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false)

  const isPassword = !multiline && type === 'password'

  const inputType = isPassword && showPassword ? 'text' : type

  const textareaProps = props as TextareaHTMLAttributes<HTMLTextAreaElement>

  return (
    <div className={className}>
      {label && !floating && (
        <label
          className={clsx(
            'mb-2 flex items-center text-sm font-medium text-title',
            labelClassName,
          )}>
          <span>{label}</span>

          {required && (
            <span className='ml-1 text-red-500' title='Campo obligatorio'>
              *
            </span>
          )}
        </label>
      )}

      <div className='relative'>
        {icon && (
          <span
            className={clsx(
              'absolute left-4 text-muted',
              multiline ? 'top-4' : 'top-1/2 -translate-y-1/2',
            )}>
            {icon}
          </span>
        )}

        {multiline ? (
          <textarea
            rows={textareaRows}
            placeholder={floating ? ' ' : placeholder}
            required={required}
            onChange={onChange}
            className={clsx(
              base,
              'min-h-32 max-h-64 resize-y overflow-y-auto py-3',
              icon ? 'pl-12' : 'pl-4',
              'pr-4',
              !floating && 'placeholder:text-muted',
              inputClassName,
            )}
            {...textareaProps}
          />
        ) : (
          <input
            type={inputType}
            placeholder={floating ? ' ' : placeholder}
            required={required}
            onChange={onChange}
            className={clsx(
              base,
              'h-12',
              icon ? 'pl-12' : 'pl-4',
              isPassword ? 'pr-12' : 'pr-4',
              !floating && 'placeholder:text-muted',
              inputClassName,
            )}
            {...props}
          />
        )}

        {isPassword && (
          <button
            type='button'
            tabIndex={-1}
            onClick={() => setShowPassword((prev) => !prev)}
            className='absolute right-3 top-1/2 -translate-y-1/2 p-2 text-muted transition hover:bg-primary/10 hover:text-primary'
            aria-label={
              showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'
            }>
            {showPassword ? (
              <EyeSlashIcon className='h-5 w-5' />
            ) : (
              <EyeIcon className='h-5 w-5' />
            )}
          </button>
        )}

        {floating && (
          <span
            className={clsx(
              'pointer-events-none absolute bg-background px-1 text-muted transition-all duration-200 peer-focus:top-0 peer-focus:text-xs peer-focus:font-semibold peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-semibold',
              multiline
                ? 'top-4'
                : 'top-1/2 -translate-y-1/2 peer-focus:translate-y-0 peer-not-placeholder-shown:translate-y-0',
              icon ? 'left-12' : 'left-4',
            )}>
            {label || placeholder}

            {required && <span className='ml-1 text-red-500'>*</span>}
          </span>
        )}
      </div>
    </div>
  )
}
