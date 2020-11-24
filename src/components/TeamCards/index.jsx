import React, { useState, useEffect } from "react";
import db from "./../../firebaseConfig";
import MemberCard from "./../MemberCard";
import { useTranslation } from "react-i18next";
import { Row } from "antd";
import "./index.css";

const TeamCards = () => {
  const [t] = useTranslation();
  const [dataState, setDataState] = useState([]);

  const fetchData = async () => {
    const res = await db.collection("team").doc("teamInfo").get();
    const data = res.data();
    setDataState(data.info);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="ourTeam">
      <Row className="ourTeam__Header">{t("about.ourTeam")}</Row>
      <Row className="ourTeam__teamCards">
        {dataState.map((member) => (
          <MemberCard
            key={member.name + "Card"}
            name={t(`about.teamInfo.${member.name}.name`)}
            avatarUrl={member.avatar}
            bio={t(`about.teamInfo.${member.name}.bio`)}
            role={t(`about.teamInfo.${member.name}.role`)}
            linkedinUrl={member.linkedin}
            githubUrl={member.github}
          />
        ))}
      </Row>
    </div>
  );
};

export default TeamCards;
