import React from "react";
import { PrimaryButton } from "../components/Buttons";

export default function NotFound() {
  return (
    <>
      <h1>404 Error</h1>
      <h4>Page not found</h4>
      <p>
        Vi kan desværre ikke finde den side du leder efter! Du kan prøve at gå
        tilbage eller trykke på knappen for at komme til forsiden Du kan prøve
        at gå tilbage eller trykke på knappen for at komme til forsiden
      </p>
      <PrimaryButton text="Forside" link={"/"} />
    </>
  );
}
