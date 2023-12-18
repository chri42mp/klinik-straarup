import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ContactForm from "../components/ContactForm";
import CustomFooter from "../components/CustomFooter";
import DiscountBanner from "../components/DiscountBanner";
import "./Contact.scss";

import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Kontakt side</title>
        <meta name="description" content="På denne side kan man kontakte klinikken" />
      </Helmet>
      <Navigation />
      <section className="max-content">
        <div className="contact-s1">
          <h1>Kontakt os</h1>
          <p>Vi står altid klar til at vejlede dig. Udfyld vores kontaktformular, ring til os eller kom forbi klinikken.</p>
        </div>
      </section>
      <ContactForm />

      <section className="max-content">
        <div className="contact-s2-content">
          <div className="contact-s2-img">
            <Link to="https://www.google.com/maps/search/?api=1&query=%22Klinik%20Straarup%2C%20Br%C3%B8ndbyvestervej%2023%20st%20th%20%2C%202600%20Glostrup%2C%20Denmark%22">
              <img src="/site-images/Map.png" alt="Kort over lokation" loading="lazy" />
            </Link>
          </div>
          <div className="contact-s2-text">
            <h1>Find os</h1>
            <h5>Klinik Straarup, Brøndbyøstervej 23 ST TH, 2600 Glostrup</h5>
            <p>Klinikken er placeret centralt i Glostrup, tæt på offentlig transport og vej.</p>
            <p>Kommer du i bil er der 3 timers gratis parkering lige foran indgangen til klinikken og kommer du med offentlig lægger Glostrup station kun 5 minutters gåtur væk. Der er også lokale busser der køre lige til døren.</p>
          </div>
        </div>
      </section>
      <DiscountBanner />
      <CustomFooter />
    </>
  );
}
