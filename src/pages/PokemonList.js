import {useEffect, useState} from "react";
import {getPokemonList} from "../api/PokemonAPI";
import PokemonCard from "../component/PokemonCard";

function PokemonList(){
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        /* getMovieList가 수행 된 이후에 */
        getPokemonList().then(data => setPokemons(data));
    }, []);

    return(
        <>
            {pokemons && pokemons.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon}/> )}
        </>
    )
}
export default PokemonList;