import { useRef } from "react";
import './Buscador.css';

function Buscador({ onSearchData }) {
  const inputSearch = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchData(inputSearch.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title"></label>
      <input ref={inputSearch} type="search" id="title" name="search" placeholder="Buscar producto..." />
      <button type="submit" value="buscar" ><img src="./src/components/lupa-busqueda.png" alt="Imagen de Lupa" /></button>
      
    </form>
    );
}

export default Buscador;