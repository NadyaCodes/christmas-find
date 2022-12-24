import React from "react";
import frog from "./frog-face-cute.png";
import { useState } from "react";

export default function Grid() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="grid">
      <div className="box star-hide" onClick={() => setVisible(true)}></div>
      <div>
        <img
          src={frog}
          alt="cute frog with bow"
          className={visible === true ? "frog visible" : "hidden"}
        />
      </div>
    </div>
  );
}
