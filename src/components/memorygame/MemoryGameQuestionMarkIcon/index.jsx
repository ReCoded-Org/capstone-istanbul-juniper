import React from "react";
import { QuestionCircleTwoTone } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Popover } from "antd";
import "./index.css";

const QuestionMarkIcon = () => {
  const [t] = useTranslation();
  return (
    <Popover
      content={t("memoryGame.howToPlayDescription")}
      title={t("memoryGame.howToPlayTitle")}
      placement="topRight"
    >
      <QuestionCircleTwoTone className="questionMarkIcon" />
    </Popover>
  );
};

export default QuestionMarkIcon;
