import React, { useState } from "react";
import { auth, database } from "../firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

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
        // Reset the form after successfully adding the product
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
        // Handle error if needed
        console.error("Error adding product: ", error);
      });
  };

  return (
    <>
      <Helmet>
        <title>Tilføj produkt</title>
        <meta name="description" content="Denne side bruges til at tilføje produkter hvis man har admin adgang" />
      </Helmet>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="name">
          Produkt Titel
          <input type="text" id="name" name="name" value={newProduct.name} onChange={handleInputChange} />
        </label>
        <label htmlFor="units">
          Units
          <input type="text" id="units" name="units" value={newProduct.units} onChange={handleInputChange} />
        </label>
        <label htmlFor="description">
          Beskrivelse
          <textarea type="text" id="description" name="description" value={newProduct.description} onChange={handleInputChange} />
        </label>
        <label htmlFor="ingrediens">
          Ingredienser
          <textarea type="text" id="ingrediens" name="ingrediens" value={newProduct.ingrediens} onChange={handleInputChange} />
        </label>
        <label htmlFor="price">
          Pris
          <input type="number" id="price" name="price" value={newProduct.price} onChange={handleInputChange} />
        </label>
        <label htmlFor="category">
          Vælg kategori
          <select id="category" name="category" value={newProduct.category} onChange={handleInputChange}>
            <option value="Getting skin ready">Getting skin ready</option>
            <option value="prevent + correct">Prevent + Correct</option>
            <option value="Hydration + Calmin">Hydration + Calming</option>
            <option value="Protect">Protect</option>
            <option value="Supplementary">Supplementary</option>
            <option value="Programs + kits">Programs + Kits</option>
          </select>
        </label>

        <label htmlFor="usage">
          Anvendelse
          <textarea type="text" id="usage" name="usage" value={newProduct.usage} onChange={handleInputChange}></textarea>
        </label>
        <label htmlFor="imagePath">
          Billede sti
          <input type="text" id="imagePath" name="imagePath" value={newProduct.imagePath} onChange={handleInputChange} />
        </label>
        <button type="button" onClick={addProduct}>
          Tilføj produkt
        </button>
      </form>
    </>
  );
};

export default AddProduct;
