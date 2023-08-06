import { useCart } from "../context/cartContext";
import './Carrito.css'

const Carrito = () => {

  const { cart, getTotalPrice, getDerivedCart, removeFromCart } = useCart();
  const derivedCart = getDerivedCart();

  const handleRemoveProduct = (productId) => {
    removeFromCart(productId);
  };

  if (!cart || cart.length === 0) {
    return <p className="cart-empty">El carrito está vacío...!!</p>;
  }
  console.log(cart);
  return (
    <div>
      <p>Productos en el carrito: {cart.length}</p>
      <ul>
        {derivedCart.map((producto) => (
          <li key={producto.id}>
            <img className="img-cart" src={producto.image} alt="" />
            <span>{producto.name}</span>
            <span>{producto.quantity} ud./uds.</span>
            <span>${producto.totalPrice}</span>
            <span>
              <button onClick={() => handleRemoveProduct(producto.id)}>
              <img className="btn-quitar" src="./src/components/quitar-del-carrito.png" alt="" />
            </button>
            </span>
          </li>
        ))}
      </ul>
      <p className="total-price">Total: ${getTotalPrice()}</p>
    </div>
  )
}
export default Carrito

