import React from "react";
import frog from "./frog-face-cute.png";
import Christmas from "./Christmas";

export default function Presents(props) {
  console.log(props.visible);

  const values = Object.values(props.visible);
  const trues = values.filter((value) => value === true);

  // const visibleObj = props.visible;
  const presentsDisplay = trues.map((pres, index) => {
    return (
      <div className="present">
        <img
          src={frog}
          alt={`present-${index}`}
          key={index}
          className="present-image"
        />
        {trues.length === 5 && <Christmas />}
      </div>
    );
  });
  return <div className="presents-container">{presentsDisplay}</div>;
}
