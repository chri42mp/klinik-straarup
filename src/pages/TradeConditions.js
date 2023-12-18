import React from "react";
import Navigation from "../components/Navigation";
import { Helmet } from "react-helmet";
import DiscountBanner from "../components/DiscountBanner";
import CustomFooter from "../components/CustomFooter";
import "./TradeConditions.scss";

export default function TradeConditions() {
  return (
    <>
      <Helmet>
        <title>Handelsbetingelser</title>
        <meta
          name="description"
          content="Denne side beskriver handelsbetingelserne for webshoppen"
        />
      </Helmet>
      <Navigation />
      <div className="max-content">
        <div className="trade-inner-content">
          <h1>Handelsbetingelser</h1>
          <h5>Forretningsbetingelser</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
          <h5>Leveringstidspunkt og transport</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
          <h5>Risikoen for varerne</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
          <h5>Reklamantion</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
          <h5>Pris og betaling</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
          <h5>Fortrydelsesret</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <DiscountBanner />
      <CustomFooter />
    </>
  );
}
