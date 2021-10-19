import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "Mobile Developer ",
      handler: props.actionProvider.Platform,
      id: 1,
    },
    { text: "Web Developer", handler: props.actionProvider.webDevOptionsOne , id: 2 },
    { text: "Game Developer", handler: props.actionProvider.handleJavascriptList , id: 3 },
  ];
  
  const optionsMarkup = options.map((option) => (
    <button
    className="learning-option-button"
    key={option.id}
    onClick={option.handler}
    >
      {option.text}
    </button>
  ));
  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
