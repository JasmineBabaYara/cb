import React from "react";

import "./LearningOptions.css";

const MobileDevOptionsOne = (props) => {
  const options = [
    {
      text: "Cross Platform",
      handler: props.actionProvider.handleBoolYes,
      id: 1,
    },
    {
      text: "Native",
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

export default MobileDevOptionsOne;
