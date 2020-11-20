import React from "react";
import { Card, Row, Avatar } from "antd";
import { LinkedinFilled, GithubFilled } from "@ant-design/icons";
import "./index.css";

// Props passed to this function are details of team members
// The following props are passed to the MemberCard component:
// name, role, bio, avatar (link to member's picture), linkedin (link to their linkedin profile)
// and github (link to their github profile)
const MemberCard = (props) => {
  return (
    <Card span={6} size="default" className="memberCard" bordered={false}>
      <div className="memberCard__header">
        <Avatar
          className="memberCard__avatar"
          size={120}
          src={props.avatar}
          shape="circle"
          alt={props.name}
        />
        <Row className="memberCard__name">{props.name}</Row>
        <Row className="memberCard__role">{props.role}</Row>
      </div>

      <Row className="memberCard__bio">{props.bio}</Row>
      <Row className="memberCard__socialMedia">
        <a className="memberCard__socialMedia--linkedin" href={props.linkedin}>
          <LinkedinFilled />
        </a>
        <a className="memberCard__socialMedia--github" href={props.github}>
          <GithubFilled />
        </a>
      </Row>
    </Card>
  );
};

export default MemberCard;
