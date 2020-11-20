import React from "react";
import { Card, Row, Avatar } from "antd";
import { LinkedinFilled, GithubFilled } from "@ant-design/icons";
import "./index.css";

// Props passed to this function are details of team members
const MemberCard = ({
  // Member's name
  name, 
  // Member's role
  role, 
  // Member's bio
  bio, 
  // link to the member's image
  avatar, 
  // link to the member's linkedin profile
  linkedin, 
  // link to the member's github profile
  github}) => {
  return (
    <Card span={6} size="default" className="memberCard" bordered={false}>
      <div className="memberCard__header">
        <Avatar
          className="memberCard__header__avatar"
          size={120}
          src={avatar}
          shape="circle"
          alt={name}
        />
        <Row className="memberCard__header__name">{name}</Row>
        <Row className="memberCard__header__role">{role}</Row>
      </div>

      <Row className="memberCard__bio">{bio}</Row>
      <Row className="memberCard__socialMedia">
        <a className="memberCard__socialMedia--linkedin" href={linkedin}>
          <LinkedinFilled />
        </a>
        <a className="memberCard__socialMedia--github" href={github}>
          <GithubFilled />
        </a>
      </Row>
    </Card>
  );
};

export default MemberCard;
