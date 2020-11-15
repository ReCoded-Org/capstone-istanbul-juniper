import React from "react";
import { Card } from "antd";
import memoryGameSuccessSymbol from "../../../images/memoryGameSuccessSymbol.svg";
import "./index.css";

const SuccessCard = () => {
  return (
    <Card className="successCard memoryGameCardsContainer___card">
      <img
        src={memoryGameSuccessSymbol}
        alt="Success symbol"
        className="memoryGameCardsContainer___card___image"
      />
    </Card>
  );
};

export default SuccessCard;
