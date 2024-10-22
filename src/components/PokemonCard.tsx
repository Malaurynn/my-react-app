const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  
function PokemonCard(props) {
  console.log(props);

  // On accède directement au Pokémon à l'index 1
  const pokemon = pokemonList[1];
  console.log(pokemon);

  return (
    <div>
      <figure className="pokemon-card">
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </div>
  );
}
  
  export default PokemonCard;
