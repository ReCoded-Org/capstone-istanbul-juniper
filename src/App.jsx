import React from "react";
import Home from "./containers/Home/index";
import MemoryGame from "./containers/MemoryGame";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import { useTranslation } from "react-i18next";

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
        <Route path="/memorygame" component={MemoryGame} />
      </Router>
    </>
  );
}

export default App;
