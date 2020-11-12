import React from "react";
import { Layout, Card } from "antd";
import "./index.css";

const PuzzlePageContent = () => {
  const { Content } = Layout;
  return (
    <Content className="puzzlePage__content">
      <Card size="small" className="puzzlePage__content-puzzleBox"></Card>
    </Content>
  );
};

export default PuzzlePageContent;
