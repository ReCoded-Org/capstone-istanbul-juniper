import React from "react";
import { Row, Col } from "antd";
import "./index.css";
import { useTranslation } from "react-i18next";

const SpreadTheWordButton = () => {
  const [t] = useTranslation();

  return (
    <Row justify="center" className="spreadTheWord">
      <Col xxl={10} xl={10} lg={12} md={12} sm={14} xs={16}>
        <button type="button" className="spreadTheWord__button">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.twitter.com"
          >
            {t("home.spreadTheWord")}
          </a>
        </button>
      </Col>
    </Row>
  );
};

export default SpreadTheWordButton;
