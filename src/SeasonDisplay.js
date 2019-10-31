import "./SeasonDisplay.css";
import React from "react";

let seasonConfig = {
  summer: {
    text: "Lets hit the beach",
    iconName: "sun"
  },
  winter: {
    text: "It's chilly",
    iconName: "snowflake"
  }
};

let getSeason = (latit, month) => {
  if (month > 2 && month < 9) {
    return latit > 0 ? "summer" : "winter";
  } else {
    return latit > 0 ? "winter" : "summer";
  }
};

let SeasonDisplay = props => {
  let season = getSeason(props.latit, new Date().getMonth());
  /*let text = season === "winter" ? "It's chilly" : "Go bitch";
  let icon = season === "winter" ? "snowflake" : "sun"; */
  let { text, iconName } = seasonConfig[season]; // {text, iconName}

  return (
    <div className={`season-display ${season} `}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1>{text} </h1>
      <i className={`icon-right massive ${iconName} icon `}></i>
    </div>
  );
};

export default SeasonDisplay;
