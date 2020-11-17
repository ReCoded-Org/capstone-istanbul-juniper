import React from "react";
import "./index.css";
import { List, Card } from "antd";

/**
 * Upon matching cards, a fact related to matched cards appear on screen
 * This component creates the list that will hold all facts
 * "facts" is an array of objects
 * "title" is a string that is translated by i18n. It is used to describe what the list holds.
 * If the language is English "title" will be "Facts"
 */
const MemoryGameFactList = ({ facts, title }) => {
  return (
    <>
      <h1 className="memoryGame__title">{title}</h1>
      <List
        dataSource={facts}
        renderItem={(fact) => (
          <List.Item>
            <Card className="memoryGame__card">
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
