import React, { useState } from "react";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import { isAuth } from "../helpers/auth";
import { Redirect } from "react-router-dom";
import Logo from "../assets/logo.png";
import Woman from "../assets/super_woman copy.svg";
import Like from "../assets/like.svg";
import "../css/signup.css";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
    textChange: "Sign Up",
  });

  const { name, email, password1, password2, textChange } = formData;
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password1) {
      if (password1 === password2) {
        setFormData({ ...formData, textChange: "Submitting" });
        axios
          .post(`http://localhost:5000/api/register`, {
            name,
            email,
            password: password1,
          })
          .then((res) => {
            setFormData({
              ...formData,
              name: "",
              email: "",
              password1: "",
              password2: "",
              textChange: "Submitted",
            });

            // toast.success(res.data.message);
            NotificationManager.success(res.data.message);
          })
          .catch((err) => {
            setFormData({
              ...formData,
              name: "",
              email: "",
              password1: "",
              password2: "",
              textChange: "Sign Up",
            });

            console.log(err.response);

            NotificationManager.error(err.response.data.errors);
          });
      } else {
        NotificationManager.error("Passwords don't matches");
      }
    } else {
      NotificationManager.warning("Please fill all the fields");
    }
  };

  return (
    <React.Fragment>
      <div>
        {isAuth() ? <Redirect to="/" /> : null}
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

        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <label for="name">Name</label>
            <input
              type="text"
              name=""
              id="name"
              placeholder="Enter Your Name"
              className="input_name"
              onChange={handleChange("name")}
              value={name}
              autoFocus
            />
            <label for="email">Email</label>
            <input
              type="text"
              name=""
              id="email"
              placeholder="Enter Your Email"
              className="input_name"
              onChange={handleChange("email")}
              value={email}
            />
            <label for="password">Password</label>
            <input
              type="password"
              name=""
              id="password"
              placeholder="Enter Your Password"
              className="input_name"
              onChange={handleChange("password1")}
              value={password1}
            />
            <label for="password">Confirm Password</label>
            <input
              type="password"
              name=""
              id="password"
              className="input_password"
              placeholder="Enter Your Password"
              onChange={handleChange("password2")}
              value={password2}
            />
            <button type="submit" className="button">
              <i className="fas fa-user-plus fa 1x w-6  -ml-2" />
              <span className="ml-3">{textChange}</span>
            </button>
          </div>
        </form>
      </div>
      <div class="heart">
        <img src={Like} alt="heart icon" id="hearticon" />
      </div>
      <footer id="footer">
        Built with <img src={Like} alt="heart icon" class="hearticonfooter" />
        by the coding cohort
      </footer>
    </React.Fragment>
  );
};

export default Register;
