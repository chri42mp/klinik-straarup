import React, { useEffect, useState } from "react";
import { database } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./WebshopBanner.scss";

export default function WebshopBanner({ headline }) {
  const [products, setProducts] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);
  const navigate = useNavigate();

  const getRandomIndexes = (maxLength, count) => {
    const indexes = [];
    while (indexes.length < count) {
      const randomIndex = Math.floor(Math.random() * maxLength);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }
    return indexes;
  };

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

        const randomIndexes = getRandomIndexes(productList.length, 4);
        const randomProducts = randomIndexes.map((index) => productList[index]);
        setRandomProducts(randomProducts);
      });
  }, []);

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <h1 className="webshop-banner-headline">{headline}</h1>
      <div className="random-products-container">
        {randomProducts.map((product) => (
          <div
            key={product?.id}
            className="random-product-card"
            onClick={() => handleCardClick(product.id)}
          >
            <img
              src={product?.imagePath}
              alt={"billede af et produkt der hedder " + product?.productName}
              loading="lazy"
            />
            <p className="josefin18">{product?.productName}</p>
            <p>{product?.productPrice} DKK </p>
          </div>
        ))}
      </div>
    </>
  );
}
