import React from "react";
import { useState } from "react";
import MinusIcon from "../assets/icons/MinusIcon";
import PlusIcon from "../assets/icons/PlusIcon";
import "./Accordion.scss";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <p>{title}</p>
        {isOpen ? <MinusIcon className="" /> : <PlusIcon className="" />}
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};
export default Accordion;
