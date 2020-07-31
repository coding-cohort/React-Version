import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Woman from "../assets/super_woman copy.svg";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import axios from "axios";

const ForgetPassword = ({ history }) => {
  const [formData, setFormData] = useState({
    email: "",
    textChange: "Submit",
  });
  const { email, textChange } = formData;
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setFormData({ ...formData, textChange: "Submitting" });
      axios
        .put(`http://localhost:5000/api/forgotpassword`, {
          email,
        })
        .then((res) => {
          setFormData({
            ...formData,
            email: "",
          });
          NotificationManager.success(`Please check your email`);
        })
        .catch((err) => {
          console.log(err.response);
          NotificationManager.error(err.response.data.error);
        });
    } else {
      NotificationManager.error("Please fill all fields");
    }
  };
  return (
    <div>
      <NotificationContainer />
      <nav className="nav">
        <img src={Logo} id="logo" alt="Debbie logo" />
        <h1 id="first-heading">Debbie</h1>
      </nav>
      <div className="second-heading">
        <h2>
          To get help from Debbie <br /> Sign up now !
        </h2>
      </div>
      <div class="image-container">
        <img src={Woman} class="woman" alt="super woman" />
      </div>

      <form className="mx-auto max-w-xs relative " onSubmit={handleSubmit}>
        <div class="inputBox">
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange("email")}
            value={email}
          />
        </div>
        <div class="forgot-password-button">
          <button type="submit" class="button">
            <i className="fas fa-sign-in-alt  w-6  -ml-2" />
            <span className="ml-3">Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
