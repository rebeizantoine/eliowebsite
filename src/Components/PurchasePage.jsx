import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../Components/CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "../Styles/purchasepage.css";

const PurchasePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems = [] } = location.state || {};
  const { emptyCart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone1: "",
    phone2: "",
    location: "",
    additionalDetails: "",
    deliveryOption: "pickup",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      purchased_firstname: formData.firstName,
      purchased_lastname: formData.lastName,
      purchased_email: formData.email,
      purchased_phonenumber1: formData.phone1,
      purchased_phonenumber2: formData.phone2,
      purchased_deliveryoption: formData.deliveryOption,
      purchased_location: formData.location,
      purchased_additionaldetails: formData.additionalDetails,
      purchased_subtotal: subtotal,
      purchased_item1name: cartItems[0]?.item_name || "",
      purchased_item1price: cartItems[0]?.item_price || 0,
      purchased_item2name: cartItems[1]?.item_name || "",
      purchased_item2price: cartItems[1]?.item_price || 0,
      purchased_item3name: cartItems[2]?.item_name || "",
      purchased_item3price: cartItems[2]?.item_price || 0,
      purchased_item4name: cartItems[3]?.item_name || "",
      purchased_item4price: cartItems[3]?.item_price || 0,
    };

    try {
      await axios.post(
        "https://eliowebsite.onrender.com/purchased/add",
        payload
      );
      toast.success("Order submitted successfully!");

      emptyCart();
      navigate("/thankyou");
    } catch (error) {
      toast.error("Failed to submit order. Please try again.");
      console.error("There was an error submitting the order!", error);
    }
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.item_price * (item.quantity || 1),
    0
  );

  const handleDeliveryChange = (option) => {
    setFormData({ ...formData, deliveryOption: option });
  };

  const total =
    formData.deliveryOption === "delivery" ? subtotal + 4 : subtotal;

  return (
    <div className="purchase-page">
      <ToastContainer />
      <div className="double-boxes">
        <form onSubmit={handleSubmit}>
          <div className="form-class">
            <div className="form-group1">
              <label className="label-of-form">First Name:</label>
              <input
                className="input-of-form"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
            </div>
            <div className="form-group1">
              <label className="label-of-form">Last Name:</label>
              <input
                className="input-of-form"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Last Name"
              />
            </div>
            <div className="form-group1">
              <label className="label-of-form">Email:</label>
              <input
                className="input-of-form"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
              />
            </div>
            <div className="form-group1">
              <label className="label-of-form">Phone Number 1:</label>
              <input
                className="input-of-form"
                type="tel"
                name="phone1"
                value={formData.phone1}
                onChange={handleChange}
                required
                placeholder="Phone number"
              />
            </div>
            <div className="form-group1">
              <label className="label-of-form">Phone Number 2:</label>
              <input
                className="input-of-form"
                type="tel"
                name="phone2"
                value={formData.phone2}
                onChange={handleChange}
                placeholder="Phone number 2"
              />
            </div>
            <div className="delivery-options">
              <span
                className={`delivery-option ${
                  formData.deliveryOption === "pickup" ? "selected" : ""
                }`}
                onClick={() => handleDeliveryChange("pickup")}
              >
                {/* SVG for pickup */}
                Pick up in store
              </span>
              <span
                className={`delivery-option ${
                  formData.deliveryOption === "delivery" ? "selected" : ""
                }`}
                onClick={() => handleDeliveryChange("delivery")}
              >
                {/* SVG for delivery */}
                Delivery
              </span>
            </div>
            <div className="form-group1">
              <label className="label-of-form">Location:</label>
              <input
                className="input-of-form"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="Location"
              />
            </div>
            <div className="form-group1">
              <label className="label-of-form">Additional Details:</label>
              <textarea
                name="additionalDetails"
                value={formData.additionalDetails}
                onChange={handleChange}
                rows="4"
                placeholder="Additional Details"
              />
            </div>
            <div className="howtopay">
              <h3>How you'll pay</h3>
              <p>
                Preferably Cash on Delivery or Book your piece and then WhatsApp
                us on 03234068.
              </p>
            </div>
            <button className="additional-button" type="submit">
              Complete Order
            </button>
          </div>
        </form>
        <div className="cart-details">
          <h3 className="details-h3">Cart Items:</h3>
          <div className="items-list">
            {cartItems &&
              cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img
                      src={item.item_image1}
                      alt={item.item_name}
                      onError={(e) =>
                        (e.target.src = "path/to/placeholder/image.png")
                      }
                    />
                  </div>
                  <div className="item-info">
                    <div className="left-of-item-info">
                      <div className="item-name">{item.item_name}</div>
                      <div className="item-color">{item.item_color1}</div>
                    </div>
                    <div className="right-of-item-info">
                      <div className="item-quantity">
                        Quantity: {item.quantity || 1}
                      </div>
                      <div className="item-price">${item.item_price}</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="subtotal">
            Subtotal: ${subtotal.toFixed(2)}
            {formData.deliveryOption === "delivery" && (
              <div className="delivery-fee">+ $4.00 for delivery</div>
            )}
            <div className="total">Total: ${total.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
