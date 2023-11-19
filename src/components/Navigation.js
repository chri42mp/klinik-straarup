import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";
import LoginIcon from "../assets/icons/LoginIcon";
import BasketIcon from "../assets/icons/BasketIcon";
import ArrowDownIcon from "../assets/icons/ArrowDownIcon";
import ArrowUpIcon from "../assets/icons/ArrowUpIcon";
import { PrimaryButton } from "./Buttons";
import KsLogoGold from "../assets/logos/KsLogoGold";

export default function Navigation() {
  const [isSubmenuVisible, setSubmenuVisble] = useState(false);

  const handleSubmenuClicked = () => {
    setSubmenuVisble(!isSubmenuVisible);
    console.log("Submenu clicked!");
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <span className="visually-hidden">Gå til startsiden</span>
            <KsLogoGold className="ks-logo-gold" />
          </Link>
        </li>
        <li
          className={`treatments ${isSubmenuVisible ? "active" : ""}`}
          onClick={handleSubmenuClicked}
        >
          Behandlinger
          {isSubmenuVisible ? (
            <ArrowUpIcon className="arrow-up-icon" />
          ) : (
            <ArrowDownIcon className="arrow-down-icon" />
          )}
          {isSubmenuVisible && (
            <ul className="submenu">
              <li>
                <Link to="/fillers">Filler</Link>
              </li>
              <li>
                <Link to="/botox">Botox</Link>
              </li>
              <li>
                <Link to="/laser">Permanent hårfjerning</Link>
              </li>
              <li>
                <Link to="/sclerosis">Sklerosering</Link>
              </li>
              <li>
                <Link to="/skinbooster">Skinbooster</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/prices">Priser</Link>
        </li>
        <li>
          <Link to="/webshop">Webshop</Link>
        </li>
        <li>
          <Link to="/about">Om</Link>
        </li>
        <li>
          <Link to="/contact">Kontakt</Link>
        </li>
        <li>
          <PrimaryButton
            text="Book"
            onClick={() => console.log("Knap klikket!")}
          />
        </li>
        <li>
          <Link to="/login">
            <span className="visually-hidden">Gå til login</span>
            <LoginIcon />
          </Link>
        </li>
        <li>
          <Link to="/basket">
            <span className="visually-hidden">Gå til kurv</span>
            <BasketIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
