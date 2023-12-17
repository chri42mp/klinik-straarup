import React from "react";
import Navigation from "../components/Navigation";
import ContactForm from "../components/ContactForm";
import CustomFooter from "../components/CustomFooter";
import DiscountBanner from "../components/DiscountBanner";
import "./Contact.scss";
import SingleBanner from "../components/SingleBanner";
import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Kontakt side</title>
        <meta name="description" content="På denne side kan man kontakte klinikken" />
      </Helmet>
      <Navigation />
      <section className="contact-s1">
        <h1>Kontakt os</h1>
        <p>Vi står altid klar til at vejlede dig. Udfyld vores kontaktformular, ring til os eller kom forbi klinikken.</p>
      </section>
      <ContactForm />
      <SingleBanner
        imageUrl="/site-images/Map.png"
        alt="Kort over lokation"
        title="Find os"
        subtitle="Klinik Straarup, Brøndbyøstervej 23 ST TH, 2600 Glostrup"
        text={
          <>
            <p>
              Klinikken er placeret centralt i Glostrup, tæt på offentlig transport og vej. <br /> <br />
              Kommer du i bil er der 3 timers gratis parkering lige foran indgangen til klinikken og kommer du med offentlig lægger Glostrup station kun 5 minutters gåtur væk. Der er også lokale busser der køre lige til døren.
            </p>
          </>
        }
        reverse={true}
      />
      <DiscountBanner />
      <CustomFooter />
    </>
  );
}
