import React from "react";
import "./index.css";
import { List, Card } from "antd";
import { useTranslation } from "react-i18next";

/**
 * Upon matching cards, a fact related to matched cards appears on screen
 * This component creates the list that will hold all facts
 * "facts" is an array of state objects
 * To see state object example check src/components/memorygame/MemoryGameBoard/index.jsx
 */
const MemoryGameFactList = ({ facts }) => {
  const [t] = useTranslation();
  let factListContent;
  // facts is an empty array by default, it gets filled when user makes successful match
  if (facts.length !== 0) {
    factListContent = (
      <List
        className="memoryGameFactListContainer__list"
        dataSource={facts}
        renderItem={(fact) => (
          <List.Item className="memoryGameFactListContainer__list__item">
            <a target="__blank" href={fact.link}>
              <Card className="memoryGameFactListContainer__list__item__card">
                {fact.phrase}
              </Card>
            </a>
          </List.Item>
        )}
      />
    );
  } else {
    factListContent = (
      <h5 className="memoryGameFactListContainer__noFacts">
        {t("memoryGame.emptyFactListMessage")}
      </h5>
    );
  }

  return (
    <div className="memoryGameFactListContainer" id="memoryGameFactList">
      <h1 className="memoryGameFactListContainer__title">
        {t("memoryGame.facts")}
      </h1>
      {factListContent}
    </div>
  );
};

export default MemoryGameFactList;
