import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../Styles/cart.css";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      {/* Title */}
      <h2>Your Cart</h2>

      {/* Empty State */}
      {cartItems.length === 0 ? (
        <p className="empty-message">Your cart is empty</p>
      ) : (
        <TransitionGroup className="cart-list">
          {/* Items */}
          {cartItems.map((item, index) => (
            <CSSTransition
              key={item._id || item.id || index}
              timeout={300}
              classNames="fade"
            >
              <div className="cart-item">
                {/* Image */}
                <img
                  src={item.item_image1}
                  alt={item.item_name}
                  className="cart-item-image"
                />

                {/* Text + Button */}
                <div className="cart-details">
                  <h3 className="cart-title">{item.item_name}</h3>

                  <p className="cart-price">${item.item_price} USD</p>

                  {item.item_color1 && (
                    <p className="cart-color">Color: {item.item_color1}</p>
                  )}

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item._id || item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
    </div>
  );
};

export default Cart;
