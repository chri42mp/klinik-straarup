import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import { database } from "../firebase";

export default function Webshop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    database
      .collection("products")
      .get()
      .then((data) => {
        let productList = [];
        data.docs.forEach((doc) => {
          productList.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setProducts(productList);
      });
  }, []);

  console.log(products);

  return (
    <>
      <Navigation />
      <h1>Webshop</h1>

      <ul>
        {products?.map((product) => (
          <li key={product.id}>
            <strong>{product?.productName}</strong>
            <p>Description: {product?.productDescription}</p>
            <p>Ingredients: {product?.productIngrediens}</p>
            <p>Price: {product?.productPrice}</p>
            <img
              src={product?.imagePath}
              alt={product?.productName}
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
