import React from "react";
import contactUsBottomImgRight_1 from "../../images/child.png";
import contactUsBottomImgRight_2 from "../../images/child_2.png";
import contactUsBottomImgLeft from "../../images/family.png";
import "./index.css";
import "antd/dist/antd.css";

const ContactUsBottom = () => {
  return (
    <div className="contacUsBottomContainer">
      <div className="contacUsBottomContainer__bottomCurve">
        <div className="contacUsBottomContainer__bottomCurve__topHalf">
          <div className="contacUsBottomContainer__bottomCurve__topHalfImg">
            <img
              className="contacUsBottomContainer__bottomCurve__topHalfImg_imgMain"
              alt="two children playing in the garden"
              src={contactUsBottomImgLeft}
            />
            <img
              className="contacUsBottomContainer__bottomCurve__topHalfImg__imgSubOne"
              alt="girl playing in the garden"
              src={contactUsBottomImgRight_1}
            />
            <img
              className="contacUsBottomContainer__bottomCurve__topHalfImg__imgSubTwo"
              alt="boy playing in the garden"
              src={contactUsBottomImgRight_2}
            />
          </div>
        </div>
        <div className="contacUsBottomContainer__bottomCurve__bottomHalf" />
      </div>
    </div>
  );
};

export default ContactUsBottom;
