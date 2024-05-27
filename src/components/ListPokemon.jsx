import { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext.jsx'
import PokemonItem from './PokemonItem.jsx'
import { SearchContext } from '../context/SearchContext.jsx'

const ListPokemon = () => {
  const { value: filterValue } = useContext(SearchContext)
  const { pokemonList } = useContext(PokemonContext)

  return (
    <section className='flex justify-center flex-wrap gap-1 w-full'>
      {
       pokemonList && pokemonList.filter(pokemon => pokemon.name.includes(filterValue.toLowerCase())).map(pokemon => (
          <PokemonItem
            key={pokemon.name}
            pokemon={pokemon}
          />
       ))
      }
    </section>
  )
}

export default ListPokemon
