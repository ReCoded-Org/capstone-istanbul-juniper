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
      title: t("resourcesPage.resourceOneTitle"),
      body: t("resourcesPage.resourceOneText"),
      pic: ourClimateChange,
      url:
        "gs://capstone-istanbul-juniper.appspot.com/ResourcesPage/Child friendly climate change handbook.pdf",
    },
    {
      id: 2,
      title: t("resourcesPage.resourceTwoTitle"),
      body: t("resourcesPage.resourceTwoText"),
      pic: resourcesForEducation,
      url:
        "gs://capstone-istanbul-juniper.appspot.com/ResourcesPage/Resources list_Climate Change.pdf",
    },
    {
      id: 3,
      title: t("resourcesPage.resourceThreeTitle"),
      body: t("resourcesPage.resourceThreeText"),
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
