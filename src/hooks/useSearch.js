import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext.jsx'

export const useSearch = () => {
  const { setValue } = useContext(SearchContext)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return {
    handleChange
  }
}
