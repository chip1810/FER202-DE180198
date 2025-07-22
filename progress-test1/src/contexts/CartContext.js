import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (laptop) => {
    setCart((prev) => {
      const exist = prev.find(item => item.id === laptop.id);
      if (exist) {
        return prev.map(item =>
          item.id === laptop.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...laptop, quantity: 1 }];
    });
  };

  const updateCart = (id, newQty) => {
    setCart((prev) =>
      prev.map(item => item.id === id ? { ...item, quantity: newQty } : item)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;