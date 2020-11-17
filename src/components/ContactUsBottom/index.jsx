import React from "react";
import contactUsBottomImgRight_1 from "../../images/child.png";
import contactUsBottomImgRight_2 from "../../images/child_2.png";
import contactUsBottomImgLeft from "../../images/family.png";
import "./index.css";
import "antd/dist/antd.css";

const ContactUsBottom = () => {
  return (
    <div className="contactUsBottomContainer">
      <div className="contactUsBottomContainer__bottomCurve">
        <div className="contactUsBottomContainer__bottomCurve__topHalf">
          <div className="contactUsBottomContainer__bottomCurve__topHalfImages">
            <img
              className="contactUsBottomContainer__bottomCurve__topHalfImagesg_mainImg"
              alt="two children playing in the garden"
              src={contactUsBottomImgLeft}
            />

            <img
              className="contactUsBottomContainer__bottomCurve__topHalfImg__subImgOne"
              alt="girl playing in the garden"
              src={contactUsBottomImgRight_1}
            />

            <img
              className="contactUsBottomContainer__bottomCurve__topHalfImg__subImgTwo"
              alt="boy playing in the garden"
              src={contactUsBottomImgRight_2}
            />
          </div>
        </div>
        <div className="contactUsBottomContainer__bottomCurve__bottomHalf" />
      </div>
    </div>
  );
};

export default ContactUsBottom;
