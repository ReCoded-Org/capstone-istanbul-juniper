/*
 * Functionality of this button is not %100 agreed upon.
 * So, the link it directs to is not correct.
 */

import React from "react";
import { Row, Col } from "antd";
import { TwitterCircleFilled } from "@ant-design/icons";
import "./index.css";
import { useTranslation } from "react-i18next";

const SpreadTheWordButton = () => {
  const [t] = useTranslation();

  return (
    <Row justify="center" className="spreadTheWord">
      <Col lg={12} sm={14} xs={16}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.twitter.com"
        >
          <button type="button" className="spreadTheWord__button">
            <TwitterCircleFilled className="twitterIcon" />
            {t("home.spreadTheWord")}
          </button>
        </a>
      </Col>
    </Row>
  );
};

export default SpreadTheWordButton;
