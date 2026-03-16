import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 1. Initial Load: Try to get cart, otherwise default to empty array
  const [cartItems, setCartItems] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || [],
  );

  // 2. Auto-Save: Update localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const isExist = prev.find((item) => item._id === product._id);

      // If it exists, map through and +1 quantity; else, append new item
      return isExist
        ? prev.map((item) =>
            item._id === product._id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) =>
    setCartItems((prev) => prev.filter((i) => i._id !== id));

  const emptyCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, emptyCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
