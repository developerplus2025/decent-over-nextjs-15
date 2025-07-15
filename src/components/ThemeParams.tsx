'use client'
 
import { useTheme } from 'next-themes'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
 
export default function SearchBar() {
  const searchParams = useSearchParams()
const {  setTheme } = useTheme()
  const theme = searchParams.get('theme')
 useEffect(() => {
   if(theme === "dark"){
    setTheme("light")

   }else{
    setTheme("dark")
   }
 },[theme]
)
} 