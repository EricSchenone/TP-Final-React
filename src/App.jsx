
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useCart } from './context/cartContext';
import Carrito from './components/Carrito';
import Home from './components/Home';
import ProductosFiltrados from './components/ProductosFiltrados';
import Buscador from './components/Buscador';
import './App.css';


function App() {

  const { cart, getDerivedCart } = useCart();
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleMenu = () => {
    setShowMenu(prevShowMenu => !prevShowMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <>
      <BrowserRouter>
        <nav>
          <img className='img-nav' src="./src/components/logo_Eris.png" alt="" />
          <div className='container'>
            <div className='buscador'>
              <Buscador onSearchData={handleSearch} className="buscador" />
            </div>
            <div className={`menu ${showMenu ? 'show' : ''}`}>
              <div className='buscador-container'>
                <Buscador onSearchData={handleSearch} className="buscador" />
              </div>
              <Link to="/" onClick={closeMenu}>Todos los productos</Link>
              <Link to="./ropaHombre" onClick={closeMenu}>Hombre</Link>
              <Link to="./ropaMujer" onClick={closeMenu}>Mujer</Link>
              <Link to="./accesorios" onClick={closeMenu}>Accesorios</Link>
              <Link to="./electronica" onClick={closeMenu} >Electronica</Link>
            </div>
            <div>
            </div>
          </div>
          <Link to="./carrito" ><img className='btn-cart-comp' src="./src/components/carrito-de-compras.png" alt="Icono-Carrito" />({cart.length})</Link>
          <div className="hamburger" onClick={toggleMenu}>
            <img className='btn-menu' src="./src/components/menu.png" alt="Icono Menú" />
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/ropaHombre" element={<ProductosFiltrados title="Para ellos..." category="men's clothing" />} />
          <Route path="/ropaMujer" element={<ProductosFiltrados title="Para ellas..." category="women's clothing" />} />
          <Route path="/accesorios" element={<ProductosFiltrados title="Los mejores accesorios..." category="jewelery" />} />
          <Route path="/electronica" element={<ProductosFiltrados title="Lo último en tecnología..." category="electronics" />} />
          <Route path="/carrito" element={<Carrito cart={getDerivedCart()} />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
