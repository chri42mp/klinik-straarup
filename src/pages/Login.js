import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { SecondaryButton } from "../components/Buttons";
import "./Login.scss";
import ErrorIcon from "../assets/icons/ErrorIcon";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/userdashboard");
    } catch {
      setError("failed to log in");
    }
    setLoading(false);
  }

  return (
    <>
      <Navigation />
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Log ind</h1>
        <div className={`form-group ${error ? "error" : ""}`}>
          {" "}
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef} required />
          {error && (
            <div className="error-message">
              <ErrorIcon />
              {error}
            </div>
          )}
        </div>
        <div className={`form-group ${error ? "error" : ""}`}>
          {" "}
          <label htmlFor="password">Kodeord</label>
          <input type="password" id="password" ref={passwordRef} required />
          {error && (
            <div className="error-message">
              <ErrorIcon />
              {error}
            </div>
          )}
        </div>
        <div className="btn">
          <SecondaryButton
            disabled={loading}
            type="submit"
            text="Log ind"
            className="btn-secondary"
          />
        </div>
        <div className="no-account">
          <p>Har du ikke en konto?</p>
          <Link to="/signup">Opret bruger</Link>
        </div>
      </form>
    </>
  );
}
