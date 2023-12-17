import React from "react";
import Navigation from "../components/Navigation";
import { Helmet } from "react-helmet";

export default function TradeConditions() {
  return (
    <>
      <Helmet>
        <title>Handelsbetingelser</title>
        <meta name="description" content="Denne side beskriver handelsbetingelserne for webshoppen" />
      </Helmet>
      <Navigation />
      <h1>Trade Conditions</h1>
    </>
  );
}
