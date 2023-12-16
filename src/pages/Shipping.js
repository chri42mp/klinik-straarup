import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { Link, useNavigate } from "react-router-dom";
import ArrowLeftIcon from "../assets/icons/ArrowLeftIcon";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import { database } from "../firebase";
import "./Shipping.scss";
import DiscountBanner from "../components/DiscountBanner";
import CustomFooter from "../components/CustomFooter";

export default function Shipping() {
  const [finalBasket, setFinalBasket] = useState({});
  const [products, setProducts] = useState([]);
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState(null);
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const navigate = useNavigate();

  const userFields = [
    "firstname",
    "lastname",
    "phone",
    "adress",
    "zipcode",
    "city",
  ];

  const handleDeliveryOptionChange = (option) => {
    setSelectedDeliveryOption(option);
  };

  const handlePaymentChange = (payment) => {
    setSelectedPayment(payment);
  };

  useEffect(() => {
    setFinalBasket(JSON.parse(localStorage.getItem("finalBasket")));

    database
      .collection("products")
      .get()
      .then((data) => {
        setProducts(data.docs);
      });
  }, []);

  useEffect(() => {
    if (selectedDeliveryOption === "standard") {
      setDeliveryCost(39);
    } else if (selectedDeliveryOption === "express") {
      setDeliveryCost(79);
    } else {
      setDeliveryCost(0);
    }
  }, [selectedDeliveryOption]);

  useEffect(() => {
    setFinalBasket((prevBasket) => ({
      ...prevBasket,
      deliveryCost: deliveryCost,
      totalprice: prevBasket.totalprice + deliveryCost,
    }));
  }, [deliveryCost]);

  console.log(finalBasket.basket);

  const formData = {};
  userFields.forEach((field) => {
    formData[field] = sessionStorage.getItem(`shipping_${field}`);
  });
  console.log(formData);

  const handleSecurePayment = async () => {
    const formData = {};
    userFields.forEach((field) => {
      formData[field] = sessionStorage.getItem(`shipping_${field}`);
    });

    const orderData = {
      items: finalBasket.basket.map((item) => ({
        productId: item.product,
        qauntity: item.qauntity,
      })),
      deliveryOption: selectedDeliveryOption,
      paymentMethod: selectedPayment,
      firstname: formData.firstname,
      lastname: formData.lastname,
      phone: formData.phone,
      adress: formData.adress,
      zipcode: formData.zipcode,
      city: formData.city,
    };

    console.log("orderData:", orderData);

    try {
      await database.collection("orders").add(orderData);
      navigate("/confirmation");
    } catch (error) {
      console.error("error creating order", error);
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
        <Link className="webshop-crumb" to="/checkout">
          Kontaktoplysninger <ArrowLeftIcon width="30px" />
        </Link>
        <p className="active-page">Checkout</p>
      </div>
      <div className="grid-1-1">
        <div>
          <div className="delivery-container">
            <h5>Leveringsmuligheder</h5>
            <div className="delivery-options">
              <label>
                <input
                  type="checkbox"
                  checked={selectedDeliveryOption === "standard"}
                  onChange={() => handleDeliveryOptionChange("standard")}
                />
                Standard
              </label>
              <span>3-5 dage</span>
            </div>
            <div className="delivery-options">
              <label>
                <input
                  type="checkbox"
                  checked={selectedDeliveryOption === "express"}
                  onChange={() => handleDeliveryOptionChange("express")}
                />
                Express
              </label>
              <span>1-2 dage</span>
            </div>
          </div>
          <form>
            <h5>Vælg betalingsmulighed</h5>
            <div className="payment-option">
              <input
                type="radio"
                id="creditCard"
                name="payment"
                value="creditCard"
                checked={selectedPayment === "creditCard"}
                onChange={() => handlePaymentChange("creditCard")}
              />
              <label htmlFor="creditCard"> Betalingskort</label>
              <div className="image-container">
                <img src="/site-images/visa.png" alt="Betalingskort" />
                <img src="/site-images/mastercard.png" alt="Betalingskort" />
              </div>
            </div>
            <div className="payment-option">
              <input
                type="radio"
                id="klarna"
                name="klarna"
                value="klarna"
                checked={selectedPayment === "klarna"}
                onChange={() => handlePaymentChange("klarna")}
              />
              <label htmlFor="klarna">Klarna</label>
              <div className="image-container">
                <img src="/site-images/klarna.png" alt="klarna" />
              </div>
            </div>
          </form>
          <div className="safe-payment-btn">
            <PrimaryButton
              text="Gå til sikker betaling"
              onClick={handleSecurePayment}
            />
          </div>
          <div className="terms-links">
            <Link to="/tradeconditions">Handelsbetingelser</Link>
          </div>
        </div>

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
                  <div className="space-between">
                    <p>{product?.productName}</p>
                    <p>{product?.productPrice + " DKK"}</p>
                  </div>
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
              <h5>{deliveryCost.toFixed(2)} DKK</h5>
            </div>
            <div className="add-discount">
              <div className="discount-group">
                <label for="discount">Rabatkode</label>
                <input type="text" id="discount" name="discount" />
              </div>
              <SecondaryButton text="Tilføj" link={"/shipping"} />
            </div>
            <div className="delivery">
              <h3>Total inkl. levering</h3>
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
