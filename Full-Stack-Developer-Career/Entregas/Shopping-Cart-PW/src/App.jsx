/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import ShowProducts from "./components/products/shopping/ShowProducts";
import NotFound from "./components/not_found/NotFound";
import "./App.css";
import Contact from "./components/contact/Contact";
import { CartProvider } from "./context/CartProvider";

function App() {
  const [isListView, setListView] = useState(true);

  const handleViewChange = () => {
    setListView((prevValue) => !prevValue);
  };

  return (
    <CartProvider>
      <div className="App">
        <Navbar onViewChange={handleViewChange} isListView={isListView} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shopping"
            element={
              <ShowProducts
                isListView={isListView}
                onViewChange={handleViewChange}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
