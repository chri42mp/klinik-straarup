import React from "react";
import { Link } from "react-router-dom";
import "./CustomFooter.scss";
import FacebookIcon from "../assets/icons/FacebookIcon";
import InstagramIcon from "../assets/icons/InstagramIcon";
import TrustpilotStar from "../assets/icons/TrustpilotStar";

const CustomFooter = () => {
  return (
    <footer className="custom-footer">
      <div className="top-div-footer">
        <div
          className="trustpilot"
          data-locale="da-DK"
          data-template-id="56278e9abfbbba0bdcd568bc"
          data-businessunit-id="650d67597a3cc2a49edb1e74"
          data-style-height="52px"
          data-style-width="100%"
        >
          <Link to="https://dk.trustpilot.com/review/klinikstraarup.dk">
            <h4>Trustpilot</h4>
          </Link>
          <div className="trustpilot-star">
            <TrustpilotStar />
            <TrustpilotStar />
            <TrustpilotStar />
            <TrustpilotStar />
            <TrustpilotStar />
          </div>
          <p>Rated 4.0/5.0</p>
        </div>
        <div className="footer-contact">
          <h4>Kontakt</h4>
          <h5>E-mail</h5>

          <Link to="mailto:info@klinikstraarup.dk">info@klinikstraarup.dk</Link>
          <h5>Telefon nr.</h5>
          <Link to="tel:+4540562064">+4540562064</Link>
          <h5>SoMe</h5>
          <div className="some-icons">
            <Link to="https://www.instagram.com/klinikstraarup/">
              <InstagramIcon fill="#fefcf9" />
            </Link>
            <Link to="https://www.facebook.com/klinikstraarup">
              <FacebookIcon fill="#fefcf9" />
            </Link>
          </div>
        </div>
        <div className="footer-address">
          <h4>Adresse</h4>
          <Link to="https://www.google.com/maps/search/?api=1&query=%22Klinik%20Straarup%2C%20Br%C3%B8ndbyvestervej%2023%20st%20th%20%2C%202600%20Glostrup%2C%20Denmark%22">
            <p>Klinik Straarup</p>
            <p>Brøndbyvestervej 23 st th</p>
            <p>2600 Glostrup </p>
            <p>Denmark</p>
          </Link>
          <p>CVR: 44240793</p>
        </div>
      </div>
      <div className="bottom-div-footer">
        <div className="bottom-div-links">
          <p>Cookiepolitik</p>
          <p>Handelsbetingelser</p>
          <p>Sitemap</p>
        </div>
        <div className="footer-logo">
          <Link to="/">
            <span className="visually-hidden">Gå til startsiden</span>
            <img
              className="desktop-logo"
              src="/KS-logo_gold.png"
              alt="klinik straarup logo"
            />
            <img
              className="mobile-logo"
              src="/KS-logo-element_gold.png"
              alt="klinik straarup logo"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
