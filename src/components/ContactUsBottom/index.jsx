import React from "react";
import contactUsBottomImgRight_1 from "../../images/child.png";
import contactUsBottomImgRight_2 from "../../images/child_2.png";
import contactUsBottomImgLeft from "../../images/family.png";
import "./index.css";
import "antd/dist/antd.css";

const ContactUsBottom = ()=>{
return (
  <div className="contacUsBottom">
    <div className="contacUsBottom__bottomCurve">
      <div className="contacUsBottom__bottomCurve__topHalf">
        <div className="contacUsBottom__bottomCurve__topHalfImg">
          <img
            className="contactUsBottom__img"
            alt="children playing in the garden"
            src={contactUsBottomImgLeft}
          />
          <img
            className="contactUsBottom__img"
            alt="child playing in the garden"
            src={contactUsBottomImgRight_1}
          />
          <img
            className="contactUsBottom__img"
            alt="child playing in the garden"
            src={contactUsBottomImgRight_2}
          />
        </div>
      </div>
      <div className="contacUsBottom__bottomCurve__bottomHalf"></div>
    </div>
  </div>
);
}

export default ContactUsBottom;