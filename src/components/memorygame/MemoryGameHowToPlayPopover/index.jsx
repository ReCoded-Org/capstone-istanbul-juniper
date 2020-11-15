import React from "react";
import { QuestionCircleTwoTone } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Popover } from "antd";
import "./index.css";

const HowToPlayPopover = () => {
  const [t] = useTranslation();
  const howToPlayTitle = t("memoryGame.howToPlayTitle");
  const howToPlayDescription = t("memoryGame.howToPlayDescription");
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
