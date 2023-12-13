import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, database } from "../firebase";
import Navigation from "../components/Navigation";
import Dropdown from "../components/Dropdown";
import { TertiaryButtonWithIcon } from "../components/Buttons";
import LongArrowRightIcon from "../assets/icons/LongArrowRightIcon";
import CustomFooter from "../components/CustomFooter";

export default function UserDashboard() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    console.log(auth.currentUser.uid);
    if (auth.currentUser.uid === "uFq7ihsSmhPn3tc3NBsl72flECo1") {
      navigate("/addproduct");
    }
    if (auth.currentUser.uid) {
      database
        .collection("users")
        .doc(auth.currentUser.uid)
        .get()
        .then((data) => {
          setCurrentUser(data);
        });
    }
  }, [navigate]);

  console.log(currentUser?.data());
  return (
    <>
      <Navigation />
      <h1>
        Hej{" "}
        {currentUser?.data() &&
          `${currentUser?.data()?.firstname} ${currentUser?.data()?.lastname}`}
      </h1>
      <Dropdown title="Mine ordre" content={<p>jeg er en test</p>} />
      <Dropdown title="Mine tider" content={<p>jeg er en test</p>} />
      <Dropdown title="Mine favoritter" content={<p>jeg er en test</p>} />
      <Dropdown title="Mine oplysninger" content={<p>jeg er en test</p>} />
      <TertiaryButtonWithIcon text="Log ud" icon={<LongArrowRightIcon />} />
      <CustomFooter />
    </>
  );
}
