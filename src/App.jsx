import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import PuzzlePage from "./containers/PuzzlePage/index";
import Navbar from "./components/Navbar";
import MemoryGamePage from "./containers/MemoryGamePage";
import GamesPage from "./containers/GamesPage";
import ContactPage from "./containers/ContactPage";
import "antd/dist/antd.css";
import "./App.css";
import QuizGamePage from "./containers/QuizGamePage";
import ResourcePage from "./containers/ResourcesPage";

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
        <Route path="/contact" component={ContactPage} />
        <Route path="/login" component={""} />
        <Route path="/games/memorygame" component={MemoryGamePage} />
        <Route exact path="/games/puzzle" component={PuzzlePage} />
        <Route path="/games/quizgame" component={QuizGamePage} />
        <Route exact path="/games" component={GamesPage} />
        <Route path="/resources" component={ResourcePage} />
        <Route path="/" component={Footer} />
      </Router>
    </>
  );
}

export default App;
