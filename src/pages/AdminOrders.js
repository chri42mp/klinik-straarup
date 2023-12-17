import React, { useEffect, useState } from "react";
import { database } from "../firebase";
import AdminAside from "../components/AdminAside";
import AdminHeader from "../components/AdminHeader";
import "./AdminOrders.scss";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    database
      .collection("orders")
      .get()
      .then((data) => {
        let orderList = [];
        data.docs.forEach((doc) => {
          orderList.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setOrders(orderList);
        console.log("Orders:", orderList);
      });
  }, []);

  return (
    <>
      <AdminHeader />
      <div className="all-orders-container">
        <AdminAside />
        <div className="all-orders-content">
          <h1>Ordre</h1>
          <table>
            <thead>
              <tr className="table-headers">
                <th>Ordrenr.</th>
                <th>Varer</th>
                <th>Kunde</th>
                <th>Dato</th>
                <th>Pris</th>
                <th>Betaling</th>
                <th>Levering</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>#{order.id}</td>
                  <td>
                    {order.items.reduce(
                      (total, item) => total + item.qauntity,
                      0
                    )}{" "}
                    stk.
                  </td>
                  <td>{`${order.firstname} ${order.lastname}`}</td>
                  <td>{order.date}</td>
                  <td>
                    {order.items.reduce(
                      (totalPrice, item) =>
                        totalPrice + item.qauntity * item.productPrice,
                      0
                    ) + (order.deliveryOption === "express" ? 79 : 39)}{" "}
                    DKK
                  </td>
                  <td>{order.paymentMethod}</td>
                  <td>{order.deliveryOption}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
