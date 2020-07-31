import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/logo.png";
import Woman from "./assets/super_woman copy.svg";

function App({ history }) {
  return (
    <React.Fragment>
      <nav class="nav">
        <img
          id="logo"
          src={Logo}
          alt="logo for website with letters D E, short for Debbie"
        />
        <h1 id="first-heading">Debbie</h1>
      </nav>

      <div class="signup-button">
        <Link to="/register" className="landing-button">
          <span className="ml-3">Sign Up Now</span>
        </Link>
      </div>

      <div class="woman-container">
        <img src={Woman} class="super-woman" alt="super woman" />
      </div>
      <p class="header-section_about">
        Managing pain can be hard. Debbie is here to help you!
      </p>
      <p class="header-section_about">
        Available on Google Assistant and Alexa.
      </p>
      <p class="header-section_about">"Hey Google, get help from Debbie"</p>

      <div class="signin-button">
        <Link to="/login" className="landing-button">
          <span className="ml-3">Sign In Now</span>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default App;
