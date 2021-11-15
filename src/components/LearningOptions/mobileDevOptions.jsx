import React from "react";

import "./LearningOptions.css";

const Platform = (props) => {
  // Choose between cross-platform or native app dev
  const options = [
    {
      text: "Cross Platform",
      handler: props.actionProvider.CrossFramework,
      id: 1,
    },
    {
      text: "Native",
      handler: props.actionProvider.NativeFramework,
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

const CrossFramework = (props) => {
  // Choose between react native or flutter
  const options = [
    {
      text: "React Native",
      handler: props.actionProvider.ReactExperience,
      id: 1,
    },
    {
      text: "Flutter",
      handler: props.actionProvider.FlutterExperience,
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

// let isNative = null;

const NativeFramework = (props) => {
  // Choose between java or kotlin
  // isNative = true;
  const options = [
    {
      text: "Java/Kotlin",
      handler: props.actionProvider.AndroidExperience,
      id: 1,
    },
    {
      text: "Swift",
      handler: props.actionProvider.IOSExperience,
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

let isReact = null;

const ReactExperience = (props) => {
  // Years of experience
  isReact = true;
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

let isFlutter = null;

const FlutterExperience = (props) => {
  // Years of experience
  isFlutter = true;
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

let isAndroid = null;

const AndroidExperience = (props) => {
  // Years of experience
  isAndroid = true;
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

let isIOS = null;

const IOSExperience = (props) => {
  // Years of experience
  isIOS = true;
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
  if (isReact) {
    const options = [
      {
        text: "Accra",
        handler: props.actionProvider.CrossReactRequirement,
        id: 1,
      },
      {
        text: "Kumasi",
        handler: props.actionProvider.CrossReactRequirement,
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
  } else if (isFlutter) {
    const options = [
      {
        text: "Accra",
        handler: props.actionProvider.CrossFlutterRequirement,
        id: 1,
      },
      {
        text: "Kumasi",
        handler: props.actionProvider.CrossFlutterRequirement,
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
  } else if (isAndroid) {
    const options = [
      {
        text: "Accra",
        handler: props.actionProvider.NativeAndroidRequirement,
        id: 1,
      },
      {
        text: "Kumasi",
        handler: props.actionProvider.NativeAndroidRequirement,
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
  } else if (isIOS) {
    const options = [
      {
        text: "Accra",
        handler: props.actionProvider.NativeIOSRequirement,
        id: 1,
      },
      {
        text: "Kumasi",
        handler: props.actionProvider.NativeIOSRequirement,
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
  }
};

const Requirement = (props) => {
  // Jobs ready for employee like the user
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

export {
  Platform,
  CrossFramework,
  NativeFramework,
  ReactExperience,
  FlutterExperience,
  AndroidExperience,
  IOSExperience,
  TestQuestion1,
  TestQuestion2,
  Location,
  Requirement,
};
