import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import Navigation from "../components/Navigation";
import Dropdown from "../components/Dropdown";
import { TertiaryButtonWithIcon } from "../components/Buttons";
import LongArrowRightIcon from "../assets/icons/LongArrowRightIcon";

export default function UserDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(auth.currentUser.uid);
    if (auth.currentUser.uid === "uFq7ihsSmhPn3tc3NBsl72flECo1") {
      navigate("/addproduct");
    }
  }, [navigate]);

  return (
    <>
      <Navigation />
      <h1>Hej, {}</h1>
      <Dropdown title="Mine ordre" content={<p>jeg er en test</p>} />
      <Dropdown title="Mine tider" content={<p>jeg er en test</p>} />
      <Dropdown title="Mine favoritter" content={<p>jeg er en test</p>} />
      <Dropdown title="Mine oplysninger" content={<p>jeg er en test</p>} />
      <TertiaryButtonWithIcon text="Log ud" icon={<LongArrowRightIcon />} />
    </>
  );
}
