import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) => item.title === product.title);
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (title, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.title === title ? { ...item, quantity: item.quantity + delta } : item
      ).filter((item) => item.quantity > 0) // إزالة العناصر ذات الكمية 0
    );
  };

  const handleDelete = (title) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.title !== title));
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, updateQuantity, handleDelete }}>
      {children}
    </CartContext.Provider>
  );
};
