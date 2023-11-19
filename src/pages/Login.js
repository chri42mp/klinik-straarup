import React from "react";
import Navigation from "../components/Navigation";
import { auth } from "../firebase";

export default function Login() {
  function test() {
    auth
      .createUserWithEmailAndPassword("chri42mp@stud.kea.dk", "123456")
      .then((res) => {
        console.log(res);
        alert("medarbejder oprettet");
      });
  }
  return (
    <>
      <Navigation />
      <h1>Log ind</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <form></form>
      <button onClick={() => test()}>test</button>
    </>
  );
}
