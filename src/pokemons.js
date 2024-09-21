// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getFirePokemons(pokemonsArray) {
    return pokemonsArray.filter(pokemon => pokemon.type.includes("Fire"));
  }
  
  // Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
  function getShortestPokemon(pokemonsArray) {
    return pokemonsArray.reduce((shortest, current) => parseFloat(current.height) < parseFloat(shortest.height) ? current : shortest).name;
  }
  
  // Iteration 3: candy_count average - average of `candy_count` for all the pokemons
  function averageCandyCount(pokemonsArray) {
    const withCandyCount = pokemonsArray.filter(pokemon => pokemon.candy_count);
    const totalCandyCount = withCandyCount.reduce((sum, pokemon) => sum + pokemon.candy_count, 0);
    return (totalCandyCount / withCandyCount.length).toFixed(2);
  }
  
  // Iteration 4: images for the first 10 `Ground` Pokemons
  function getGroundPokemonImages(pokemonsArray) {
    const groundPokemons = pokemonsArray.filter(pokemon => pokemon.weaknesses.includes("Ground"));
    return groundPokemons.slice(0, 10).map(pokemon => pokemon.img);
  }
  
  // Iteration 5: Find all pokemon names heavier than Pikachu
  function heavierThanPikachu(pokemonsArray) {
    const pikachuWeight = 6.0; // Assuming Pikachu weighs 6.0 kg
    return pokemonsArray.filter(pokemon => parseFloat(pokemon.weight) > pikachuWeight).map(pokemon => pokemon.name);
  }
  
  // Iteration 6: Alphabetic Order - Order by name and print the first 20 names
  function orderAlphabetically(pokemonsArray) {
    return pokemonsArray.map(pokemon => pokemon.name).sort().slice(0, 20);
  }
  
  // Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less than 15, return all of them
  function getStrongPokemons(pokemonsArray) {
    const strongPokemons = pokemonsArray.filter(pokemon => pokemon.weaknesses.length === 1);
    return strongPokemons.slice(0, 15);
  }

  console.log(getFirePokemons(pokemons));

  console.log(getShortestPokemon(pokemons));

  console.log(averageCandyCount(pokemons));

  console.log(getGroundPokemonImages(pokemons));

  console.log(heavierThanPikachu(pokemons));

  console.log(orderAlphabetically(pokemons));

  console.log(getStrongPokemons(pokemons));

  
  // The following is required to make unit tests work.
  if (typeof module !== 'undefined') {
    module.exports = {
      getFirePokemons,
      getShortestPokemon,
      averageCandyCount,
      getGroundPokemonImages,
      heavierThanPikachu,
      orderAlphabetically,
      getStrongPokemons
    };
  }