import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isSubmenuVisible, setSubmenuVisble] = useState(false);

  const handleTreatmentsMouseOver = () => {
    setSubmenuVisble(true);
  };

  const handleTreatmentsMouseOut = () => {
    setSubmenuVisble(false);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>{" "}
        </li>
        <li>
          <Link to="/about">Om</Link>
        </li>
        <li>
          <Link to="/webshop">Webshop</Link>
        </li>
        <li>
          <Link to="/prices">Priser</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li
          onMouseOver={handleTreatmentsMouseOver}
          onMouseOut={handleTreatmentsMouseOut}
        >
          Behandlinger
          {isSubmenuVisible && (
            <ul className="submenu">
              <li>
                <Link to="/fillers">Fillers</Link>
              </li>
              <li>
                <Link to="/botox">Botox</Link>
              </li>
              <li>
                <Link to="/sklerosering">Sklerosering</Link>
              </li>
              <li>
                <Link to="/laser">Laser</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
