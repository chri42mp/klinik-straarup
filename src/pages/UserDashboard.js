import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, database } from "../firebase";
import Navigation from "../components/Navigation";
import Dropdown from "../components/Dropdown";
import { SecondaryButton, TertiaryButtonWithIcon } from "../components/Buttons";
import LongArrowRightIcon from "../assets/icons/LongArrowRightIcon";
import CustomFooter from "../components/CustomFooter";
import "./Userdashboard.scss";
import HeartIconFilled from "../assets/icons/HeartIconFilled";

export default function UserDashboard() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({
    data: () => ({
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      country: "",
      adress: "",
      zipcode: "",
      city: "",
    }),
  });

  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    console.log(auth.currentUser.uid);
    if (auth.currentUser.uid === "uFq7ihsSmhPn3tc3NBsl72flECo1") {
      navigate("/addproduct");
    }
    if (auth.currentUser.uid) {
      database
        .collection("users")
        .doc(auth.currentUser.uid)
        .get()
        .then((data) => {
          setCurrentUser(data);
          const userFavorites = data.data()?.favorites || [];
          fetchFavoriteProducts(userFavorites);
        });
    }
  }, [navigate]);

  const fetchFavoriteProducts = (favoriteIds) => {
    Promise.all(
      favoriteIds.map((productId) =>
        database.collection("products").doc(productId).get()
      )
    )
      .then((productDocs) => {
        const products = productDocs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFavoriteProducts(products);
      })
      .catch((error) => {
        console.error("Error fetching favorite products:", error);
      });
  };

  const updateUserData = (field, value) => {
    setCurrentUser((prevData) => ({
      data: () => ({
        ...prevData.data(),
        [field]: value,
      }),
    }));

    database
      .collection("users")
      .doc(auth.currentUser.uid)
      .update({
        [field]: value,
      });
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate("/login");
    });
  };

  console.log(currentUser?.data());
  return (
    <>
      <Navigation />
      <div className="user-dashboard">
        <h1>
          Hej,{" "}
          {currentUser?.data() &&
            `${currentUser?.data()?.firstname} ${
              currentUser?.data()?.lastname
            }`}{" "}
          !
        </h1>
        <Dropdown title="Mine ordre" content={<p>jeg er en test</p>} />
        <Dropdown title="Mine tider" content={<p>jeg er en test</p>} />
        <Dropdown
          title="Mine favoritter"
          content={
            <div>
              {favoriteProducts.length > 0 ? (
                <div className="all-favorite-products">
                  {favoriteProducts.map((product) => (
                    <div className="favorite-card" key={product.id}>
                      <div className="favorite-heart-icon">
                        <HeartIconFilled
                          width="35px"
                          height="35px"
                          fill="#ff969f"
                        />
                      </div>
                      <img
                        className="favorite-card-image"
                        src={product?.imagePath}
                        alt={product?.productName}
                      />
                      <p> {product.productName}</p>

                      <p className=""> {product?.productPrice} DKK</p>
                      <SecondaryButton
                        text="Se her"
                        link={`/product/${product.id}`}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p>Du har ingen favoritter endnu.</p>
              )}
            </div>
          }
        />
        <Dropdown
          title="Mine oplysninger"
          content={
            <form className="user-information-form">
              <div className="fullname">
                <div className="form-group">
                  <label for="firstname">Fornavn:</label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    defaultValue={currentUser?.data()?.firstname}
                    onChange={(e) =>
                      updateUserData("firstname", e.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label for="lastname">Efternavn:</label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    defaultValue={currentUser?.data()?.lastname}
                    onChange={(e) => updateUserData("lastname", e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="phone">Tlf nr:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  defaultValue={currentUser?.data()?.phone}
                  onChange={(e) => updateUserData("phone", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label for="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={currentUser?.data()?.email}
                  onChange={(e) => updateUserData("email", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label for="country">Land:</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  defaultValue={"Danmark"}
                  onChange={(e) => updateUserData("country", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label for="adress">Adresse:</label>
                <input
                  type="text"
                  id="adress"
                  name="adress"
                  defaultValue={currentUser?.data()?.adress}
                  onChange={(e) => updateUserData("adress", e.target.value)}
                />
              </div>
              <div className="location">
                <div className="form-group">
                  <label for="zipcode">Postnummer:</label>
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    required
                    defaultValue={currentUser?.data()?.zipcode}
                    onChange={(e) => updateUserData("zipcode", e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label for="city">By:</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    defaultValue={currentUser?.data()?.city}
                    onChange={(e) => updateUserData("city", e.target.value)}
                  />
                </div>
              </div>
            </form>
          }
        />
        <TertiaryButtonWithIcon
          text="Log ud"
          icon={<LongArrowRightIcon />}
          onClick={handleLogout}
        />
      </div>
      <CustomFooter />
    </>
  );
}
