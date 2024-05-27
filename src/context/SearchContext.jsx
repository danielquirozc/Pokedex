import { createContext, useState } from 'react'

export const SearchContext = createContext('')

export function SearchProvider ({ children }) {
  const [value, setValue] = useState('')

  return (
    <SearchContext.Provider value={{
      value,
      setValue
    }}>
      {children}
    </SearchContext.Provider>
  )
}
