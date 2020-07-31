import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
import { updateUser, isAuth, getCookie, signout } from "../helpers/auth";
import Logo from "../assets/logo.png";
import Woman from "../assets/super_woman copy.svg";

const Update = ({ history }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password1: "",
    textChange: "Update",
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = () => {
    const token = getCookie("token");
    axios
      .get(`http://localhost:5000/api/user/${isAuth()._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const { name, email } = res.data;
        setFormData({ ...formData, name, email });
      })
      .catch((err) => {
        toast.error(`Error To Your Information ${err.response.statusText}`);
        if (err.response.status === 401) {
          signout(() => {
            history.push("/login");
          });
        }
      });
  };

  const { name, email, password1, textChange } = formData;
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = (e) => {
    const token = getCookie("token");
    console.log(token);
    e.preventDefault();
    setFormData({ ...formData, textChange: "Submitting" });
    axios
      .put(
        `http://localhost:5000/api/user/update`,
        {
          name,
          email,
          password: password1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        updateUser(res, () => {
          toast.success("Profile Updated Successfully");
          setFormData({ ...formData, textChange: "Update" });
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div>
        <nav className="top-icons">
          <img src={Logo} id="logoimg" alt="Debbie logo" />
          <h1 id="main-heading">Debbie</h1>
          <Link to="/page" className="input-button">
            <span className="ml-3">X</span>
          </Link>
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
            />

            <label for="email">Email</label>
            <input
              type="text"
              name=""
              id="email"
              className="input_email"
              onChange={handleChange("email")}
              placeholder="Enter Your Email"
              value={email}
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
            <button type="submit" className="button">
              <i className="fas fa-user-plus fa 1x w-6  -ml-2" />
              <span className="ml-3">{textChange}</span>
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Update;
