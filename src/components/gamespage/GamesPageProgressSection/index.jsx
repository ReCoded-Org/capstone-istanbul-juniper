import React from "react";
import "./index.css";
import { Progress, Row, Col } from "antd";
import { QuestionOutlined } from "@ant-design/icons";
import trashBinReward from "../../../images/trash-bin.svg";

const ProgressSection = () => {
  return (
    <div className="progressSectionContainer">
      <Row justify="center">
        <h3 className="progressSectionContainer___xp">50/100 Xp</h3>
      </Row>
      <Row justify="center" className="progressSectionContainer___row">
        <Col span={6}>
          <h3
            className="
                        progressSectionContainer___row___header 
                        progressSectionContainer___row___leftLevel
                        "
          >
            Level 5
          </h3>
        </Col>
        <Col span={12}>
          <Progress
            percent={50}
            className="progressSectionContainer___row___progressBar"
            strokeColor="#4BA747"
            trailColor="white"
            strokeWidth={20}
            showInfo={false}
          />
        </Col>
        <Col span={6}>
          <h3
            className="
                        progressSectionContainer___row___header 
                        progressSectionContainer___row___rightLevel
                        "
          >
            Level 6
          </h3>
        </Col>
      </Row>
      <Row className="progressSectionContainer___row">
        <Col span={3} push={5}>
          <h3 className="progressSectionContainer___row___header">
            Previous
            <br />
            Reward
          </h3>
          <img
            src={trashBinReward}
            alt="trash"
            className="progressSectionContainer___row___header___prevReward"
          />
        </Col>
        <Col span={3} push={15}>
          <h3 className="progressSectionContainer___row___header">
            Next
            <br />
            Reward
          </h3>
          <QuestionOutlined className="progressSectionContainer___row___header___questionMark" />
        </Col>
      </Row>
    </div>
  );
};

export default ProgressSection;
