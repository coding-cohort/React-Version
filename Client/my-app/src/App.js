import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/logo.png";
import Woman from "./assets/super_woman copy.svg";
import Success from "./assets/success.svg";
import Like from "./assets/like.svg";
import Bell from "./assets/bell.svg";
import Exercise from "./assets/exercise.svg";
import Chat from "./assets/chat.svg";

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
      <p class="header-section">
        Debbie had a successful career in IT for many years before her chronic
        arthritis became too much.
        <br />
        Having struggled to find any specialist who could help, a friend came
        across a cognitive pain management course and paper toolset, and the
        <br />
        dea for a pain management app was born.
      </p>

      <section id="info">
        <h3 class="info-header">Build your confidence day by day</h3>
        <section class="links__icons">
          <img src={Success} alt="check mark icon" class="link__icon" />
          <img src={Like} alt="red heart icon" class="link__icon" />
          <img src={Bell} alt="bell icon" class="link__icon" />
          <img src={Exercise} alt="a people exercising" class="link__icon" />
        </section>
        <section class="about">
          <div class="about__chat">
            <img src={Chat} class="chat-icon" alt="Chat Icon" />
            <span>
              <h3 class="about__header">
                "Talk to Debbie" with Google Assistant or Alexa
              </h3>
              <p>
                Its as simple as that. You can then plan your goals, record your
                pain level, work through exercises or set reminders.
              </p>
            </span>
          </div>
          <div class="about__reminder">
            <span>
              <h3 class="about__header">Set voice activated reminders</h3>
              <p>
                You can set them each day or each week at a time that suits you.
              </p>
            </span>
            <img src={Bell} class="bell-icon" alt="Bell Icon" />
          </div>
        </section>

        <div class="signup-button">
          <Link to="/register" className="landing-button">
            <span className="ml-3">Sign Up Now</span>
          </Link>
        </div>
      </section>
      <footer id="footer">
        Built with <img src={Like} alt="heart icon" class="hearticonfooter" />
        by the coding cohort
      </footer>
    </React.Fragment>
  );
}

export default App;
