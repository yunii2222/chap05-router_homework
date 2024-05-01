import {Link} from "react-router-dom";

function Main(){
    return(
        /* 클릭했을 때 MovieList 페이지로 (App.js가면 있음) */
        <Link to="/pokemon">
            <main className="">
                <h1>포켓몬 도감보러가기 🦖</h1>
            </main>
        </Link>
    )
}

export default Main;