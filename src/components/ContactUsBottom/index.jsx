import React from "react";
import contactUsBottomImgRight_0 from "../../images/child.png";
import contactUsBottomImgRight_1 from "../../images/child_2.png";
import contactUsBottomImgLeft from "../../images/family.png";
import "./index.css";

const ContactUsBottom = () => {
  return (
    <div className="contactUsBottomContainer">
      <div className="contactUsBottomContainer__bottomCurve">
        <div className="contactUsBottomContainer__bottomCurve__topHalf">
          <div className="contactUsBottomContainer__bottomCurve__topHalfImages">
            <img
              className="contactUsBottomContainer__bottomCurve__topHalfImages--mainImg"
              alt="Two children playing in the garden"
              src={contactUsBottomImgLeft}
            />

            <img
              className="contactUsBottomContainer__bottomCurve__topHalfImages--subImgOne"
              alt="Girl playing in the garden"
              src={contactUsBottomImgRight_0}
            />

            <img
              className="contactUsBottomContainer__bottomCurve__topHalfImages--subImgTwo"
              alt="Boy playing in the garden"
              src={contactUsBottomImgRight_1}
            />
          </div>
        </div>
        <div className="contactUsBottomContainer__bottomCurve__bottomHalf" />
      </div>
    </div>
  );
};

export default ContactUsBottom;
