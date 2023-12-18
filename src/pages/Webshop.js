import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import { database } from "../firebase";
import "./Webshop.scss";
import { PrimaryButton } from "../components/Buttons";
import TextboxBanner from "../components/TextboxBanners";
import LongArrowRightIcon from "../assets/icons/LongArrowRightIcon";
import { Link, useNavigate } from "react-router-dom";
import DiscountBanner from "../components/DiscountBanner";
import CustomFooter from "../components/CustomFooter";
import { Helmet } from "react-helmet";

export default function Webshop() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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

  const navigateToCategory = (category) => {
    navigate(`/webshopcategory/${category}`);
  };

  console.log(products);

  return (
    <>
      <Helmet>
        <title>Webshop forside</title>
        <meta
          name="description"
          content="Denne side er forsiden til webshoppen"
        />
      </Helmet>
      <Navigation />
      <section className="webshop-hero-section">
        <img
          className="webshop-hero-image"
          src="/site-images/products-on-disk.webp"
          alt="zo skin produkter på købsdisk"
          loading="lazy"
        />
        <div className="webshop-overlay-content">
          <h1>Webshop</h1>
          <h2>Velkommen til vores webshop</h2>
          <p className="display-none">
            På webshoppen kan du shoppe alle de skønne produkter fra ZO Skin
            Health som vi bruger i klinikken.
            <br /> Du kan med fordel kombinerer produkterne med vores
            behandlinger.
          </p>
          <div className="webshop-book-btn">
            <PrimaryButton
              text="Book gratis konsulation"
              link="https://klinikstraarup.app4.geckobooking.dk/site/booking.php?show=new_booking&icCode=0aad36965f0f2ec512837c390542ebc2b8929&bId=8929&PHPSESSID=3d232c3793cd5f580a36db375318b752&dTpl=1"
              target="_blank"
              rel="noreferrer"
            />
          </div>
        </div>
      </section>
      <section className="zo-approach">
        <div className="zo-approach-text-box">
          <h1>Zo Skin Health Approach</h1>
          <h2>Til dig der ønsker en mere afbalanceret hud</h2>
          <p>
            Hos ZO Skin Health tror vi på, at den ideelle måde at opnå og
            vedligeholde sund hud på er gennem kraften fra videnskaben.
            Inspireret af grundlæggeren, den verdenskendte dermatolog Dr. Zein
            Obagi, tilbyder vi omfattende løsninger til at vedligeholde huden på
            sit sundeste - uanset alder, etnicitet, hudtilstand eller hudtype.
          </p>
        </div>
        <div className="zo-approach-img-box">
          <img
            className="zo-approach-img"
            src="/site-images/zo-skin-sale.webp"
            alt="Kvinde der rækker en mand en pose med produkter"
            loading="lazy"
          />
        </div>
      </section>
      <div className="categories">
        <div className="flexing-categories">
          <Link
            to={"/webshopcategory/getting-skin-ready"}
            className="categories-boxes"
          >
            <h5>Getting skin ready</h5>
            <img
              src="/webshop-images/intl-sunscreen-primer.webp"
              alt="getting skin ready webshop kategori"
              loading="lazy"
            />
          </Link>
          <Link
            to={"/webshopcategory/prevent-+-correct"}
            className="categories-boxes"
          >
            <h5>Prevent + Correct</h5>
            <img
              src="/webshop-images/gbl-brightalive-hero.webp"
              alt="Prevent + correct webshop kategori billede"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="flexing-categories">
          <Link
            to={"/webshopcategory/hydration-+-calming"}
            className="categories-boxes"
          >
            <h5>Hydration + Calming</h5>
            <img
              loading="lazy"
              src="/webshop-images/intl-smart-tone.webp"
              alt="Hydration + calming webshop kategori billede"
            />
          </Link>
          <Link to={"/webshopcategory/protect"} className="categories-boxes">
            <h5>Protect</h5>
            <img
              loading="lazy"
              src="/webshop-images/intl-sunscreen-primer.webp"
              alt="protect webshop kategori billede"
            />
          </Link>
        </div>
        <div className="flexing-categories">
          <Link
            to={"/webshopcategory/supplementary"}
            className="categories-boxes"
          >
            <h5>Supplementary</h5>
            <img
              src="/webshop-images/gbl-intense-eye-crème-capdownright-hero.webp"
              alt="supplementary webshop kategori billede"
              loading="lazy"
            />
          </Link>
          <Link
            to={"/webshopcategory/programs-+-kits"}
            className="categories-boxes"
          >
            <h5>Programs + Kits</h5>
            <img
              src="/webshop-images/2018-kit-skin-normalizing.webp"
              alt="program + kits webshop kategori billede"
              loading="lazy"
            />
          </Link>
        </div>
      </div>
      <TextboxBanner
        title="Getting skin ready"
        text="En sund hud starter med det grundlæggende. Hjælp din hud tilbage til en sund, afbalancerede tilstand for en klar teint, uanset hudtype."
        imageUrl="/webshop-images/gbl-calming-toner.webp"
        alt="Calming toner"
        buttonText="Se vores udvalg"
        buttonIcon={<LongArrowRightIcon />}
        onButtonClick={() => navigateToCategory("getting-skin-ready")}
        reverse={true}
      />
      <TextboxBanner
        title="Prevent + correct"
        text="Et bredt udvalg af produkter, der hjælper med at rette hudproblemer fra acne og rosacea til hyperpigmentering og ældning, samtidig med at de forebygger fremtidig skade."
        imageUrl="/webshop-images/gbl-complexion-clearing-masque-original.webp"
        alt="Clearing mask"
        buttonText="Se vores udvalg"
        buttonIcon={<LongArrowRightIcon />}
        onButtonClick={() => navigateToCategory("prevent-+-correct")}
        reverse={false}
      />
      <TextboxBanner
        title="Hydration + calming"
        text="Fugtgivende og beroligende fordele til efterbehandling efter en procedure eller til tør og irriteret hud. Formlen fornyer hudens fornyelse, samtidig med at den forbedrer udseendet af fine linjer og rynker."
        imageUrl="/webshop-images/renewal-creme.webp"
        alt="Renewal cream"
        buttonText="Se vores udvalg"
        buttonIcon={<LongArrowRightIcon />}
        onButtonClick={() => navigateToCategory("hydration-+-calming")}
        reverse={true}
      />
      <TextboxBanner
        title="Protect"
        text="ZO solcremer tilbyder Triple Spectrum Protection for at beskytte mod skader fra solen og lys."
        imageUrl="/webshop-images/intl-sunscreen-primer-open.webp"
        alt="sunscreen"
        buttonText="Se vores udvalg"
        buttonIcon={<LongArrowRightIcon />}
        onButtonClick={() => navigateToCategory("protect")}
        reverse={false}
      />
      <TextboxBanner
        title="Supplementary"
        text="Inklusive produkter til øjnene, fugtighed + beroligelse og krop, er ZO®-supplerende produkter det perfekte supplement til enhver protokol."
        imageUrl="/webshop-images/gbl-intense-eye-crème-capdownright-hero.webp "
        alt="eye cream"
        buttonText="Se vores udvalg"
        buttonIcon={<LongArrowRightIcon />}
        onButtonClick={() => navigateToCategory("supplementary")}
        reverse={true}
      />
      <TextboxBanner
        title="Programs + kits"
        text="ZO® Skin Health tilbyder omfattende programmer, der præsenterer praktisk pakkede løsninger til anti-aging, opstramning af hudtonen, forebyggelse af acne og mere."
        imageUrl="/webshop-images/2018-kit-aggressive-anti-aging-program.webp"
        alt="anti aging program"
        buttonText="Se vores udvalg"
        buttonIcon={<LongArrowRightIcon />}
        onButtonClick={() => navigateToCategory("programs-+-kits")}
        reverse={false}
      />
      <DiscountBanner />
      <CustomFooter />
    </>
  );
}
