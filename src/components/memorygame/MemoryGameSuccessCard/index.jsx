import React from "react";
import { Card } from "antd";
import memoryGameSuccessSymbol from "../../../images/memoryGameSuccessSymbol.svg";
import "./index.css";

// SuccessCard takes places of successfully matched cards
const SuccessCard = () => {
  return (
    <Card className="successCard">
      <img
        src={memoryGameSuccessSymbol}
        alt="Success symbol"
        className="successCard__image"
      />
    </Card>
  );
};

export default SuccessCard;
