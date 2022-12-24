import React from "react";
import frog from "./frog-face-cute.png";

export default function Grid() {
  return (
    <div className="grid">
      <div className="box star-hide"></div>
      <div className="frog">
        <img src={frog} alt="cute frog with bow" />
      </div>
    </div>
  );
}
