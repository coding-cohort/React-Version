import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App.js";
import Login from "./screens/Login.js";
import Register from "./screens/Register.js";
import Activate from "./screens/Activate.js";

import ForgetPassword from "./screens/ForgetPassword.js";
import ResetPassword from "./screens/ResetPassword.js";
import PrivateRoute from "./routes/PrivateRoute";

import Input from "./screens/inputpainlevel.js";
import Report from "./screens/report.js";
import Update from "./screens/update.js";
import PageRoute from "./routes/PageRoute";

import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <App {...props} />} />
      <Route path="/login" exact render={(props) => <Login {...props} />} />

      <Route
        path="/register"
        exact
        render={(props) => <Register {...props} />}
      />

      <Route
        path="/users/password/forget"
        exact
        render={(props) => <ForgetPassword {...props} />}
      />
      <Route
        path="/users/password/reset/:token"
        exact
        render={(props) => <ResetPassword {...props} />}
      />
      <Route
        path="/users/activate/:token"
        exact
        render={(props) => <Activate {...props} />}
      />

      <PageRoute path="/report" component={Report} />
      <PrivateRoute path="/update" exact component={Update} />

      <PageRoute path="/page" exact component={Input} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
