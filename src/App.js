import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./pages/Main";
import './App.css';
import PokemonList from "./pages/PokemonList";
import PokemonDetail from "./pages/PokemonDetail";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        {/* 최초 요청시 */}
        <Route index element={<Main/>}/>
        <Route path="pokemon">
          <Route index element={<PokemonList/>}/>
          <Route path=":id" element={<PokemonDetail/>}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
