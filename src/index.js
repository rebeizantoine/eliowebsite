import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./Components/CartContext";
import "./index.css"; // Import global styles if needed

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
