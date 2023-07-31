import React from "react";
import ReactDOM from "react-dom/client";
import { ProductsProvider } from "./context/ProductsProvider";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Modal from "react-modal"

Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
