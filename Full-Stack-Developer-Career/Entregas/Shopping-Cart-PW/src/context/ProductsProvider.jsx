/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

// eslint-disable-next-line react/prop-types
export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const url = "https://fakestoreapi.com/products";

  const fakeError = () => {
    setError("");
  };

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error();
        setError(false);
        return res.json();
      })
      .then((products) => setProducts(products))
      .catch((err) => setError(err));
  }, []);

  // eslint-disable-next-line no-unused-vars
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  const filteredProducts = filterProducts(products);

  if (!products.length && !error) return <h2>Loading...</h2>;
  if (error)
    return (
      <>
        <h2>{error}</h2>
        <button onClick={fakeError}>Retry</button>
      </>
    );
  return (
    <ProductsContext.Provider
      value={{ products, filteredProducts, filters, setFilters }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
