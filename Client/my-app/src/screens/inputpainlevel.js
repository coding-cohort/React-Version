import React, { Component } from "react";
import Logo from "../assets/logo.png";
import Woman from "../assets/super_woman copy.svg";
import Like from "../assets/like.svg";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      show: true,
      max: 10,
      min: 1,
    };
  }

  IncrementItem = () => {
    if (this.state.quantity > 9) {
    } else {
      this.setState({
        quantity: this.state.quantity + 1,
      });
    }
  };
  DecrementItem = () => {
    if (this.state.quantity <= 1) {
    } else {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };

  save = () => {
    const pain = this.state.quantity;
    axios.post(`http://localhost:5000/api/pain`, {
      pain,
    });
    toast.success("your pain level is  " + this.state.quantity);
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <nav class="top-icons">
          <img
            id="logoimg"
            src={Logo}
            alt="logo for website with letters D E, short for Debbie"
          />
          <h1 id="main-heading">Debbie</h1>
          <Link to="/report" className="input-button">
            <span>X</span>
          </Link>
        </nav>
        <div class="img-container">
          <img id="superwomanimg" src={Woman} alt="super woman image" />
        </div>
        <h2 id="heading">Let Debbie help monitor your pain</h2>
        <div class="fingerimg">
          <i>&#x1F447;</i>
        </div>
        <p id="askpainlevel">
          Select your pain level from <br />1 - not so bad to 10 - really bad!
        </p>
        <div class="numberinput">
          <button onClick={this.DecrementItem} id="plus">
            -
          </button>
          <input className="number" value={this.state.quantity} disabled />
          <button onClick={this.IncrementItem} id="minus">
            +
          </button>
        </div>
        <div class="savebtn">
          <button onClick={this.save} class="save-button">
            Save
          </button>
        </div>
        <div class="heart">
          <img src={Like} alt="heart icon" id="hearticon" />
        </div>
        <footer id="footer">
          Built with <img src={Like} alt="heart icon" id="hearticonfooter" /> by
          the coding cohort
        </footer>
      </React.Fragment>
    );
  }
}

export default Input;
