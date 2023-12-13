import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import "./Checkout.scss";
import { Link } from "react-router-dom";
import ArrowLeftIcon from "../assets/icons/ArrowLeftIcon";
import { auth, database } from "../firebase";
import DiscountBanner from "../components/DiscountBanner";
import CustomFooter from "../components/CustomFooter";

export default function Checkout() {
  const [firstName, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [finalBasket, setFinalBasket] = useState({});
  const [products, setproducts] = useState([]);

  useEffect(() => {
    if (auth.currentUser) {
      database
        .collection("users")
        .doc(auth.currentUser.uid)
        .get()
        .then((data) => {
          setFirstname(data.data().firstname);
          setLastname(data.data().lastname);
          setEmail(auth.currentUser.email);
        });
    }
    setFinalBasket(JSON.parse(localStorage.getItem("finalBasket")));

    database
      .collection("products")
      .get()
      .then((data) => {
        setproducts(data.docs);
      });
  }, []);

  console.log(finalBasket);

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
        <form>
          <h4>Indtast dine oplysninger</h4>
          <div className="fullname">
            <div className="form-group">
              <label for="firstname">Fornavn:</label>
              <input
                defaultValue={firstName}
                type="text"
                id="firstname"
                name="firstname"
                required
              />
            </div>
            <div className="form-group">
              <label for="lastname">Efternavn:</label>
              <input
                defaultValue={lastname}
                type="text"
                id="lastname"
                name="lastname"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label for="phone">Tlf nr:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label for="email">Email:</label>
            <input
              defaultValue={email}
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label for="country">Land:</label>
            <input
              defaultValue={"Danmark"}
              type="text"
              id="country"
              name="country"
              required
            />
          </div>
          <div className="form-group">
            <label for="adress">Adresse:</label>
            <input type="text" id="adress" name="adress" required />
          </div>
          <div className="location">
            <div className="form-group">
              <label for="zipcode">Postnummer:</label>
              <input type="text" id="zipcode" name="zipcode" required />
            </div>
            <div className="form-group">
              <label for="city">By:</label>
              <input type="text" id="city" name="city" required />
            </div>
          </div>

          <div className="checkout-btn">
            <PrimaryButton text="Forsæt til levering" />
          </div>
          <div className="terms-links">
            <Link to="/tradeconditions">Handelsbetingelser</Link>
          </div>
        </form>

        <div className="column">
          <div>
            {finalBasket?.basket?.map((item) => {
              const product = products
                ?.find((e) => e.id === item.product)
                ?.data();
              console.log(product);
              return (
                <div className="basket-products">
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
                <label for="discount">Rabatkode</label>
                <input type="text" id="discount" name="discount" />
              </div>
              <SecondaryButton text="Tilføj" link={"/shipping"} />
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
