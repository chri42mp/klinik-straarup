import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { SecondaryButton } from "../components/Buttons";
import DiscountBanner from "../components/DiscountBanner";
import CustomFooter from "../components/CustomFooter";
import Loader from "../components/Loader";
import "./Confirmation.scss";

export default function Confirmation() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = 2000000;

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Navigation />
      {loading ? (
        <div className="delay">
          <Loader />
          <p>Du sendes nu videre til sikker betaling</p>
        </div>
      ) : (
        <>
          <h1>Tak for din ordre!</h1>
          <h5>Vi glæder os til at sende den!</h5>
          <p>
            Vi har sendt dig en bekræftelse på mail og sender ordren afsted
            hurtigst muligt. Tak fordi du handlede hos os!{" "}
          </p>
          <p>Har du set at vi også tilbyder skønhedsbehandlinger?</p>
          <SecondaryButton text="Besøg klinikken" />
          <DiscountBanner />
        </>
      )}
      <CustomFooter />
    </>
  );
}
