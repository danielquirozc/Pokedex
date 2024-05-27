import { createContext, useEffect, useState } from 'react'
import fetchPokemon from '../utils/fetchPokemon'

export const PokemonContext = createContext([])

export function PokemonProvider ({ children }) {
  const [pokemonList, setPokemonList] = useState([])

  const getPokemonList = async () => {
    const pokemonResult = await fetchPokemon()
    setPokemonList(pokemonResult)
  }

  const getPokemonByID = async (id) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon = await res.json()
    return pokemon
  }

  useEffect(() => {
    getPokemonList()
  }, [])

  return (
    <PokemonContext.Provider value={{
      pokemonList,
      getPokemonByID
    }}>
      {children}
    </PokemonContext.Provider>
  )
}
