import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "../Styles/purchasepage.css";
import { useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const PurchasePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { cartItems = [] } = location.state || {};

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

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.item_price * (item.quantity || 1),
    0,
  );

  const total =
    formData.deliveryOption === "delivery" ? subtotal + 4 : subtotal;

  const handleDeliveryChange = (option) => {
    setFormData({ ...formData, deliveryOption: option });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    try {
      // 1️⃣ Prepare order payload and create order in backend
      const orderPayload = {
        email: formData.email,
        name: `${formData.firstName} ${formData.lastName}`,
        items: cartItems.map((item) => ({
          productId: item.id,
          name: item.item_name,
          price: item.item_price,
          quantity: item.quantity || 1,
        })),
        amount: total,
        status: "pending", // can later be updated by webhook
      };

      const orderRes = await axios.post(
        "https://eliowebsite.onrender.com/purchased/add",
        orderPayload,
      );

      const orderId = orderRes.data.data?._id;

      console.log("EXTRACTED ORDER ID:", orderId);
      if (!orderId) {
        toast.error("Order creation failed (no orderId returned)");
        return;
      }
      toast.success("Order saved! Redirecting to payment...");

      // 2️⃣ Prepare Stripe Checkout payload
      const stripePayload = {
        customerEmail: formData.email,
        items: cartItems.map((item) => ({
          name: item.item_name,
          price: item.item_price,
          quantity: item.quantity || 1,
        })),
        orderId, // pass orderId to backend for success_url
      };
      console.log("STRIPE PAYLOAD:", stripePayload);

      // 3️⃣ Create Stripe Checkout session
      const sessionRes = await axios.post(
        "https://eliowebsite.onrender.com/payment/create-checkout-session",
        stripePayload,
      );

      const { url } = sessionRes.data;
      if (url) {
        window.location.href = url; // redirect to Stripe
      } else {
        toast.error("Failed to get payment URL.");
      }
    } catch (error) {
      console.error("FULL ERROR:", error);

      if (error.response) {
        console.error("BACKEND ERROR:", error.response.data);
        toast.error(error.response.data.error || "Server error");
      } else {
        toast.error("Network error");
      }
    }
  };
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
