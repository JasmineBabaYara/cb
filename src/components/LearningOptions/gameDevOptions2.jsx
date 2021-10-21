import React from 'react';

import "./LearningOptions.css";

// Game dev on desktop platforms option

const Desktop = (props) => {
    const options = [
        {
          text: "Windows",
          handler: props.actionProvider.MsWindowsMessage,
          id: 1,
        },
        {
          text: "MacOS",
          handler: props.actionProvider.MacOSMessage,
          id: 2,
        },
        {
          text: "Linux",
          handler:() => props.actionProvider.handleReturn("linux"),
          id: 3,
        },
        {
          text: "Cross-Platform",
          handler: props.actionProvider.MsWindowsMessage,
          id: 4,
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

// Game dev on windows: game engines selection
const MicrosoftWindowsGameEngineOptions = (props) => {
    const options = [
        {
          text: "4A Engine",
          handler: props.actionProvider.ExperienceInGameDev,
          id: 1,
        },
        {
          text: "Adventure Game Studio",
          handler: props.actionProvider.ExperienceInGameDev,
          id: 2,
        },
        {
          text: "Antiryad Gx",
          handler:() => props.actionProvider.handleReturn("Antiryad Gx"),
          id: 3,
        },
        {
          text: "Aurora toolset",
          handler: props.actionProvider.ExperienceInGameDev,
          id: 4,
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

function MacOS(props) {
  const options = [
    {
      text: "4A Engine",
      handler: props.actionProvider.ExperienceInGameDev,
      id: 1,
    },
    {
      text: "Almo",
      handler: props.actionProvider.ExperienceInGameDev,
      id: 2,
    },
    {
      text: "Antiryad Gx",
      handler:() => props.actionProvider.handleReturn("Antiryad Gx"),
      id: 3,
    },
    {
      text: "Aleph One",
      handler: props.actionProvider.ExperienceInGameDev,
      id: 4,
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

// Console dev platform options

const Console = (props) => {
  const options = [
      {
        text: "Play Station",
        handler: props.actionProvider.ExperienceInGameDev,
        id: 1,
      },
      {
        text: "XBOX",
        handler: props.actionProvider.ExperienceInGameDev,
        id: 2,
      },
      {
        text: "Google Stadia",
        handler:() => props.actionProvider.handleReturn("Google Stadia"),
        id: 3,
      },
      {
        text: "Nintendo Switch / WII",
        handler: props.actionProvider.ExperienceInGameDev,
        id: 4,
      },
      {
        text: "Cross-platform",
        handler: props.actionProvider.ExperienceInGameDev,
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
}

// Return step to move back to job options ie: web dev, game dev and mobile dev

function ReturnStep(props) {

  const option = props.actionProvider.learningOptions;
  const returnStep = (<button className="learning-option-button" onClick={option}>Return to Option select</button>);
  return <div className="learning-options-container">{returnStep}</div>;
}
 
export {Desktop, MicrosoftWindowsGameEngineOptions, MacOS, Console, ReturnStep};