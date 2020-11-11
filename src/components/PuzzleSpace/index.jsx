import React from "react";
import { Layout, Card } from "antd";
import "./index.css";

const GameSpace = () => {
  const { Content } = Layout;
  return (
    <Content className="puzzlePage__gameSpace">
      <Card size="small" className="puzzlePage__puzzleBox"></Card>
    </Content>
  );
};

export default GameSpace;
