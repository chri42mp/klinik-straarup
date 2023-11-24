import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useState } from "react";
import { database } from "../firebase";

export default function WebshopCategory() {
  const { category } = useParams();
  console.log(category);

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
        setProducts(
          productList.filter(
            (e) => e.category === category.replaceAll("-", " ")
          )
        );
      });
  }, [category]);

  console.log(products);

  return (
    <>
      <Navigation />
      <h1 style={{ textTransform: "capitalize" }}>
        {category.replaceAll("-", " ")}
      </h1>
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
            <Link to={"/product/" + product.id}>Se her</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
