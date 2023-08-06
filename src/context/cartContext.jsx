
import { createContext, useState, useContext } from "react";

export const cartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (producto) => {
    setCart((prevCart) => [...prevCart, producto]);
  };

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((accum, curr) => accum + curr.price, 0);
    return totalPrice.toFixed(2);
  };

  const getDerivedCart = () => {
    const derivedCart = [];
    cart.forEach((item) => {
      const existingItem = derivedCart.find((dItem) => dItem.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += Number(item.price);
      } else {
        derivedCart.push({
          id: item.id,
          name: item.title,
          quantity: 1,
          totalPrice: Number(item.price),
          image: item.image,
        });
      }
    });
    return derivedCart;
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  return (
    <cartContext.Provider value={{ cart, addToCart, getTotalPrice, getDerivedCart, removeFromCart }}>
      {children}
    </cartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(cartContext);
};
