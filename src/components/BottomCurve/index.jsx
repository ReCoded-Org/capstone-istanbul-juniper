/**
 * Navbar has a section that displays top half of a wide elliptical shape.
 * This component is the bottom half of elliptical shape
 */

import React from "react";
import "./index.css";

const BottomCurve = () => {
  return (
    <div className="curveContainer">
      <div className="curveContainer__bottomCurve">
        <div className="curveContainer__bottomCurve__topHalf" />
        <div className="curveContainer__bottomCurve__bottomHalf" />
      </div>
    </div>
  );
};
export default BottomCurve;
