import React from "react";
import { useState } from "react";
import "./Dropdown.scss";
import ArrowDownIcon from "../assets/icons/ArrowDownIcon";
import ArrowUpIcon from "../assets/icons/ArrowUpIcon";

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <div className="josefin18">{title}</div>
        {isOpen ? <ArrowUpIcon className="" /> : <ArrowDownIcon className="" />}
      </div>
      {isOpen && (
        <div className="accordion-content">
          <div className="roboto16">{content}</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
