import { useState, useEffect } from "react"


const DarkBtn = () => {
  const [ isDark, setDark ] = useState(document.documentElement.classList.contains('dark'))

  // React to a priori theme preference
  useEffect(() => {
    setDark(
      localStorage.theme === 'dark' 
      || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    )
  }, [])

  // React to manual theme toggle
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [isDark])


  return (
    <input 
      type="checkbox" 
      className="
        absolute
        top-0 right-0
        p-0 m-2
        bg-white dark:bg-black 
        " 
      checked={isDark}
      onChange={() => {
        setDark(!isDark)
      }}
    />
  )
}

export default DarkBtn