import React from "react";
import { Card, Row, Avatar } from "antd";
import { LinkedinFilled, GithubFilled } from "@ant-design/icons";
import "./index.css";

// Props passed to this function are details of team members
const MemberCard = ({ name, role, bio, avatarUrl, linkedinUrl, githubUrl }) => {
  return (
    <Card span={6} size="default" className="memberCard" bordered={false}>
      <div className="memberCard__header">
        <Avatar
          className="memberCard__header__avatar"
          size={120}
          src={avatarUrl}
          shape="circle"
          alt={name}
        />
        <Row className="memberCard__header__name">{name}</Row>
        <Row className="memberCard__header__role">{role}</Row>
      </div>

      <Row className="memberCard__bio">{bio}</Row>
      <Row className="memberCard__socialMedia">
        <a className="memberCard__socialMedia--linkedin" href={linkedinUrl}>
          <LinkedinFilled />
        </a>
        <a className="memberCard__socialMedia--github" href={githubUrl}>
          <GithubFilled />
        </a>
      </Row>
    </Card>
  );
};

export default MemberCard;
