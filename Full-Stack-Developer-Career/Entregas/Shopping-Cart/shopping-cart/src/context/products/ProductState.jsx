import React, { useReducer } from "react";
import ProductReducer from "./ProductReducer";
import ProductContext from "./ProductContext";
import axios from "axios";

const ProductState = ({ children }) => {
  const initialState = {
    products: [],
    selectedProduct: null,
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    });
  };

  const getDetails = async (id) => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    dispatch({
        type: 'GET_DETAILS',
        payload: res.data
    })
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        selectedProduct: state.selectedProduct,
        getProducts,
        getDetails,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;
