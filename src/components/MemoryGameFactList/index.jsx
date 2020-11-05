import React from "react";
import "./index.css";
import { List, Card, Typography } from "antd";

const MemoryGameFactList = ({ facts }) => {
  const { Title } = Typography;
  return (
    <>
      <h1 className="memoryGameTitle">Facts</h1>
      <List
        dataSource={facts}
        renderItem={(fact) => (
          <List.Item>
            <Card>
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
