import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Components/CartContext";
import "../Styles/checkout.css";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(cartItems); // Verify cartItems data
  }, [cartItems]);

  // Function to navigate to purchase page with cart items as state
  const goToPayment = () => {
    navigate("/purchase", { state: { cartItems } });
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="checkout-item">
              <img
                src={item.item_image1}
                alt={item.item_name}
                onError={(e) =>
                  (e.target.src = "path/to/placeholder/image.png")
                }
              />
              <div className="item-details">
                <h3>{item.item_name}</h3>
                <p>Price: ${item.item_price}</p>
                <p>Quantity: 1</p>
              </div>
            </div>
          ))}
          <div className="checkout-total">
            <h3>
              Total: $
              {cartItems.reduce((acc, item) => acc + item.item_price, 0)}
            </h3>
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
