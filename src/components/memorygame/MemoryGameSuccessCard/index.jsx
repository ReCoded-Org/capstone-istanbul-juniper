import React from "react";
import { Card } from "antd";
import memoryGameSuccessSymbol from "../../../images/memoryGameSuccessSymbol.svg";

const SuccessCard = () => {
  return (
    <Card className="memoryGameCardContainer___successCard">
      <img
        src={memoryGameSuccessSymbol}
        alt="Success symbol"
        className="memoryGameCardContainer___successCard___symbol"
      />
    </Card>
  );
};

export default SuccessCard;
