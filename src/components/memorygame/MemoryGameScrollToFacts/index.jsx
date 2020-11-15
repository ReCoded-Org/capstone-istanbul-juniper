import React from "react";
// Check https://github.com/rafgraph/react-router-hash-link for 'react-router-hash-link'
import { HashLink } from "react-router-hash-link";
import { Button } from "antd";
import "./index.css";

// scrollToFactsButtonText is a translated string
const ScrollToFacts = ({ scrollToFactsButtonText }) => {
  return (
    // HashLink is being used to redirect user to fact list, when button is clicked
    <HashLink to="#memoryGameFactList" smooth>
      <Button className="scrollToFactsButton" type="primary">
        {scrollToFactsButtonText}
      </Button>
    </HashLink>
  );
};

export default ScrollToFacts;
