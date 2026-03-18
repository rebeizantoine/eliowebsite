import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/paymentStatus.css";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true); // show loading until data arrives

  // Read orderId from URL query
  const query = new URLSearchParams(location.search);
  const orderId = query.get("orderId");

  useEffect(() => {
    if (!orderId) return;

    const fetchOrder = async () => {
      try {
        const res = await axios.get(
          `https://eliowebsite.onrender.com/purchased/${orderId}`,
        );

        // Optional: force status to "paid" for testing
        // res.data.status = "paid";

        setOrder(res.data);
      } catch (err) {
        console.error("Error fetching order:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return <div className="status-container">Loading receipt...</div>;
  }

  if (!order) {
    return (
      <div className="status-container">
        ⚠ Order not found. Please contact support.
      </div>
    );
  }

  return (
    <div className="status-container success">
      <div className="status-card receipt">
        <h1 className="status-title">
          {order.status === "paid"
            ? "✔ Payment Successful"
            : "⚠ Payment Pending"}
        </h1>

        <p className="status-text">
          {order.status === "paid"
            ? "Your order has been placed successfully."
            : "Your payment has not been completed yet."}
        </p>

        <p className="status-subtext">
          Please keep this receipt for your records.
        </p>

        <div className="receipt-box">
          <h3>Order Receipt</h3>

          <p>
            <strong>Name:</strong> {order.name}
          </p>
          <p>
            <strong>Email:</strong> {order.email}
          </p>

          {order.items.length > 0 && (
            <div className="receipt-items">
              {order.items.map((item, index) => (
                <div key={index} className="receipt-item">
                  <span>{item.name}</span>
                  <span>x{item.quantity}</span>
                  <span>${item.price}</span>
                </div>
              ))}
            </div>
          )}

          <div className="receipt-total">Total: ${order.amount}</div>
          <div className="receipt-status">Status: {order.status}</div>
        </div>

        <div className="status-actions">
          <button onClick={handlePrint} className="status-button">
            Print / Download Receipt
          </button>

          <button onClick={() => navigate("/")} className="status-button">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
