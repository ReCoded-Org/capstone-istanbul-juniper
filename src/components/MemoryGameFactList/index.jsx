import React from "react";
import { List, Card } from "antd";

const MemoryGameFactList = ({ facts }) => {
  return (
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
  );
};

export default MemoryGameFactList;
