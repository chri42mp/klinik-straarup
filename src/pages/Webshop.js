import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import { database } from "../firebase";
import "./Webshop.scss";
import { PrimaryButton } from "../components/Buttons";
import TextboxBanner from "../components/TextboxBanners";
import LongArrowRightIcon from "../assets/icons/LongArrowRightIcon";
import { Link } from "react-router-dom";
import DiscountBanner from "../components/DiscountBanner";
import CustomFooter from "../components/CustomFooter";

export default function Webshop() {
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

  console.log(products);

  return (
    <>
      <Navigation />
      <section className="hero-section">
        <img
          className="hero-image"
          src="/webshop-images/2018-kit-skin-normalizing.webp"
          alt="normalizing skin kit"
          loading="lazy"
        />
        <div className="overlay-content">
          <h1>Velkommen til klinik Straarups webshop</h1>
          <h5>Alle produkter på webshoppen kan også købes i klinikken</h5>
          <PrimaryButton text="Book tid" />
        </div>
      </section>
      <section className="zo-approach">
        <div>
          <h1>Zo Skin Health Approach</h1>
          <h5>Til dig der ønsker en mere afbalanceret hud</h5>
          <p>
            Hos ZO Skin Health tror vi på, at den ideelle måde at opnå og
            vedligeholde sund hud på er gennem kraften fra videnskaben.
            Inspireret af grundlæggeren, den verdenskendte dermatolog Dr. Zein
            Obagi, tilbyder vi omfattende løsninger til at vedligeholde huden på
            sit sundeste - uanset alder, etnicitet, hudtilstand eller hudtype.
          </p>
        </div>
        <div>
          <img
            src="/webshop-images/recovery-renewal-hydrating-swatch-trio.webp"
            alt=""
            width={"600px"}
          />
        </div>
      </section>
      <div className="categories">
        <Link
          to={"/webshopcategory/getting-skin-ready"}
          className="categories-boxes"
        >
          <h5>Getting skin ready</h5>
          <img src="/webshop-images/intl-sunscreen-primer.webp" alt="" />
        </Link>
        <Link
          to={"/webshopcategory/prevent-+-correct"}
          className="categories-boxes"
        >
          <h5>Prevent + Correct</h5>
          <img src="/webshop-images/gbl-brightalive-hero.webp" alt="" />
        </Link>
        <Link
          to={"/webshopcategory/hydration-+-calming"}
          className="categories-boxes"
        >
          <h5>Hydration + Calming</h5>
          <img src="/webshop-images/intl-smart-tone.webp" alt="" />
        </Link>
        <Link to={"/webshopcategory/protect"} className="categories-boxes">
          <h5>Protect</h5>
          <img src="/webshop-images/intl-sunscreen-primer.webp" alt="" />
        </Link>
        <Link
          to={"/webshopcategory/supplementary"}
          className="categories-boxes"
        >
          <h5>Supplementary</h5>
          <img
            src="/webshop-images/gbl-intense-eye-crème-capdownright-hero.webp"
            alt=""
          />
        </Link>
        <Link
          to={"/webshopcategory/programs-+-kits"}
          className="categories-boxes"
        >
          <h5>Programs + Kits</h5>
          <img src="/webshop-images/2018-kit-skin-normalizing.webp" alt="" />
        </Link>
      </div>
      <TextboxBanner
        title="Getting skin ready"
        text="En sund hud starter med det grundlæggende. Hjælp din hud tilbage til en sund, afbalancerede tilstand for en klar teint, uanset hudtype."
        imageUrl="/webshop-images/gbl-calming-toner.webp"
        alt="Calming toner"
        buttonText="Se vores udvalg"
        buttonIcon={<LongArrowRightIcon />}
        onButtonClick={() => console.log("Button clicked!")}
        reverse={true}
      />
      <TextboxBanner
        title="Prevent + correct"
        text="Et bredt udvalg af produkter, der hjælper med at rette hudproblemer fra acne og rosacea til hyperpigmentering og ældning, samtidig med at de forebygger fremtidig skade."
        imageUrl="/webshop-images/gbl-complexion-clearing-masque-original.webp"
        alt="Clearing mask"
        buttonText="Se vores udvalg"
        buttonIcon={<LongArrowRightIcon />}
        onButtonClick={() => console.log("Button clicked!")}
        reverse={false}
      />
      <TextboxBanner
        title="Hydration + calming"
        text="Fugtgivende og beroligende fordele til efterbehandling efter en procedure eller til tør og irriteret hud. Formlen fornyer hudens fornyelse, samtidig med at den forbedrer udseendet af fine linjer og rynker."
        imageUrl="/webshop-images/renewal-creme.webp"
        alt="Renewal cream"
        buttonText="Se vores udvalg"
        buttonIcon={<LongArrowRightIcon />}
        onButtonClick={() => console.log("Button clicked!")}
        reverse={true}
      />
      <TextboxBanner
        title="Protect"
        text="ZO solcremer tilbyder Triple Spectrum Protection for at beskytte mod skader fra solen og lys."
        imageUrl="/webshop-images/intl-sunscreen-primer-open.webp"
        alt="sunscreen"
        buttonText="Se vores udvalg"
        buttonIcon={<LongArrowRightIcon />}
        onButtonClick={() => console.log("Button clicked!")}
        reverse={false}
      />
      <TextboxBanner
        title="Supplementary"
        text="Inklusive produkter til øjnene, fugtighed + beroligelse og krop, er ZO®-supplerende produkter det perfekte supplement til enhver protokol."
        imageUrl="/webshop-images/gbl-intense-eye-crème-capdownright-hero.webp "
        alt="eye cream"
        buttonText="Se vores udvalg"
        buttonIcon={<LongArrowRightIcon />}
        onButtonClick={() => console.log("Button clicked!")}
        reverse={true}
      />
      <TextboxBanner
        title="Programs + kits"
        text="ZO® Skin Health tilbyder omfattende programmer, der præsenterer praktisk pakkede løsninger til anti-aging, opstramning af hudtonen, forebyggelse af acne og mere."
        imageUrl="/webshop-images/2018-kit-aggressive-anti-aging-program.webp"
        alt="anti aging program"
        buttonText="Se vores udvalg"
        buttonIcon={<LongArrowRightIcon />}
        onButtonClick={() => console.log("Button clicked!")}
        reverse={false}
      />
      <DiscountBanner />
      <CustomFooter />
    </>
  );
}
