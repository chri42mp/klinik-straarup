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

  const [allTogglesManuallyToggled, setAllTogglesManuallyToggled] =
    useState(false);

  const allTogglesSelected =
    cookieTypes.necessary &&
    cookieTypes.statistics &&
    cookieTypes.personal &&
    cookieTypes.marketing;

  const handleToggle = (type) => {
    setCookieTypes((prevTypes) => ({
      ...prevTypes,
      [type]: !prevTypes[type],
    }));
    setAllTogglesManuallyToggled(true);
  };

  const handleAccept = () => {
    console.log("Accepting", cookieTypes);

    if (allTogglesSelected && allTogglesManuallyToggled) {
      onAccept(cookieTypes, true);
    } else {
      // Display an error message or prevent further action
      alert("Alle typer cookies skal godkendes");
    }
  };

  return (
    <div
      className={`cookie-container ${allTogglesSelected ? "hidden" : ""} ${
        allTogglesManuallyToggled ? "manually-toggled" : ""
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
              <ToggleButton onClick={() => handleToggle("necessary")} />{" "}
            </div>
            <div className="toggle-container">
              <p>Statiske</p>
              <ToggleButton onClick={() => handleToggle("statistics")} />{" "}
            </div>
            <div className="toggle-container">
              <p>Personlige</p>
              <ToggleButton onClick={() => handleToggle("personal")} />{" "}
            </div>
            <div className="toggle-container">
              <p>Markedsføring</p>
              <ToggleButton onClick={() => handleToggle("marketing")} />{" "}
            </div>
          </div>
          <div className="accept-btns">
            <div className="prim-sec">
              <SecondaryButton
                text="Tillad valgte"
                onClick={() => {
                  console.log("SecondaryButton clicked");
                }}
                disabled={true}
              />
              <PrimaryButton text="Tillad alle" onClick={handleAccept} />
            </div>
            <div className="ter">
              <TertiaryButtonWithIcon
                text="Vis detaljer"
                icon={<LongArrowRightIcon />}
                link="/tradeconditions"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
