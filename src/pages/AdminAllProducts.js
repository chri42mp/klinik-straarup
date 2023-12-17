import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminAside from "../components/AdminAside";
import { database } from "../firebase";
import "./AdminAllProducts.scss";
import { PrimaryButton } from "../components/Buttons";
import TrashIcon from "../assets/icons/TrashIcon";

export default function AdminAllProducts() {
  const [products, setProducts] = useState([]);

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
      });
  }, []);

  return (
    <>
      <AdminHeader />
      <div className="all-products-container">
        <AdminAside />
        <div className="all-products-content">
          <div className="all-products-heading-and-btn">
            <h1>Produktoversigt</h1>
            <div>
              <PrimaryButton text="Tilføj Produkt" />
            </div>
          </div>
          <table>
            <thead>
              <tr className="table-headers">
                <th>ID</th>
                <th>Navn</th>
                <th>Pris</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>#{product?.id}</td>
                  <td>{product?.productName}</td>
                  <td>{product?.productPrice + " DKK"}</td>
                  <td>
                    <TrashIcon width="30px" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
