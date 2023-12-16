import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import "./Checkout.scss";
import { Link, useNavigate } from "react-router-dom";
import ArrowLeftIcon from "../assets/icons/ArrowLeftIcon";
import { auth, database } from "../firebase";
import DiscountBanner from "../components/DiscountBanner";
import CustomFooter from "../components/CustomFooter";

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    country: "Danmark",
    adress: "",
    zipcode: "",
    city: "",
  });
  const [finalBasket, setFinalBasket] = useState({});
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const userFields = [
    "firstname",
    "lastname",
    "phone",
    "adress",
    "zipcode",
    "city",
  ];

  useEffect(() => {
    if (auth.currentUser) {
      database
        .collection("users")
        .doc(auth.currentUser.uid)
        .get()
        .then((data) => {
          setFormData((prevData) => ({
            ...prevData,
            firstname: data.data().firstname,
            lastname: data.data().lastname,
            email: auth.currentUser.email,
            phone: data.data().phone,
            adress: data.data().adress,
            zipcode: data.data().zipcode,
            city: data.data().city,
          }));

          userFields.forEach((field) =>
            handleInputChange(field, data.data()[field])
          );
        });
    }

    setFinalBasket(JSON.parse(localStorage.getItem("finalBasket")));

    database
      .collection("products")
      .get()
      .then((data) => {
        setProducts(data.docs);
      });
  }, []);

  const handleInputChange = (field, value) => {
    if (value !== formData[field]) {
      setFormData((prevData) => ({ ...prevData, [field]: value }));
      sessionStorage.setItem(`checkout_${field}`, value);
    }
  };

  const handleContinueToShipping = () => {
    const isFormValid = userFields.every(
      (field) => formData[field].trim() !== ""
    );
    if (isFormValid) {
      userFields.forEach((field) =>
        sessionStorage.setItem(`shipping_${field}`, formData[field])
      );
      navigate("/shipping");
    } else {
      alert("Du skal udfylde alle felter, før du kan fortsætte til levering");
    }
  };

  return (
    <>
      <Navigation />
      <div className="breadcrumb">
        <Link className="webshop-crumb" to="/webshop">
          Webshop <ArrowLeftIcon width="30px" />
        </Link>
        <Link className="webshop-crumb" to="/basket">
          Kurv <ArrowLeftIcon width="30px" />
        </Link>
        <p className="active-page">Checkout</p>
      </div>
      <div className="grid-1-1">
        <div>
          <form className="checkout-form">
            <h4>Indtast dine oplysninger</h4>
            <div>
              {userFields.map((field) => (
                <div className={`form-group ${field}`} key={field}>
                  <label htmlFor={field}>
                    {field === "firstname" && "Fornavn"}
                    {field === "lastname" && "Efternavn"}
                    {field === "phone" && "Tlf nr"}
                    {field === "adress" && "Adresse"}
                    {field === "zipcode" && "Postnummer"}
                    {field === "city" && "By"}
                  </label>
                  <input
                    defaultValue={formData[field]}
                    type="text"
                    id={field}
                    name={field}
                    required
                    onChange={(e) => handleInputChange(field, e.target.value)}
                  />
                </div>
              ))}
            </div>
            <div className="checkout-btn">
              <PrimaryButton
                text="Forsæt til levering"
                onClick={handleContinueToShipping}
              />
            </div>
            <div className="terms-links">
              <Link to="/tradeconditions">Handelsbetingelser</Link>
            </div>
          </form>
        </div>

        <div className="column">
          <div className="basket-products">
            {finalBasket?.basket?.map((item) => {
              const product = products
                ?.find((e) => e.id === item.product)
                ?.data();
              console.log(product);
              return (
                <div key={item.product}>
                  <div className="image-container">
                    <img alt={product?.productName} src={product?.imagePath} />
                  </div>
                  <p>{product?.productName}</p>
                  <p>{product?.productPrice + " DKK"}</p>
                </div>
              );
            })}
          </div>
          <div className="total-column">
            <h2>Oversigt</h2>
            <div className="total-price">
              <h5>Subtotal</h5>
              <h5> {finalBasket.totalprice + " DKK"}</h5>
            </div>
            <div className="delivery">
              <h5>Levering</h5>
              <h5>00,00 DKK</h5>
            </div>
            <div className="add-discount">
              <div className="discount-group">
                <label htmlFor="discount">Rabatkode</label>
                <input type="text" id="discount" name="discount" />
              </div>
              <SecondaryButton text="Tilføj" />
            </div>
            <div className="delivery">
              <h3>Total eksl. levering</h3>
              <h3>{finalBasket.totalprice + " DKK"}</h3>
            </div>
            <p>Inkl. moms</p>
          </div>
        </div>
      </div>
      <DiscountBanner />
      <CustomFooter />
    </>
  );
}
