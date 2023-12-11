import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { database } from "../firebase";
import { useState } from "react";
import Navigation from "../components/Navigation";
import "./Product.scss";
import Accordion from "../components/Accordion";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import Counter from "../components/Counter";
import ArrowLeftIcon from "../assets/icons/ArrowLeftIcon";

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
      <div className="breadcrumb">
        <Link className="webshop-crumb" to="/webshop">
          Webshop <ArrowLeftIcon width="30px" />
        </Link>
        <span
          className="category-crumb"
          style={{ textTransform: "capitalize" }}
        ></span>
      </div>
      <div className="singleview">
        <div className="singleview-img-box">
          <img
            className="singleview-img"
            src={product?.imagePath}
            alt={product?.productName}
          />
        </div>
        <div>
          <h1>{product?.productName}</h1>
          <p className="roboto12">{product.units}</p>
          <p className="roboto16">{product.productDescription}</p>
          <h2 className="price">{product.productPrice} DKK</h2>
          <div className="counter-container">
            <Counter />
          </div>
          <div className="buttons">
            <PrimaryButton text="Køb nu" />
            <SecondaryButton text="Shop mere" />
          </div>
          <Accordion title="Brug" content={<p>{product.usage}</p>} />
          <Accordion
            title="Ingredienser"
            content={<p>{product.productIngrediens}</p>}
          />
        </div>
      </div>
    </>
  );
}
