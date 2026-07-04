'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { Lock, User } from 'lucide-react'
import { Input } from './Input'
import { Button } from './Button'

interface FormData {
  user: string
  password: string
}

export default function Login() {
  const [formData, setFormData] = useState<FormData>({
    user: '',
    password: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log('Login', formData)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='w-full max-w-sm rounded-2xl border border-border bg-surface px-8 py-10 shadow-xl backdrop-blur'>
        <h1 className='text-center text-3xl font-semibold text-heading'>
          Login
        </h1>

        <p className='mt-2 text-center text-sm text-muted'>
          Por favor, ingrese para continuar.
        </p>

        {/* Usuario */}
        <div className='mt-8'>
          <Input
            type='text'
            name='user'
            placeholder='Usuario'
            value={formData.user}
            onChange={handleChange}
            required
            icon={<User className='h-4 w-4' />}
          />
        </div>

        {/* Password */}
        <div className='mt-4'>
          <Input
            name='password'
            icon={<Lock className='h-4 w-4' />}
            type='password'
            placeholder='Contraseña'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className='mt-1 flex items-center justify-start'>
          <label className='flex cursor-pointer items-center gap-2 text-text text-muted'>
            <Input
              type='checkbox'
              name='opciones'
              value='opcion1'
              className='h-4 w-4'
            />
            Chofer
          </label>
        </div>

        {/* Submit */}
        <Button
          type='submit'
          className='mt-6 h-11 w-full rounded-full bg-primary font-medium text-background transition-opacity hover:opacity-90'>
          Login
        </Button>
      </form>

      {/* Background */}
      <div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
        <div className='absolute left-1/2 top-16 h-136 w-240 -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]' />
        <div className='absolute bottom-0 right-0 h-80 w-[20rem] rounded-full bg-secondary/15 blur-[100px]' />
      </div>
    </>
  )
}
