import React, { useEffect, useContext } from "react";
import ProductContext from "../context/products/ProductContext";

function ProductList() {
  const { products, getProducts, getDetails } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <a
          key={product.id}
          href="#!"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => getDetails(product.id)}
        >
          {product.title}
          <img src={product.image} style={{ width: "100px" }} />
        </a>
      ))}
    </div>
  );
}

export default ProductList;
