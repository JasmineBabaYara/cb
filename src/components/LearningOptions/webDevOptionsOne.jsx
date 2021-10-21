import React from "react";

import "./LearningOptions.css";

const WebDevOptionsOne = (props) => {
  const options = [
    {
      text: "Frontend",
      handler: props.actionProvider.noJobAvailable,
      id: 1,
    },
    {
      text: "Backend",
      handler: props.actionProvider.noJobAvailable,
      id: 2,
    },
    {
      text: "Fullstack",
      handler: props.actionProvider.noJobAvailable,
      id: 3,
    },
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

export default WebDevOptionsOne;
