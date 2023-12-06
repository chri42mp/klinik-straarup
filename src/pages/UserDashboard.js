import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function UserDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(auth.currentUser.uid);
    if (auth.currentUser.uid === "uFq7ihsSmhPn3tc3NBsl72flECo1") {
      navigate("/addproduct");
    }
  }, [navigate]);

  return <div>UserDashboard</div>;
}
