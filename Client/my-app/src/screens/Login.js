import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Woman from "../assets/super_woman copy.svg";
import Like from "../assets/like.svg";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import axios from "axios";
import "react-notifications/lib/notifications.css";

import { authenticate, isAuth } from "../helpers/auth";
import { Link, Redirect } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const Login = ({ history }) => {
  const [formData, setFormData] = useState({
    email: "",
    password1: "",
    textChange: "Sign In",
  });
  const { email, password1, textChange } = formData;
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const sendGoogleToken = (tokenId) => {
    axios
      .post(`http://localhost:5000/api/googlelogin`, {
        idToken: tokenId,
      })
      .then((res) => {
        console.log(res.data);
        informParent(res);
      })
      .catch((error) => {
        console.log("GOOGLE SIGNIN ERROR", error.response);
      });
  };
  const informParent = (response) => {
    authenticate(response, () => {
      isAuth();

      history.push("/report");
    });
  };

  const sendFacebookToken = (userID, accessToken) => {
    axios
      .post(`http://localhost:5000/api/facebooklogin`, {
        userID,
        accessToken,
      })
      .then((res) => {
        console.log(res.data);
        informParent(res);
      })
      .catch((error) => {
        console.log("GOOGLE SIGNIN ERROR", error.response);
      });
  };
  const responseGoogle = (response) => {
    console.log(response);
    sendGoogleToken(response.tokenId);
  };

  const responseFacebook = (response) => {
    console.log(response);
    sendFacebookToken(response.userID, response.accessToken);
  };

  const handleSubmit = (e) => {
    console.log("http://localhost:5000/api");
    e.preventDefault();
    if (email && password1) {
      setFormData({ ...formData, textChange: "Submitting" });
      axios
        .post(`http://localhost:5000/api/login`, {
          email,
          password: password1,
        })
        .then((res) => {
          authenticate(res, () => {
            setFormData({
              ...formData,
              email: "",
              password1: "",
              textChange: "Submitted",
            });
          });
        })
        .catch((err) => {
          setFormData({
            ...formData,
            email: "",
            password1: "",
            textChange: "Sign In",
          });
          console.log(err.response);
          NotificationManager.error(err.response.data.errors);
        });
    } else {
      NotificationManager.error("Please fill all fields");
    }
  };
  return (
    <React.Fragment>
      <div>
        {isAuth() ? <Redirect to="/report" /> : null}
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

        <GoogleLogin
          clientId="771050291753-sic3fmdfr5i7trak2ds02mmjqv77vo10.apps.googleusercontent.com"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          render={(renderProps) => (
            <div class="google-icons">
              <i class="fa fa-google" onClick={renderProps.onClick}></i>
            </div>
          )}
        ></GoogleLogin>

        <FacebookLogin
          appId="709826499794455"
          autoLoad={false}
          callback={responseFacebook}
          render={(renderProps) => (
            <div class="social-icons">
              <i class="fa fa-facebook" onClick={renderProps.onClick}></i>
            </div>
          )}
        />

        <form onSubmit={handleSubmit}>
          <div class="inputBox">
            <label for="email">Email</label>
            <input
              type="text"
              name=""
              id="email"
              className="input_email"
              placeholder="Enter Your Email"
              onChange={handleChange("email")}
              value={email}
              autoFocus
            />

            <label for="password">Password</label>
            <input
              type="password"
              name=""
              id="password"
              className="input_password"
              placeholder="Enter Your Password"
              onChange={handleChange("password1")}
              value={password1}
            />

            <button type="submit" class="button">
              <span className="ml-3">Sign In</span>
            </button>
          </div>

          <div class="forgot-password-link">
            <h1 class="text-or">OR</h1>
            <Link to="/users/password/forget">Forget password?</Link>
          </div>
        </form>
        <footer id="footer">
          Built with <img src={Like} alt="heart icon" class="hearticonfooter" />
          by the coding cohort
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Login;
