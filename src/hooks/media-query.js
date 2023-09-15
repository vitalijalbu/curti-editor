import { useEffect, useState } from 'react'
import { useMediaQuery as _useMediaQuery } from 'react-responsive'

export default function useMediaQuery() {
  const _isDesktop = _useMediaQuery({
    query: '(min-width: 768px)'
  })

  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(_isDesktop)
  }, [_isDesktop])

  return {
    isDesktop
  }
}