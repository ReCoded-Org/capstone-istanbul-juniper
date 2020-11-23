import React, { useState } from "react";
import Resource from "../../components/Resource";
import "./index.css";
import ourClimateChange from "../../images/ourClimateChange.png";
import resourcesForEducation from "../../images/resourcesForEducation.png";
import whoCausesClimate from "../../images/whoCausesClimate.png";
import { useTranslation } from "react-i18next";

const ResourcesPage = () => {
  const [t] = useTranslation();
  const initResources = [
    {
      id: 1,
      title: t("resourcesPage.title1"),
      body: t("resourcesPage.text1"),
      pic: ourClimateChange,
      url:
        "gs://capstone-istanbul-juniper.appspot.com/ResourcesPage/Child friendly climate change handbook.pdf",
    },
    {
      id: 2,
      title: t("resourcesPage.title2"),
      body: t("resourcesPage.text2"),
      pic: resourcesForEducation,
      url:
        "gs://capstone-istanbul-juniper.appspot.com/ResourcesPage/Resources list_Climate Change.pdf",
    },
    {
      id: 3,
      title: t("resourcesPage.title3"),
      body: t("resourcesPage.text3"),
      pic: whoCausesClimate,
      url:
        "gs://capstone-istanbul-juniper.appspot.com/ResourcesPage/creating-futures-lesson-4.pdf",
    },
  ];
  const [resources] = useState(initResources);
  return (
    <div className="resourcesPage">
      <div className="resourcesPage__headerContainer">
        <div className="resourcesPage__headerContainer__title">
          {t("resourcesPage.title")}
        </div>
        <div className="resourcesPage__headerContainer__subTitle">
          {t("resourcesPage.aboutPage")}
        </div>
      </div>
      <div className="resourcesPage__resourcesContainer">
        {resources.map((resource) => {
          return (
            <Resource key={`resource_${resource.id}`} resource={resource} />
          );
        })}
      </div>
    </div>
  );
};

export default ResourcesPage;
