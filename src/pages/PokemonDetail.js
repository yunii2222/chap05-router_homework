import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPokemonDetail} from "../api/PokemonAPI";

function PokemonDetail(){
    const { id } = useParams();

    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        getPokemonDetail(id).then(data => setPokemon(data));
    }, [])


    return(
        <div>
            {pokemon &&
                <>
                    <h2>{pokemon.name} 도감번호{pokemon.id}</h2>
                    <img src={pokemon.sprites.front_default} alt={pokemon.korean_name}/>
                    <p>이름: {pokemon.name}</p>
                    <p>키: {pokemon.height}</p>
                    <p>무게: {pokemon.weight}</p>
                </>
            }
        </div>
    )
}

export default PokemonDetail;