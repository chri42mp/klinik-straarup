import React from "react";

const MenuIcon = ({ onClick }) => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path d="M5 9H45" stroke="#161616" strokeWidth="3" strokeLinecap="round" />
    <path d="M5 25H45" stroke="#161616" strokeWidth="3" strokeLinecap="round" />
    <path d="M5 41H45" stroke="#161616" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export default MenuIcon;
