import ThemeIcon from './ThemeIcon'
import Titulo from './Titulo'
import Form from './Form'

function Header () {
  return (
    <header className="flex items-center justify-center font-bahnschrift border-none border-slate-200 dark:border-slate-800 mb-5 h-[70px] px-2">
      <Titulo />
      <Form />
      <ThemeIcon />
    </header>
  )
}

export default Header
