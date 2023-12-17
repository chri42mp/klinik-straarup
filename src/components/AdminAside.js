import React, { useEffect, useState } from "react";
import "./AdminAside.scss";
import { Link } from "react-router-dom";
import LongArrowRightIcon from "../assets/icons/LongArrowRightIcon";

export default function AdminAside() {
  const [isOpen, setIsOpen] = useState(false);
  const [key, setKey] = useState(0);

  const toggleAside = () => {
    setIsOpen(!isOpen);
    setKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    const screenWidth = window.innerWidth;
    console.log("Screen Width:", screenWidth);
    if (screenWidth < 834) {
      setIsOpen(false);
      console.log("Setting isOpen to false");
    }
  }, [key]);

  return (
    <>
      <aside className={`admin-aside ${isOpen ? "open" : ""}`}>
        <div className="icon" onClick={toggleAside}>
          {<LongArrowRightIcon />}
        </div>
        <nav>
          <Link to={"/addproduct"}>Tilføj produkt</Link>
          <Link to={"/allproducts"}>Produktoversigt</Link>
          <Link to={"/allorders"}>Ordre</Link>
        </nav>
      </aside>
    </>
  );
}
