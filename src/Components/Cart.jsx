import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "../Styles/cart.css"; // Create and import your CSS for cart styles

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.item_image1} alt={item.item_name} />
            <div>
              <h3>{item.item_name}</h3>
              <p>${item.item_price} USD</p>
              <p>Color: {item.item_color1}</p>

              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
