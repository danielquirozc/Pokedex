import { Link } from 'react-router-dom'
import BadgeTypes from './BadgeTypes.jsx'
import firstLetterUppercase from '../utils/firstLetterUppercase.js'

function PokemonItem ({ pokemon }) {
  const handleMouse = (e) => {
    const rect = e.target.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.target.style.setProperty('--x', `${x}px`)
    e.target.style.setProperty('--y', `${y}px`)
  }

  return (
    <Link to={`/${pokemon.id}`}
      onMouseMove={(e) => handleMouse(e)}
      className="pokemon-item flex flex-col gap-3 justify-between bg-slate-50 relative dark:bg-[#1E1E32] border border-slate-200 dark:border-slate-800 w-[25%] min-w-[230px] overflow-hidden rounded-md p-2"
    >
      <h2 className="font-montserrat text-xl text-slate-800 dark:text-slate-300 font-semibold">
        {`${firstLetterUppercase(pokemon.name)}`}
      </h2>
      <img width={150} className="max-h-[150px]" src={pokemon.sprites.other.dream_world.front_default}
        alt={'Foto de ' + pokemon.name}
      />
      <div className="">
        {
          pokemon.types.map((type, index) => (
            <BadgeTypes key={index} type={type.type.name}/>
          ))
        }
      </div>
    </Link>
  )
}

export default PokemonItem
