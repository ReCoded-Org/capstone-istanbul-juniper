import React from "react";
import { Typography, Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import TwitterImage from "../TwitterImage";
import "./index.css";

const StayUpToDate = () => {
  const { Title } = Typography;
  const [t] = useTranslation();

  const twitterPagesData = [
    ...t("twitterPages", {
      returnObjects: true,
    }),
  ];

  // there is a duplication issue in snapshot test.
  // This is why pre defined unique ids dont wont and there is need for incremented ids
  let id = -1;
  const twitterImages = twitterPagesData.map((page) => {
    id += 1;
    return (
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={24}
        xl={12}
        xxl={12}
        className="stayUpToDate__twitterContent__col"
        key={id}
      >
        <TwitterImage alt={page.alt} href={page.href} src={page.src} />
      </Col>
    );
  });

  return (
    <div className="stayUpToDate">
      <Title>
        <span className="stayUpToDate__title">{t("stayUpToDate")}</span>
      </Title>
      <Row align="center" className="stayUpToDate__twitterContent">
        {twitterImages}
      </Row>
    </div>
  );
};

export default StayUpToDate;
