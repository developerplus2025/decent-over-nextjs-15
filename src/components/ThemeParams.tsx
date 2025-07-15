'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function ThemeParams() {
  const searchParams = useSearchParams()
  const theme = searchParams.get('theme')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return null // Không cần render gì cả
}
