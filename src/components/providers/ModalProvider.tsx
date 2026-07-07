'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import { CircleAlert, CircleCheckBig, Info, TriangleAlert } from 'lucide-react'

import Modal from '@/components/ui/Modal'

export type ModalIcon = 'error' | 'warning' | 'success' | 'info'

export interface ModalOptions {
  icon?: ModalIcon
  messages: string[]
  redirectTo?: string
  redirectSeconds?: number
  buttonText?: string
}

interface ModalContextType {
  showModal: (options: ModalOptions) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | null>(null)

const icons = {
  error: CircleAlert,
  warning: TriangleAlert,
  success: CircleCheckBig,
  info: Info,
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const [options, setOptions] = useState<Required<ModalOptions>>({
    icon: 'info',
    messages: [],
    redirectTo: '/',
    redirectSeconds: 5,
    buttonText: 'Aceptar',
  })

  const showModal = useCallback((modal: ModalOptions) => {
    setOptions({
      icon: modal.icon ?? 'info',
      messages: modal.messages,
      redirectTo: modal.redirectTo ?? '/',
      redirectSeconds: modal.redirectSeconds ?? 5,
      buttonText: modal.buttonText ?? 'Aceptar',
    })

    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  const value = useMemo(
    () => ({
      showModal,
      closeModal,
    }),
    [showModal, closeModal],
  )

  const Icon = icons[options.icon]

  return (
    <ModalContext.Provider value={value}>
      {children}

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        icon={Icon}
        messages={options.messages}
        redirectTo={options.redirectTo}
        redirectSeconds={options.redirectSeconds}
        buttonText={options.buttonText}
      />
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error('useModal debe utilizarse dentro de un ModalProvider.')
  }

  return context
}
