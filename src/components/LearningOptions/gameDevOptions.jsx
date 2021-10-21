import React from "react";

import "./LearningOptions.css";

const Certification = (props) => {
 // Asks for level of education, and certificates if available

 const options = [
   {
     id: 1,
     text: "No Education background",
     handler: props.actionProvider.GamePlatform,
     },
   {
    id: 2,
     text: "Degree Certification",
     handler: props.actionProvider.GamePlatform,
   },
   {
    id: 3,
     text: "Online Degree Certification",
     handler: props.actionProvider.GamePlatform,
   },
   {
    id: 4,
     text: "Masters Certification",
     handler: props.actionProvider.GamePlatform,
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


const DevelopmentPlatform = (props) => {
  // Choose between cross-platform or mobile or desktop gmae dev
  const options = [
    {
      text: "Mobile",
      handler: props.actionProvider.MobileGamePlatform,
      id: 1,
    },
    {
      text: "Desktop",
      handler: props.actionProvider.DesktopOption,
      id: 2,
    },
    {
      text: "Console",
      handler: props.actionProvider.ConsoleMessage,
      id: 3,
    },
    {
      text: "Cross-Platform",
      handler: props.actionProvider.handleBoolNo,
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
};

const MobilePlatform = (props) => {
  // Choose between android, ios, windows, and cross-platform
  const options = [
    {
      text: "Android",
      handler: props.actionProvider.AndroidMessage,
      id: 1,
    },
    {
      text: "IOS",
      handler: props.actionProvider.IOSMessage,
      id: 2,
    },
    {
      text: "Windows",
      handler: () => props.actionProvider.handleReturn("Windows"),
      id: 3,
    },
    {
      text: "Cross-Platform",
      handler: props.actionProvider.CrossPlatformMessage,
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
};

const Android = (props) => {
  // Choose between android, ios, windows, and cross-platform
  const options = [
    {
      text: "Yes, I have.",
      handler: props.actionProvider.AndroidToolsOption,
      id: 1,
    },
    {
      text: "No, I don't.",
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

const AndroidGameEngineTools = (props) => {
  // Choose between android, ios, windows, and cross-platform
  const options = [
    {
      text: "Antiryad Gx",
      handler: props.actionProvider.ExperienceInGameDev,
      id: 1,
    },
    {
      text: "Blend4Web",
      handler: props.actionProvider.ExperienceInGameDev,
      id: 2,
    },
    {
      text: "Buildbox",
      handler: props.actionProvider.ExperienceInGameDev,
      id: 3,
    },
    {
      text: "Anura",
      handler: props.actionProvider.ExperienceInGameDev,
      id: 4,
    },
    {
      text: "Clickteam Fusion",
      handler: props.actionProvider.ExperienceInGameDev,
      id: 5,
    },
    {
      text: "Marmalade",
      handler: props.actionProvider.ExperienceInGameDev,
      id: 6,
    }
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



const ExperienceInGameDev = (props) => {
  // Years of experience
  const options = [
    {
      text: "Less than 5 months",
      handler: props.actionProvider.MindSkillTest,
      id: 1,
    },
    {
      text: "Within 5 months to 1yr",
      handler: props.actionProvider.MindSkillTest,
      id: 2,
    },
    {
      text: "3yrs+",
      handler: props.actionProvider.MindSkillTest,
      id: 3,
    },
    {
      text: "5yrs+",
      handler: props.actionProvider.MindSkillTest,
      id: 4,
    },
    {
      text: "10yrs+",
      handler: props.actionProvider.MindSkillTest,
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

const MindSkillTest = (props) => {
  // Creativity & Problem solving
  const options = [
    {
      text: "1 - 3",
      handler: props.actionProvider.TestQuestion2,
      id: 1,
    },
    {
      text: "4 - 6",
      handler: props.actionProvider.TestQuestion2,
      id: 2,
    },
    {
      text: "7 - 9",
      handler: props.actionProvider.TestQuestion2,
      id: 3,
    },
    {
      text: "Expert Experienced",
      handler: props.actionProvider.TestQuestion2,
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
      handler: props.actionProvider.handleBoolYes,
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

// For IOS platform 


const IOS = (props) => {

  //Cocos2d, Cocos2d-x, Cocos2d-html5    Moai SDK  Panda3D  ORX   OpenSimulator

  const options = [
    {
      text: "Cocos2d, Cocos2d-x, Cocos2d-html5",
      handler: props.actionProvider.ExperienceInGameDev,
      id: 1,
    },
    {
      text: "Moai SDK",
      handler: props.actionProvider.ExperienceInGameDev,
      id: 2,
    },
    {
      text: "Panda3D",
      handler: props.actionProvider.ExperienceInGameDev,
      id: 3,
    },
    {
      text: "ORX",
      handler: props.actionProvider.ExperienceInGameDev,
      id: 4,
    },
    {
      text: " OpenSimulator",
      handler: props.actionProvider.ExperienceInGameDev,
      id: 5,
    },
    {
      text: "Solar2D",
      handler: props.actionProvider.ExperienceInGameDev,
      id: 6,
    },
    {
      text: "No and Return",
      handler: props.actionProvider.handleBoolNo,
      id: 7,
    }
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
 

// Cross-platform 

const CrossPlatformMobile = (props) => {

  //Cocos2d, Cocos2d-x, Cocos2d-html5    Moai SDK  Panda3D  ORX   OpenSimulator

  const options = [
    {
      text: "A-Frame (VR)",
      handler: props.actionProvider.ExperienceInGameDev,
      id: 1,
    },
    {
      text: "Antiryad Gx",
      handler: props.actionProvider.ExperienceInGameDev,
      id: 2,
    },
    {
      text: "Cry Engine",
      handler: props.actionProvider.ExperienceInGameDev,
      id: 3,
    },
    {
      text: "Anura",
      handler: () => props.actionProvider.handleReturn("Anura"),
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

export {DevelopmentPlatform, MobilePlatform, Android, IOS, CrossPlatformMobile, Certification , AndroidGameEngineTools, ExperienceInGameDev, MindSkillTest, TestQuestion2, Location};