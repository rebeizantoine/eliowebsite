import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import "../Styles/checkout.css";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 1. Calculate total directly (No need for extra useState/useEffect)
  // This is faster and prevents infinite re-render loops
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.item_price * (item.quantity || 1),
    0,
  );

  const goToPayment = () => {
    navigate("/purchase", { state: { cartItems, totalAmount } });
  };

  const placeholderImage = "https://via.placeholder.com/150";

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item._id} className="checkout-item">
              <img
                src={item.item_image1 || placeholderImage}
                alt={item.item_name}
                onError={(e) => (e.target.src = placeholderImage)}
              />

              <div className="item-details">
                <h3>{item.item_name}</h3>
                <p>Price: ${item.item_price}</p>
                {/* 2. Display the actual quantity from Redux */}
                <p>Quantity: {item.quantity || 1}</p>
              </div>

              <button onClick={() => dispatch(removeFromCart(item._id))}>
                Remove
              </button>
            </div>
          ))}

          <div className="checkout-total">
            <h3>Total: ${totalAmount.toFixed(2)}</h3>
            <button className="checkout-button" onClick={goToPayment}>
              Proceed to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
