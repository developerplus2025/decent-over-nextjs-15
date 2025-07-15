'use client'
 
import { useTheme } from 'next-themes'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
 
export default function ThemeParams() {
  const searchParams = useSearchParams()
const { theme,  setTheme } = useTheme()
  const PreTheme = searchParams.get('theme')
 useEffect(() => {
   if(PreTheme === "dark"){
    setTheme("light")

   }else{
    setTheme("dark")
   }
 }
)
return null
} 