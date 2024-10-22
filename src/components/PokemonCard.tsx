  function PokemonCard({ pokemon }) {
  
  
    return (
      <div>
        <figure className="pokemon-card">
          {pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt={pokemon.name} />) : (<p>???</p>)}
          <figcaption>{pokemon.name}</figcaption>
        </figure>
      </div>
    );
  }
  
  export default PokemonCard;