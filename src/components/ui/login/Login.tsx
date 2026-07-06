'use client'

import { Lock, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'

import { Button } from '../Button'
import { Input } from '../Input'

interface FormData {
  user: string
  password: string
}

type TipoAcceso = 'admin' | 'chofer' | null

export default function Login() {
  const router = useRouter()

  const [formData, setFormData] = useState<FormData>({
    user: '',
    password: '',
  })

  const [tipoAcceso, setTipoAcceso] = useState<TipoAcceso>(null)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (error) {
      setError('')
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (loading) return

    if (!tipoAcceso) {
      setError('Debe seleccionar Admin o Chofer.')
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usuario: formData.user,
          password: formData.password,
          tipoAcceso,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message ?? 'Error al iniciar sesión.')
        return
      }

      router.replace(data.redirectTo)
      router.refresh()
    } catch {
      setError('No fue posible conectar con el servidor.')
    } finally {
      setLoading(false)
    }
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

        <div className='mt-1 flex items-center justify-between'>
          <label className='flex cursor-pointer items-center gap-2 pl-15 text-muted'>
            Admin
            <Input
              type='checkbox'
              checked={tipoAcceso === 'admin'}
              onChange={() => setTipoAcceso('admin')}
              className='h-4 w-4'
            />
          </label>

          <label className='flex cursor-pointer items-center gap-2 pr-15 text-muted'>
            <Input
              type='checkbox'
              checked={tipoAcceso === 'chofer'}
              onChange={() => setTipoAcceso('chofer')}
              className='h-4 w-4'
            />
            Chofer
          </label>
        </div>

        {error && (
          <p className='mt-4 text-center text-sm text-red-500'>{error}</p>
        )}

        <Button
          type='submit'
          disabled={loading}
          className='mt-6 h-11 w-full rounded-full bg-primary font-medium text-background transition-opacity hover:opacity-70'>
          {loading ? 'Ingresando...' : 'Ingresar'}
        </Button>
      </form>

      <div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
        <div className='absolute left-1/2 top-16 h-136 w-240 -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]' />
        <div className='absolute bottom-0 right-0 h-80 w-[20rem] rounded-full bg-secondary/15 blur-[100px]' />
      </div>
    </>
  )
}
