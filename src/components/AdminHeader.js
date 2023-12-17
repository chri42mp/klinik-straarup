import React, { useState } from "react";
import "./AdminHeader.scss";
import { TertiaryButtonWithIcon } from "./Buttons";
import LongArrowRightIcon from "../assets/icons/LongArrowRightIcon";
import { auth, database } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function AdminHeader() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        database
          .collection("users")
          .doc(user.uid)
          .get()
          .then((data) => {
            setCurrentUser(data);
          });
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate("/login");
    });
  };

  return (
    <>
      <div className="admin-header">
        <TertiaryButtonWithIcon
          text="Log ud"
          icon={<LongArrowRightIcon fill="#fefcf9" />}
          onClick={handleLogout}
        />
        {currentUser && (
          <div>
            <p className="desktop-view">
              {currentUser?.data()?.firstname} {currentUser?.data()?.lastname}
            </p>
            <p className="mobile-view">
              {currentUser?.data()?.firstname.charAt(0)}
              {currentUser?.data()?.lastname.charAt(0)}
            </p>
          </div>
        )}

        <img
          className="admin-header-logo"
          src="/KS-logo-element_gold.png"
          alt="billede af en nål"
          width="30px"
        />
      </div>
    </>
  );
}
