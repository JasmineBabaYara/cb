import React from "react";

import "./LearningOptions.css";

const Platform = (props) => {
  // Choose between cross-platform or native app dev
  const options = [
    {
      text: "Cross Platform",
      handler: props.actionProvider.Framework,
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

const Framework = (props) => {
  // Choose between react native or flutter
  const options = [
    {
      text: "React Native",
      handler: props.actionProvider.Experience,
      id: 1,
    },
    {
      text: "Flutter",
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

const Experience = (props) => {
  // Years of experience
  const options = [
    {
      text: "None",
      handler: props.actionProvider.TestQuestion1,
      id: 1,
    },
    {
      text: "1yr",
      handler: props.actionProvider.TestQuestion1,
      id: 2,
    },
    {
      text: "3yrs+",
      handler: props.actionProvider.TestQuestion1,
      id: 3,
    },
    {
      text: "5yrs+",
      handler: props.actionProvider.TestQuestion1,
      id: 4,
    },
    {
      text: "10yrs+",
      handler: props.actionProvider.TestQuestion1,
      id: 5,
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

const TestQuestion1 = (props) => {
  // Creativity & Problem solving
  const options = [
    {
      text: "1",
      handler: props.actionProvider.TestQuestion2,
      id: 1,
    },
    {
      text: "2",
      handler: props.actionProvider.TestQuestion2,
      id: 2,
    },
    {
      text: "3",
      handler: props.actionProvider.TestQuestion2,
      id: 3,
    },
    {
      text: "4",
      handler: props.actionProvider.TestQuestion2,
      id: 4,
    },
    {
      text: "5",
      handler: props.actionProvider.TestQuestion2,
      id: 5,
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

const TestQuestion2 = (props) => {
  // Teamwork & Communication skills.
  const options = [
    {
      text: "1",
      handler: props.actionProvider.Location,
      id: 1,
    },
    {
      text: "2",
      handler: props.actionProvider.Location,
      id: 2,
    },
    {
      text: "3",
      handler: props.actionProvider.Location,
      id: 3,
    },
    {
      text: "4",
      handler: props.actionProvider.Location,
      id: 4,
    },
    {
      text: "5",
      handler: props.actionProvider.Location,
      id: 5,
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

const Location = (props) => {
  // Preferred Location
  const options = [
    {
      text: "Accra",
      handler: props.actionProvider.handleBoolYes,
      id: 1,
    },
    {
      text: "Kumasi",
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

export { Platform, Framework, Experience, TestQuestion1, TestQuestion2, Location };
