import { FaSistrix } from 'react-icons/fa6'
import { useSearch } from '../hooks/useSearch'

function Form () {
  const { handleChange } = useSearch()

  return (
    <form className="flex bg-slate-50 dark:bg-[#1E1E32] dark:border-slate-800 items-center gap-2 mx-10 pl-2 w-[500px] h-9 border rounded-md border-slate-200 ">
      <label htmlFor="" className="cursor-text">
        <FaSistrix className="text-slate-600 dark:text-slate-300" aria-label="Lupa de busqueda"/>
      </label>
      <input aria-label="Buscador de pokemones" onChange={handleChange} autoComplete="off" type="text" className="text-slate-600 dark:text-slate-300 bg-transparent h-full w-full outline-none rounded" id="search"/>
    </form>
  )
}

export default Form
