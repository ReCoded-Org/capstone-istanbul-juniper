import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PuzzlePage from "./containers/PuzzlePage/index";
import { useTranslation } from "react-i18next";
import Home from "./containers/Home/index";
import MemoryGame from "./containers/MemoryGame";
import "antd/dist/antd.css";
import "./App.css";

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
        <Route exact path="/games/puzzle" component={PuzzlePage} />
        <Route path="/memorygame" component={MemoryGame} />
      </Router>
    </>
  );
}

export default App;
