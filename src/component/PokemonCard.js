import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function PokemonCard({pokemon}) {

    const [data, setData] = useState();

    useEffect(() => {
            fetch(pokemon.url)
                .then(response => response.json())
                .then(json => setData(json));

        },
        []);

    return(
        data &&
        <Link to={`/pokemon/${data.id}`}>
            <div className="item">
                <img src={data.sprites.front_default}/>
                <h3>No. {data.id}</h3>
                <h3>이름 : {pokemon.name}</h3>
            </div>
        </Link>
    )
}

export default PokemonCard;