import React, { useState } from "react";
import ToggleButton from "./Togglebutton";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButtonWithIcon,
} from "./Buttons";
import LongArrowRightIcon from "../assets/icons/LongArrowRightIcon";
import "./CookieBox.scss";

export default function CookieBox({ onAccept }) {
  const [cookieTypes, setCookieTypes] = useState({
    necessary: false,
    statistics: false,
    personal: false,
    marketing: false,
  });

  const atLeastOneToggleSelected =
    cookieTypes.necessary ||
    cookieTypes.statistics ||
    cookieTypes.personal ||
    cookieTypes.marketing;

  const handleToggle = (type) => {
    setCookieTypes((prevTypes) => ({
      ...prevTypes,
      [type]: !prevTypes[type],
    }));
  };

  const handleToggleAll = () => {
    const allToggled = !atLeastOneToggleSelected;
    const newCookieTypes = {
      necessary: allToggled,
      statistics: allToggled,
      personal: allToggled,
      marketing: allToggled,
    };

    setCookieTypes(newCookieTypes);
    onAccept(newCookieTypes, true);
  };

  const handleAccept = () => {
    console.log("Accepting", cookieTypes);

    if (atLeastOneToggleSelected) {
      onAccept(cookieTypes, true);
    } else {
      alert("Mindst én type cookies skal vælges");
    }
  };

  return (
    <div
      className={`cookie-container ${
        atLeastOneToggleSelected ? "manually-toggled" : ""
      }`}
    >
      <div className="cookie-inner-container">
        <div className="cookie-text">
          <h1>Cookies</h1>
          <h5>Denne hjemmeside bruger cookies</h5>
          <p>
            Cookies tjener ikke bare ét, men flere formål. Vi bruger cookies for
            at sikre, at hjemmesidens funktioner virker, for at optimere design
            og kvalitet af hjemmesiden og for at give brugerne målrettet og
            relevant indhold.
          </p>
        </div>
        <div className="cookie-types">
          <div className="outer-toggle-container">
            <div className="toggle-container">
              <p>Nødvendige</p>
              <ToggleButton
                onClick={() => handleToggle("necessary")}
                toggled={cookieTypes.necessary}
              />
            </div>
            <div className="toggle-container">
              <p>Statiske</p>
              <ToggleButton
                onClick={() => handleToggle("statistics")}
                toggled={cookieTypes.statistics}
              />
            </div>
            <div className="toggle-container">
              <p>Personlige</p>
              <ToggleButton
                onClick={() => handleToggle("personal")}
                toggled={cookieTypes.personal}
              />
            </div>
            <div className="toggle-container">
              <p>Markedsføring</p>
              <ToggleButton
                onClick={() => handleToggle("marketing")}
                toggled={cookieTypes.marketing}
              />
            </div>
          </div>
          <div className="accept-btns">
            <div className="prim-sec">
              <div>
                <SecondaryButton
                  text="Tillad valgte"
                  onClick={handleAccept}
                  disabled={!atLeastOneToggleSelected}
                />
              </div>
              <div>
                <PrimaryButton text="Tillad alle" onClick={handleToggleAll} />
              </div>
            </div>
            <div className="ter">
              <TertiaryButtonWithIcon
                text="Vis detaljer"
                icon={<LongArrowRightIcon />}
                link="/cookiespolice"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
