import React from "react";
import "./index.css";
import { List, Card } from "antd";

const MemoryGameFactList = ({ facts, title }) => {
  return (
    <>
      <h1 className="memoryGame__title">{title}</h1>
      <List
        dataSource={facts}
        renderItem={(fact) => (
          <List.Item>
            <Card className="memoryGame__title__card">
              <a target="__blank" href={fact.link}>
                {fact.phrase}
              </a>
            </Card>
          </List.Item>
        )}
      />
    </>
  );
};

export default MemoryGameFactList;
