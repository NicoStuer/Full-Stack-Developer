import React, { useContext } from "react";
import ProductContext from "../context/products/ProductContext";

function Details() {
  const { selectedProduct } = useContext(ProductContext);
  return (<>
  {selectedProduct ? (<div>
    <img src={selectedProduct.image}/>
    <h1>`${selectedProduct.title}`</h1>
  </div>): (<h1>No product selected</h1>)}
  </>);
}

export default Details;
