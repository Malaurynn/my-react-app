const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  
  function PokemonCard() {

    const pokemon = pokemonList;
    console.log(pokemon);
  
    return (
      <div>
        {}
        {pokemon.map((poke, index) => (
          <figure key={index} className="pokemon-card">
            {}
            {poke.imgSrc ? (
              <img src={poke.imgSrc} alt={poke.name} />
            ) : (
              <p>???</p>
            )}
            <figcaption>{poke.name}</figcaption>
          </figure>
        ))}
      </div>
    );
  }
  
  export default PokemonCard;