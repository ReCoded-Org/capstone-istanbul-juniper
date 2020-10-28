/**
 * Navbar has a section that displays top half of a wide elliptical shape.
 * This component is the bottom half of elliptical shape
 */

import React from "react";
import "./index.css";

const BottomCurve = () => {
  return (
    <div className="bottomCurveContainer">
      <div className="bottomCurveContainer__bottomCurve">
        <div className="bottomCurveContainer__bottomCurve__topHalf" />
        <div className="bottomCurveContainer__bottomCurve__bottomHalf" />
      </div>
    </div>
  );
};
export default BottomCurve;
