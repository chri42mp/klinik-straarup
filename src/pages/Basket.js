import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { database } from "../firebase";

export default function Basket() {
  let localStorageInfo = localStorage.getItem("basket");
  const [empty, setEmpty] = useState(true);
  const [basket, setBasket] = useState([]);
  const [products, setproducts] = useState([]);
  const [totalprice, setTotalprice] = useState(0);

  useEffect(() => {
    if (localStorageInfo) {
      setEmpty(false);
      setBasket(JSON.parse(localStorageInfo));

      database
        .collection("products")
        .get()
        .then((e) => {
          setproducts(e.docs);
        });
    } else {
      setEmpty(true);
    }
  }, [localStorageInfo]);

  console.log(basket);
  return (
    <>
      <Navigation />
      <h1>Kurv</h1>
      {empty ? (
        <h1>Du har ikke tilføjet til kurv endnu</h1>
      ) : (
        <>
          <h1>Her er dine varer</h1>
          <p>test</p>
          {basket?.map((product) => {
            const productFind = products.find((e) => e.id === product.product);
            let pricetot = Math.floor(
              parseFloat(product.qauntity) *
                parseFloat(productFind?.data().productPrice)
            );
            console.log(pricetot);
            // setTotalprice((prev) => prev + pricetot);
            return (
              <>
                <p>{productFind?.data().productName}</p>
                <div>
                  <p>Antal:</p>
                  <input type="number" defaultValue={product.qauntity} />
                </div>
                <p>Pris: {parseFloat(productFind?.data().productPrice)} dkk</p>
                <img
                  alt={productFind?.data().productName}
                  src={productFind?.data().imagePath}
                  width={"100px"}
                />
              </>
            );
          })}
        </>
      )}

      {"totalpris:" + totalprice + "dkk"}
    </>
  );
}
