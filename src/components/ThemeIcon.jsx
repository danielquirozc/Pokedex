import { useEffect, useState } from 'react'
import { FaRegMoon, FaSun } from 'react-icons/fa6'

const defaultValue = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

function ThemeIcon () {
  const [theme, setTheme] = useState(defaultValue)

  useEffect(() => {
    document.documentElement.setAttribute('class', theme)
  }, [theme])

  const handleClick = () => {
    if (theme === 'dark') {
      setTheme('light')
      document.documentElement.setAttribute('class', theme)
    } else {
      setTheme('dark')
      document.documentElement.setAttribute('class', theme)
    }
  }

  return (
    <>
    <div className="flex justify-center items-center bg-slate-50 h-9 min-w-9 border rounded-md border-slate-200 dark:bg-[#1E1E32] dark:border-slate-800">
    {
      theme === 'light' ? <FaRegMoon onClick={handleClick} className="cursor-pointer text-2xl text-slate-600" /> : <FaSun onClick={handleClick} className="text-slate-600 text-2xl cursor-pointer" />
    }
    </div>
    </>
  )
}

export default ThemeIcon
