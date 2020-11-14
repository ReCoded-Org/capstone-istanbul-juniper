import React from "react";
import { Layout, Card } from "antd";
import PuzzleGameContainer from "./../PuzzleGameContainer"
import "./index.css";

const PuzzlePageContent = () => {
  const { Content } = Layout;
  return (
    <Content className="puzzlePage__content">
      <PuzzleGameContainer />
    </Content>
  );
};

export default PuzzlePageContent;
