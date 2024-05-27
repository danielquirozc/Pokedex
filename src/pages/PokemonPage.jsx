import { useContext, useEffect, useState } from 'react'
import { IoIosCloseCircle } from 'react-icons/io'
import { useParams, Link } from 'react-router-dom'
import { PokemonContext } from '../context/PokemonContext'
import firstLetterUppercase from '../utils/firstLetterUppercase'
import BadgeTypes from '../components/BadgeTypes'
import Stats from '../components/Stats'

const PokemonPage = () => {
  const { getPokemonByID } = useContext(PokemonContext)
  const [pokemon, setPokemon] = useState()

  const { id } = useParams()

  const getPokemon = async () => {
    const pokemon = await getPokemonByID(id)
    setPokemon(pokemon)
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <>
      <div className="flex justify-center items-center bg-slate-700/30 w-full h-full top-0 fixed backdrop-blur-sm">
        {pokemon && (
          <div className="p-4 bg-slate-50 dark:bg-[#0D0D1D] rounded-md relative flex justify-center flex-col">
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold font-montserrat text-slate-600 dark:text-slate-300">
                {firstLetterUppercase(pokemon.name)}
              </h1>
              <Link to="/" className="cursor-text">
                <IoIosCloseCircle className="text-slate-600 text-3xl dark:text-slate-300 cursor-pointer my-1" />
              </Link>
            </div>
            <div className="flex justify-center flex-wrap items-center gap-10">
              <div className="text-center mt-3">
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
              />
                {pokemon.types.map((type, index) => (
                  <BadgeTypes key={index} fontSize={20} type={type.type.name} />
                ))}
              </div>
              <Stats stats={pokemon.stats} />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default PokemonPage
