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
        <div className="josefin18">{title}</div>
        {isOpen ? <MinusIcon className="" /> : <PlusIcon className="" />}
      </div>
      <div className="accordion-content">
        {isOpen && <div className="accordion-content">{content}</div>}
      </div>
    </div>
  );
};
export default Accordion;
