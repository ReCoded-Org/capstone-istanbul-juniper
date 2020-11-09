import React from "react";
import Home from "./containers/Home/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import { useTranslation } from "react-i18next";
import MatchingGame from "./containers/MatchingGame/index";

function App() {
  const { i18n } = useTranslation();
  document.dir = i18n.dir();

  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={""} />
        <Route path="/games" component={""} />
        <Route path="/resources" component={""} />
        <Route path="/contact" component={""} />
        <Route path="/login" component={""} />
        <Route path="/matchinggame" component={MatchingGame} />
      </Router>
    </>
  );
}

export default App;
