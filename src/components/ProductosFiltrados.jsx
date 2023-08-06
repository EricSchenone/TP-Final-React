import React, { useContext, useState } from 'react';
import { productsContext } from '../context/productsContext';
import { useCart } from '../context/cartContext';


const ProductosFiltrados = ({ title, category }) => {
  const productos = useContext(productsContext);
  const producFiltrados = productos.filter(product => product.category === category);
  const { addToCart } = useCart();
  const maxLength = 100;
  const [mostrarDescripcion, setMostrarDescripcion] = useState({});

  const toggleDescripcion = (productId) => {
    setMostrarDescripcion((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <>
      <h3 className='titulo'>{title}</h3>
      <div className="card-container">
        {producFiltrados.map((producto) => (
          <div className="card" key={producto.id}>
            <img className="img" src={producto.image} alt="" />
            <h3>{producto.title}</h3>
            <h4>${producto.price}</h4>
            {producto.description.length > maxLength ? (
              <p className='description'>
                {mostrarDescripcion[producto.id]
                  ? producto.description
                  : producto.description.slice(0, maxLength) + '...'}
                <button className="btn-mas" onClick={() => toggleDescripcion(producto.id)}>
                  {mostrarDescripcion[producto.id] ? 'Ver menos' : 'Ver más'}
                </button>
              </p>
            ) : (
              <p>{producto.description}</p>
            )}
            <button onClick={() => addToCart(producto)}>
              <img className="btn-img" src="./src/components/anadir-al-carrito.png" alt="" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductosFiltrados;

