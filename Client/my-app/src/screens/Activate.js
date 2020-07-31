import React, { useState, useEffect } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

import axios from "axios";
import jwt from "jsonwebtoken";
import Logo from "../assets/logo.png";
import Woman from "../assets/super_woman copy.svg";
import { isAuth } from "../helpers/auth";
import { Link, Redirect } from "react-router-dom";

const Activate = ({ match }) => {
  const [formData, setFormData] = useState({
    name: "",
    token: "",
    show: true,
  });

  useEffect(() => {
    let token = match.params.token;
    let { name } = jwt.decode(token);

    if (token) {
      setFormData({ ...formData, name, token });
    }

    console.log(token, name);
  }, [match.params]);
  const { token } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/activation", {
        token,
      })
      .then((res) => {
        setFormData({
          ...formData,
          show: false,
        });

        NotificationManager.success(res.data.message);
      })
      .catch((err) => {
        NotificationManager.error(err.response.data.errors);
      });
  };

  return (
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

      <form
        className="w-full flex-1 mt-8 text-indigo-500"
        onSubmit={handleSubmit}
      >
        <div class="activate-button">
          <button type="submit" class="button">
            <i className="fas fa-user-plus fa 1x w-6  -ml-2" />
            <span className="ml-3">Activate your Account</span>
          </button>
          <h1 class="activation-header">
            After Account Activation You can Sign In
          </h1>
          <div class="activation-signin-button">
            <Link to="/login">
              <i className="fas fa-user-plus fa 1x w-6  -ml-2" />
              <span className="ml-3">Sign In</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Activate;
