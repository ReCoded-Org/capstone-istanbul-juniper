import React from "react";
import ShareYourExperience from "../../components/ShareYourExperience";
import StayUpToDate from "../../components/StayUpTodate";
import CurveComplementaryToNavbar from "../../components/CurveComplementaryToNavbar/index";
import "./index.css";

const Home = () => {
  return (
    <>
      <CurveComplementaryToNavbar />
      <ShareYourExperience />
      <StayUpToDate />
    </>
  );
};

export default Home;
