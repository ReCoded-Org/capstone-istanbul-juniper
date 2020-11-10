import React from "react";
import CurrentImage from "../CurrentImage/index";
import { Layout, Card } from "antd";
import "./index.css";

const GameSpace = () => {
  const { Content } = Layout;
  return (
    <Content className="puzzlePage__gameSpace">
      <Card size="small" className="puzzlePage__puzzleBox">
        <CurrentImage />
      </Card>
    </Content>
  );
};

export default GameSpace;
