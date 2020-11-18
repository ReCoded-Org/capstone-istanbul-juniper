import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import PuzzlePage from "./containers/PuzzlePage/index";
import Navbar from "./components/Navbar";
import MemoryGamePage from "./containers/MemoryGamePage";
import GamesPage from "./containers/GamesPage";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  const { i18n } = useTranslation();
  document.dir = i18n.dir();

  return (
    <>
      <Router>
        <Route path="/" component={Navbar} />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={""} />
        <Route path="/resources" component={""} />
        <Route path="/contact" component={""} />
        <Route path="/login" component={""} />
        <Route path="/games/memorygame" component={MemoryGamePage} />
        <Route exact path="/games/puzzle" component={PuzzlePage} />
        <Route exact path="/games" component={GamesPage} />
        <Route path="/" component={Footer} />
      </Router>
    </>
  );
}

export default App;
