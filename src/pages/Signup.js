import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.scss";
import { SecondaryButton } from "../components/Buttons";
import CheckIcon from "../assets/icons/CheckIcon";
import ErrorIcon from "../assets/icons/ErrorIcon";
import CustomFooter from "../components/CustomFooter";
import { Helmet } from "react-helmet";

export default function Signup() {
  const [isChecked, setIsChecked] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    };

    if (!isChecked) {
      return setError("Du skal erklærer dig enig i vores privatslivspolitik");
    }

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("password do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value, data);
      navigate("/userdashboard");
    } catch {
      setError("failed to create an account");
    }
    setLoading(false);
  }

  return (
    <>
      <Helmet>
        <title>Opret bruger</title>
        <meta name="description" content="Denne side bruges til at oprette en bruger" />
      </Helmet>
      <Navigation />
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Opret konto</h1>
        <p className="signup-info">Ved at oprette en konto hos os kan du blandt andet benytte dig af vores loyalitetsrabat, se dine tider og samle dine favorit produkter.</p>
        <div className="user-name-group">
          <div className="form-group">
            <label htmlFor="firstname">Navn</label>
            <input type="text" id="firstname" required />
            {error && (
              <div className="error-message">
                <ErrorIcon />
                {error}
              </div>
            )}
            <span className="roboto12">*Skal udfyldes</span>
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Efternavn</label>
            <input type="text" id="lastname" required />
            {error && (
              <div className="error-message">
                <ErrorIcon />
                {error}
              </div>
            )}
            <span className="roboto12">*Skal udfyldes</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" ref={emailRef} required />
          {error && (
            <div className="error-message">
              <ErrorIcon />
              {error}
            </div>
          )}
          <span className="roboto12">*Skal udfyldes</span>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefon nr.</label>
          <input type="tel" id="phone" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Kodeord:</label>
          <input type="password" id="password" ref={passwordRef} required />
          {error && (
            <div className="error-message">
              <ErrorIcon />
              {error}
            </div>
          )}
          <span className="roboto12">*Skal udfyldes</span>
        </div>
        <div className="form-group">
          <label htmlFor="username">Gentag kodeord:</label>
          <input type="password" id="password-confirm" ref={passwordConfirmRef} />
          {error && (
            <div className="error-message">
              <ErrorIcon />
              {error}
            </div>
          )}
          <span className="roboto12">*Skal udfyldes</span>
        </div>
        <div className="privacy-policy-group">
          <div id="privacypolicy" className={`checkbox ${isChecked ? "checked" : ""}`} onClick={handleCheckboxChange}>
            {isChecked && <CheckIcon />}
          </div>
          <label htmlFor="privacypolicy">
            Ved at oprette en konto, erklærer du dig enig i vores <Link to="/privacy-policy">privatlivspolitik</Link>.
          </label>
        </div>
        <div className="btn">
          <SecondaryButton disabled={loading} type="submit" text="Opret konto" className="btn-secondary" />
        </div>
        <div className="already-an-account">
          <p>Har du allerede en konto?</p>
          <Link to="/login">Log ind</Link>
        </div>
      </form>
      <CustomFooter />
    </>
  );
}
