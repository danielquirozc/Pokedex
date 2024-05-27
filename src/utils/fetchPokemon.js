
async function fetchPokemon() {
  const httpResponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=42');
  const result = await httpResponse.json();
  
  const promiseList = result.results.map(async(pokemon) => {
    const httpResponse = await fetch(pokemon.url);
    const result = await httpResponse.json();
    return result;
  })

  const pokemonList = await Promise.all(promiseList);
  return pokemonList;
}

export default fetchPokemon