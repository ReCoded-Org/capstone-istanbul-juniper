import React from "react";
import { QuestionCircleTwoTone } from "@ant-design/icons";
import { Popover } from "antd";
import "./index.css";

// both parameters are translated strings
const HowToPlayPopover = ({ howToPlayDescription, howToPlayTitle }) => {
  return (
    <Popover
      content={howToPlayDescription}
      title={howToPlayTitle}
      placement="topRight"
    >
      <QuestionCircleTwoTone className="howToPlayicon" />
    </Popover>
  );
};

export default HowToPlayPopover;
