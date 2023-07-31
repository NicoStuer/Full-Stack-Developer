/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { ProductsContext } from "../../../context/ProductsProvider";
import CardView from "./CardView";
import ListView from "./ListView";

function ShowProducts({ isListView }) {
  const { products } = useContext(ProductsContext);

  if (products.length === 0) {
    return <h1>No hay products</h1>;
  }

  return <>{isListView ? <ListView /> : <CardView />}</>;
}

export default ShowProducts;
