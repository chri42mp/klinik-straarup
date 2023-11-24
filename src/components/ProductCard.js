import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, productName, productPrice, imagePath } = product;

  return (
    <div className="product-card">
      <img
        src={imagePath}
        alt={productName}
        style={{ maxWidth: "100px", maxHeight: "100px" }}
      />
      <p>{productName}</p>
      <p>Price: {productPrice}</p>

      <Link to={"/product/" + id}>Se her</Link>
    </div>
  );
};

export default ProductCard;
