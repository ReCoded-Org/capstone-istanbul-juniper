import React, { useState } from "react";
import Resource from "../../components/Resource";
import "./index.css";
import ourClimateChange from "../../images/ourClimateChange.png";
import resourcesForEducation from "../../images/resourcesForEducation.png";
import whoCausesClimate from "../../images/whoCausesClimate.png";
import { useTranslation } from "react-i18next";

const initResources = [
  {
    id: 1,
    title: "Our changing climate - UNICEF",
    body:
      "This book is a child friendly handbook meant to explain the concepts of climate change in an easily understandable manner and language. It aims to link behavioural choices to the changes observed in our climate",
    pic: ourClimateChange,
    url:
      "gs://capstone-istanbul-juniper.appspot.com/ResourcesPage/Child friendly climate change handbook.pdf",
  },
  {
    id: 2,
    title: "Resources for Education on Climate Change - UNESCO",
    body:
      "This publication focuses on the challenges, opportunities and good practices of climate change. It explores the interrelationship between climate change and lifestyles through a scientific, political, economic, social, ethical and cultural angle and identifies actions young people might take towards more sustainable lifestyles. It provides information, case studies and useful tips around topics relevant to young people and their everyday lives, such as food and drink, travel and transport, leisure and entertainment. The guide was produced for young people and people working with them such as educators, teachers, trainers and youth leaders around the world",
    pic: resourcesForEducation,
    url:
      "gs://capstone-istanbul-juniper.appspot.com/ResourcesPage/Resources list_Climate Change.pdf",
  },
  {
    id: 3,
    title: "Who Causes Climate changes - TROCAIRE",
    body:
      "Children explore who contribute to climate change by looking at activities related to climate change using climate change bingo sheet, creating clouds that list activates causing gas emissions and represent the world population by dividing themself.",
    pic: whoCausesClimate,
    url:
      "gs://capstone-istanbul-juniper.appspot.com/ResourcesPage/creating-futures-lesson-4.pdf",
  },
];

const ResourcesPage = () => {
  const [t] = useTranslation();

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
