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
      <div className="product-category-content">
        <h1 style={{ textTransform: "capitalize" }}>
          {category.replaceAll("-", " ")}
        </h1>
        <div className="all-category-products">
          {products?.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product?.imagePath}
                alt={product?.productName}
                style={{ maxWidth: "100px", maxHeight: "100px" }}
              />
              <p>{product?.productName}</p>
              <p>Price: {product?.productPrice}</p>
              <Link to={"/product/" + product.id}>Se her</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
