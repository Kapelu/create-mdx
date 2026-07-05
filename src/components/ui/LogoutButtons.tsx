'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Button } from './Button'

export default function LogoutButton() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleLogout = async () => {
    if (loading) return

    setLoading(true)

    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
      })

      router.replace('/login')
      router.refresh()
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      type='button'
      onClick={handleLogout}
      disabled={loading}
      className='mt-8 w-40 justify-center'>
      {loading ? 'Saliendo...' : 'Salir'}
    </Button>
  )
}
