import pokemonImage from './images/bulbasaur.jpg';
const favPokemon = 'Bulbasaur';
const pokeCharacteristics = { type: 'Grass', move: 'Vine Whip'};

function Showcase() {
    return (
        <div>
            <h1>{favPokemon}'s Showcase Component</h1>
            <img src={ pokemonImage } alt={favPokemon}/>
            <h2>
                {favPokemon}'s type is <span style={{backgroundColor: 'Green', color:'White'}}>{pokeCharacteristics.type}</span> and 
                one of their moves is <span style = {{backgroundColor: 'White', color: 'Green'}}>{pokeCharacteristics.move}</span>
            </h2>
        </div>
    );
}

export default Showcase;