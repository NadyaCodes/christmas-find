import React from "react";

import Christmas from "./Christmas";

export default function Presents(props) {
  const values = Object.values(props.visible);
  const trues = values.filter((value) => value === true);

  const presentsDisplay = trues.map((pres, index) => {
    return (
      <div className="present">
        <img
          src={props.visible.presents[index]}
          alt={`present-${index}`}
          key={index}
          className="present-image"
        />
      </div>
    );
  });

  return (
    <>
      {trues.length === 5 && <Christmas />}
      <div className="presents-container">{presentsDisplay}</div>
    </>
  );
}
