import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Woman from "../assets/super_woman copy.svg";
import { ToastContainer } from "react-toastify";
import Like from "../assets/like.svg";

import { Bar } from "react-chartjs-2";
import { signout } from "../helpers/auth";

function Report() {
  const state = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Pain level",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,

        data: [65, 59, 80, 81, 56, 65],
      },
    ],
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <nav class="top-icons">
        <img
          id="logoimg"
          src={Logo}
          alt="logo for website with letters D E, short for Debbie"
        />
        <h1 id="heading">Debbie</h1>
        <button
          onClick={() => {
            signout(() => {
              history.navigate("/");
              // toast.success("Signout Successfully");
            });
          }}
        >
          Logout
        </button>
      </nav>
      <div class="img-container">
        <img id="superwomanimg" src={Woman} alt="super woman image" />
      </div>
      <div class="main-container">
        <div>
          <p class="hero-text">
            Review your progress - select time period below
          </p>
          <div class="hand-emoji">
            <br />
            <i> &#x1F447;</i>
          </div>
        </div>
      </div>

      <div id="myChart">
        <Bar
          data={state}
          options={{
            title: {
              display: true,
              text: "Average pain record",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
      <div class="selectDropDown">
        <select>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
          <option>Daily</option>
        </select>
      </div>
      <br />
      <div class="update">
        <Link to="/update" className="updateAccount">
          <span className="ml-3">
            Update Account
            <i class="fa fa-angle-double-right"></i>
          </span>
        </Link>
      </div>

      <div class="pain">
        <Link to="/page" className="enterPainRecord">
          <span className="ml-3">
            Enter Pain Level
            <i class="fa fa-angle-double-right"></i>
          </span>
        </Link>
      </div>

      <footer id="footer">
        Built with <img src={Like} alt="heart icon" id="hearticonfooter" /> by
        the coding cohort
      </footer>
    </React.Fragment>
  );
}

export default Report;
