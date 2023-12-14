import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";
import LoginIcon from "../assets/icons/LoginIcon";
import BasketIcon from "../assets/icons/BasketIcon";
import ArrowDownIcon from "../assets/icons/ArrowDownIcon";
import ArrowUpIcon from "../assets/icons/ArrowUpIcon";
import { PrimaryButton } from "./Buttons";
import MenuIcon from "../assets/icons/MenuIcon";

export default function Navigation() {
  const [isSubmenuVisible, setSubmenuVisble] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const handleSubmenuClicked = () => {
    setSubmenuVisble(!isSubmenuVisible);
    console.log("Submenu clicked!");
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <nav>
      <div className="logo-container">
        <Link to="/">
          <img
            className="logo-mobile"
            src="/KS-logo-element_gold.png"
            alt="klinik strarup logo"
          />
        </Link>
      </div>
      <div className="navigation-elements">
        <Link to="/login">
          <span className="visually-hidden">Gå til login</span>
          <LoginIcon />
        </Link>
        <Link to="/basket">
          <span className="visually-hidden">Gå til kurv</span>
          <BasketIcon />
        </Link>
        <MenuIcon onClick={handleMobileMenuToggle} />
      </div>
      {isMobileMenuVisible && (
        <ul className="mobile-menu">
          <ul onClick={handleSubmenuClicked}>
            Behandlinger
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
        </ul>
      )}
    </nav>
  );
}

/* <ul
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
          </ul> */
