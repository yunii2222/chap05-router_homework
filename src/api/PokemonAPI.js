// const API_KEY = ''
const BASE_URL = 'https://pokeapi.co/api/v2';


export async function getPokemonList(){
    const url =`${BASE_URL}/pokemon`;

    const response = await fetch(url);

    const data = await response.json();

    console.log(data)

    return data.results;
}

export async function getPokemonDetail(id){
    /* 위에와 같이 변경 */
    const url = `${BASE_URL}/pokemon/${id}`;

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    return data;

}

// export