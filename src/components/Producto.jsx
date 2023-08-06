
import { productsContext } from "../context/productsContext";
import { useContext, useState } from "react";
import { useCart } from "../context/cartContext";

const Producto = ({searchTerm}) => {
    const productos = useContext(productsContext);
    const maxLength = 100;
    const [mostrarDescripcion, setMostrarDescripcion] = useState({});
    const { addToCart } = useCart();

    const toggleDescripcion = (productId) => {
        setMostrarDescripcion((prev) => ({
            ...prev,
            [productId]: !prev[productId],
        }));
    };

    const searchTermRegex = new RegExp(searchTerm, 'i'); 

    /*const productosBuscados = productos.filter(
        (producto) =>
          searchTermRegex.test(producto.title)
      );*/

      const productosBuscados = searchTerm
        ? productos.filter((producto) => searchTermRegex.test(producto.title))
        : productos;


    return (
        <>
            <div className="card-container">
                {productosBuscados.map((producto) => (
                    <div className="card" key={producto.id}>
                        <img className="img" src={producto.image} alt="" />
                        <h3>{producto.title}</h3>
                        <h4>${producto.price}</h4>
                        {producto.description.length > maxLength ? (
                            <p className="description">
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
    )
}

export default Producto
