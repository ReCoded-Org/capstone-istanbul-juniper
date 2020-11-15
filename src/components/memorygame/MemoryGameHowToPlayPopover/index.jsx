import React from "react";
import { QuestionCircleTwoTone } from "@ant-design/icons";
import { Popover } from "antd";
import "./index.css";

const HowToPlayPopover = ({ howToPlayDescription, howToPlayTitle }) => {
  return (
    <Popover
      content={howToPlayDescription}
      title={howToPlayTitle}
      placement="topRight"
    >
      <QuestionCircleTwoTone className="howToPlayMemoryGameContainer__icon" />
    </Popover>
  );
};

export default HowToPlayPopover;
