import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { database } from "../firebase";
import { useState } from "react";
import Navigation from "../components/Navigation";
import "./Product.scss";
import Accordion from "../components/Accordion";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import Counter from "../components/Counter";

export default function Product() {
  const { uid } = useParams();
  console.log(uid);

  const [product, setproduct] = useState({});

  useEffect(() => {
    database
      .collection("products")
      .doc(uid)
      .get()
      .then((product) => {
        console.log(product.data());
        setproduct(product.data());
      });
  }, [uid]);

  return (
    <>
      <Navigation />
      <div className="singleview">
        <div className="singleview-image">
          <img
            src={product?.imagePath}
            alt={product?.productName}
            style={{ maxWidth: "612px", maxHeight: "523px" }}
          />
        </div>
        <div>
          <h1>{product?.productName}</h1>
          <p>{product.units}</p>
          <p>{product.productDescription}</p>
          <h3 className="flex-end">{product.productPrice} DKK</h3>
          <div className="flex-end">
            <Counter />
          </div>
          <div className="buttons">
            <PrimaryButton text="Køb nu" />
            <SecondaryButton text="Shop mere" />
          </div>
          <Accordion title="Brug" content={<p>{product.usage}</p>} />
          <Accordion
            title="Ingredienser"
            content={<div>{product.productIngrediens}</div>}
          />
        </div>
      </div>
    </>
  );
}
