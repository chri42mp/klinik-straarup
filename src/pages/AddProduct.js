import React, { useState } from "react";
import { auth, database } from "../firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./AddProduct.scss";
import AdminHeader from "../components/AdminHeader";
import AdminAside from "../components/AdminAside";
import { PrimaryButton } from "../components/Buttons";

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    ingrediens: "",
    price: "",
    category: "",
    usage: "",
    imagePath: "",
    units: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser.uid === "uFq7ihsSmhPn3tc3NBsl72flECo1") {
      navigate("/");
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const addProduct = () => {
    database
      .collection("products")
      .add({
        productName: newProduct.name,
        productDescription: newProduct.description,
        productIngrediens: newProduct.ingrediens,
        productPrice: newProduct.price,
        category: newProduct.category,
        usage: newProduct.usage,
        imagePath: `/webshop-images/${newProduct.imagePath.replace(/^\//, "")}`,
        units: newProduct.units,
      })
      .then(() => {
        setNewProduct({
          name: "",
          description: "",
          ingrediens: "",
          price: "",
          category: "",
          usage: "",
          imagePath: "",
          units: "",
        });
      })
      .catch((error) => {
        console.error("Error adding product: ", error);
      });
  };

  return (
    <>
      <Helmet>
        <title>Tilføj produkt</title>
        <meta
          name="description"
          content="Denne side bruges til at tilføje produkter hvis man har admin adgang"
        />
      </Helmet>
      <AdminHeader />
      <div className="add-product-content">
        <div>
          <AdminAside />
        </div>
        <div className="add-product-form">
          <h1>Tilføj produkt</h1>
          <form>
            <div className="form-group">
              <label htmlFor="name">Titel</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="price-and-units">
              <div className="form-group">
                <label htmlFor="units">Enheder</label>
                <input
                  type="text"
                  id="units"
                  name="units"
                  value={newProduct.units}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Pris</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={newProduct.price}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="description">Beskrivelse</label>
              <input
                type="text"
                id="description"
                name="description"
                value={newProduct.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="ingrediens">Ingredienser</label>
              <input
                type="text"
                id="ingrediens"
                name="ingrediens"
                value={newProduct.ingrediens}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Vælg kategori</label>
              <select
                id="category"
                name="category"
                value={newProduct.category}
                onChange={handleInputChange}
              >
                <option value="Getting skin ready">Getting skin ready</option>
                <option value="prevent + correct">Prevent + Correct</option>
                <option value="Hydration + Calmin">Hydration + Calming</option>
                <option value="Protect">Protect</option>
                <option value="Supplementary">Supplementary</option>
                <option value="Programs + kits">Programs + Kits</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="usage">Anvendelse</label>
              <input
                type="text"
                id="usage"
                name="usage"
                value={newProduct.usage}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="imagePath">Billede sti</label>
              <input
                type="text"
                id="imagePath"
                name="imagePath"
                value={newProduct.imagePath}
                onChange={handleInputChange}
              />
            </div>
            <div className="add-product-btn">
              <PrimaryButton text="Tilføj produkt" onClick={addProduct} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
