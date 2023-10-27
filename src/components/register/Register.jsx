import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";

export default function Register({ signUp }) {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = {};

    if (name.trim() === "") {
      newError.name = " Name required";
    }

    if (userName.trim() === "") {
      newError.userName = "UserName required";
    }
    if (email.trim() === "") {
      newError.email = "Email Address  required";
    }
    if (mobileNumber.trim() === "") {
      newError.mobileNumber = "Email Address  required";
    }
    if (Object.keys(newError).length === 0) {
      signUp({ name, userName, email, mobileNumber });
      console.log(signUp({ name, userName, email, mobileNumber }));
      setName("");
      setUserName("");
      setEmail("");
      setMobileNumber("");
      setError({});
      navigate("/Genre");
    } else {
      setError(newError);
    }
  };

  return (
    <div className="register-page">
      <div className="image-left">
        <h1>Discover new things on Superapp</h1>
      </div>
      <div className="form-right">
        <div className="header-text">
          <div className="Sup-app">Super app</div>
          <p>Create your new account</p>
        </div>
        <form className="Register--form" onSubmit={handleSubmit}>
          <label className="NAME">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              name="Name"
              className="form-input"
            />
            {error.name && (
              <p className="info" aria-live="polite">
                {error.name}
              </p>
            )}
          </label>

          <label className="User-name">
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              placeholder="UserName"
              name="userName"
              className="form-input"
            />
            {error.userName && (
              <p className="info" aria-live="polite">
                {error.userName}
              </p>
            )}
          </label>
          <label className="email-address">
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
              name="emailAddress"
              className="form-input"
            />
            {error.email && (
              <p className="info" aria-live="polite">
                {error.email}
              </p>
            )}
          </label>
          <label className="phone-number">
            <input
              type="none"
              onChange={(e) => setMobileNumber(e.target.value)}
              value={mobileNumber}
              placeholder="Mobile"
              name="mobileNumber"
              className="form-input"
            />
            {error.mobileNumber && (
              <p className="info" aria-live="polite">
                {error.mobileNumber}
              </p>
            )}
          </label>
          <div className="chk-box">
            <input type="checkbox" required />
            <label className="label-text">
              Share my registration data with Superapp
            </label>
          </div>

          <button type="sign-up" className="btn-signup">
            SIGN UP
          </button>
        </form>
        <div className="terms--condition">
          <div className="t-c">
            By clicking on Sign up. you agree to Superapp{" "}
            <span className="green-bold">Terms and Conditions of Use </span>
          </div>
          <div className="t-c">
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp{" "}
            <span className="green-bold">Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
