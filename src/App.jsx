import React from "react";
import LoginRegister from "./containers/LoginRegister";
import "antd/dist/antd.css";
import "./i18n";
import AuthProvider from "./auth/authContext";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import './app.css';
function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginRegister} />
      </Switch>
    </AuthProvider>
  );
}

export default App;
