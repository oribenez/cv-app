import { useEffect } from 'react'

export const useLockBodyScroll = (isScrollLocked: Boolean) => {
  useEffect(() => {
    if (isScrollLocked) {
      lockBodyScroll()
    } else {
      unlockBodyScroll()
    }
  }, [isScrollLocked])

  const lockBodyScroll = () => {
    document.body.style.overflow = 'hidden'
  }

  const unlockBodyScroll = () => {
    document.body.style.overflow = 'auto'
  }

  return { lockBodyScroll, unlockBodyScroll }
}
