import React from "react";
import Navbar from "../../components/Navbar/index";
import MatchingGameHeaderSection from "../../components/MatchingGameHeaderSection";
import MatchingGameBoard from "../../components/MatchingGameBoard";
import MatchingGameImageCards from "../../components/MatchingGameImageCards";
import MatchingGameWordCards from "../../components/MatchingGameWordCards";
import BottomCurve from "../../components/BottomCurve/index";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

const MatchingGame = () => {
  return (
    <Router>
      <Navbar />
      <div className="matchingGame">
        <MatchingGameHeaderSection />
        <MatchingGameBoard
          id="matchingGame__wordsBoard"
          className="matchingGame__board"
        >
          <MatchingGameWordCards />
        </MatchingGameBoard>
        <MatchingGameBoard
          id="matchingGame__imagesBoard"
          className="matchingGame__board"
        >
          <MatchingGameImageCards />
        </MatchingGameBoard>
        <BottomCurve />
      </div>
    </Router>
  );
};

export default MatchingGame;
