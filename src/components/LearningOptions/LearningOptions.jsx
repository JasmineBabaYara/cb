import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "Database Administrator",
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
    { text: "Web Developer", handler: props.actionProvider.handleJavascriptList , id: 2 },
    { text: "Hardware Engineer", handler: props.actionProvider.handleJavascriptList , id: 3 },
    { text: "Systems Analyst", handler: props.actionProvider.handleJavascriptList , id: 4 },
    { text: "Systems Security", handler: props.actionProvider.handleJavascriptList , id: 5 },
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
