import Producto from "./Producto";
import './home.css'


function Home({ searchTerm }) {

  return (
    <>
      <div>
        <h3 className="titulo">Bienvenido al lugar que vas a poder comprar todo lo que buscas...!!!</h3>
      </div>
      <Producto searchTerm={searchTerm} />

    </>
  );
}

export default Home;
