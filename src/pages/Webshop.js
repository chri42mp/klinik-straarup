import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { useEffect } from "react";
import { database } from "../firebase";

export default function Webshop() {
  const [products, setProducts] = useState([]);

  function test() {
    database.collection("products").add({
      productName: "ko",
    });
  }

  useEffect(() => {
    database
      .collection("products")
      .get()
      .then((data) => {
        let productList = [];
        data.docs.forEach((doc) => {
          productList.push(doc.data());
        });
        setProducts(productList);
      });
  }, [setProducts]);

  console.log(products);

  return (
    <>
      <Navigation />
      <h1>Webshop</h1>

      <ul>
        {products?.map((product, index) => {
          return <li key={index}>{product?.productName}</li>;
        })}
      </ul>
      <h1>Tilføj produkt</h1>
      <form>
        <label htmlFor="name">
          Produkt Titel
          <input type="text"></input>
        </label>
      </form>
      <button onClick={() => test()}>Test</button>
    </>
  );
}
