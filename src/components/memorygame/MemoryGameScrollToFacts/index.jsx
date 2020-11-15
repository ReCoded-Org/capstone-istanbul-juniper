import React from "react";
// Check https://github.com/rafgraph/react-router-hash-link for 'react-router-hash-link'
import { HashLink } from "react-router-hash-link";
import { Button } from "antd";
import "./index.css";

const ScrollToFacts = ({ unlockedFacts }) => {
  return (
    <HashLink to="#memoryGameFactList" smooth={true}>
      <Button className="scrollToFactsContainer__button" type="primary">
        <p>{unlockedFacts}</p>
      </Button>
    </HashLink>
  );
};

export default ScrollToFacts;
