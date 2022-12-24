import React from "react";
import frog from "./frog-face-cute.png";
import { useState } from "react";

export default function Grid() {
  const [visible, setVisible] = useState({ star: false, pot: false });
  return (
    <div className="grid">
      <div className="hiding-container">
        <div
          className="box star-hide"
          onClick={() => setVisible({ ...visible, star: true })}
        ></div>
        <div>
          <img
            src={frog}
            alt="cute frog with bow"
            className={visible.star === true ? "frog visible" : "hidden"}
          />
        </div>

        <div
          className="box pot-hide"
          onClick={() => setVisible({ ...visible, pot: true })}
        ></div>
        <div>
          <img
            src={frog}
            alt="cute frog with bow"
            className={visible.pot === true ? "frog visible" : "hidden"}
          />
        </div>
      </div>
    </div>
  );
}
