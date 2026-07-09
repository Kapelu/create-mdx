import type { ModalOptions } from '@/components/layout/ModalProvider'

type ShowModal = (options: ModalOptions) => void

export async function handleApiResponse<T>(
  response: Response,
  showModal: ShowModal,
): Promise<T | null> {
  const data = await response.json()

  if (!response.ok) {
    showModal({
      icon: data.icon ?? 'error',
      messages: data.messages ?? [
        data.message ?? 'Ha ocurrido un error inesperado.',
      ],
      redirectTo: data.redirectTo,
      redirectSeconds: data.redirectSeconds,
      buttonText: data.buttonText,
    })

    return null
  }

  return data as T
}
