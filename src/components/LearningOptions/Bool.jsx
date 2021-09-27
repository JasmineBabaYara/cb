import React from "react";

import "./LearningOptions.css";

const Bool = (props) => {
  const options = [
    {
      text: "Yes",
      handler: props.actionProvider.handleBoolYes,
      id: 1,
    },
    {
      text: "No",
      handler: props.actionProvider.handleBoolNo,
      id: 2,
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

export default Bool;
