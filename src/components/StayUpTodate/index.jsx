import React from "react";
import { Typography, Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import TwitterImage from "../TwitterImage";
import "./index.css";

const StayUpToDate = () => {
  const { Title } = Typography;
  const [t] = useTranslation();

  const twitterPagesData = [
    ...t("home.twitterPages", {
      returnObjects: true,
    }),
  ];

  const twitterImages = twitterPagesData.map((page) => {
    return (
      <Col
        xs={24}
        lg={12}
        className="stayUpToDate__twitterContent__col"
        key={page.href}
      >
        <TwitterImage alt={page.alt} href={page.href} src={page.src} />
      </Col>
    );
  });

  return (
    <div className="stayUpToDate">
      <Title>
        <span className="stayUpToDate__title">{t("home.stayUpToDate")}</span>
      </Title>
      <Row className="stayUpToDate__twitterContent">{twitterImages}</Row>
    </div>
  );
};

export default StayUpToDate;
