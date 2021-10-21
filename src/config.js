import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import WebDevOptionsOne from "./components/LearningOptions/webDevOptionsOne";
import {
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
} from "./components/LearningOptions/mobileDevOptions";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";
import { DevelopmentPlatform, MobilePlatform, Certification, Android, IOS, AndroidGameEngineTools, CrossPlatformMobile, MindSkillTest, ExperienceInGameDev } from "./components/LearningOptions/gameDevOptions";
import { Desktop, MicrosoftWindowsGameEngineOptions, MacOS, Console,  ReturnStep } from "./components/LearningOptions/gameDevOptions2";
 
const config = {
  botName: "AI",
  initialMessages: [
    createChatBotMessage(`Hi, I'm here to help \n\n you find your dream Job!`, {
      // widget: "learningOptions",
    }),
    createChatBotMessage("Choose one of the available jobs below.", {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "WebDevOptionsOne",
      widgetFunc: (props) => <WebDevOptionsOne {...props} />,
    },
    {
      widgetName: "Platform",
      widgetFunc: (props) => <Platform {...props} />,
    },
    {
      widgetName: "CrossFramework",
      widgetFunc: (props) => <CrossFramework {...props} />,
    },
    {
      widgetName: "NativeFramework",
      widgetFunc: (props) => <NativeFramework {...props} />,
    },

    {
      widgetName: "ReactExperience",
      widgetFunc: (props) => <ReactExperience {...props} />,
    },
    {
      widgetName: "FlutterExperience",
      widgetFunc: (props) => <FlutterExperience {...props} />,
    },
    {
      widgetName: "AndroidExperience",
      widgetFunc: (props) => <AndroidExperience {...props} />,
    },
    {
      widgetName: "IOSExperience",
      widgetFunc: (props) => <IOSExperience {...props} />,
    },
    {
      widgetName: "ExperienceInGameDev",
      widgetFunc: (props) => <ExperienceInGameDev {...props} />,
    },
    {
      widgetName: "TestQuestion1",
      widgetFunc: (props) => <TestQuestion1 {...props} />,
    },
    {
      widgetName: "MindSkillTest",
      widgetFunc: (props) => <MindSkillTest {...props} />,
    },
    {
      widgetName: "TestQuestion2",
      widgetFunc: (props) => <TestQuestion2 {...props} />,
    },
    {
      widgetName: "Location",
      widgetFunc: (props) => <Location {...props} />,
    },
    {
      widgetName: "Requirement",
      widgetFunc: (props) => <Requirement {...props} />,
    },
    {
      widgetName: "DevelopmentPlatform",
      widgetFunc: (props) => <DevelopmentPlatform {...props} />
    },
    {
      widgetName: "MobilePlatform",
      widgetFunc: (props) => <MobilePlatform {...props} />
    },
    {
      widgetName: "DesktopOption",
      widgetFunc: (props) => <Desktop {...props} />,
    },
    {
      widgetName: "Console",
      widgetFunc: (props) => <Console {...props} />,
    },
    {
      widgetName: "Certification",
      widgetFunc: (props) => <Certification {...props} />,
    },
    {
      widgetName: "Android",
      widgetFunc: (props) => <Android {...props} />,
    },
    {
      widgetName: "AndroidGameEngineTools",
      widgetFunc: (props) => <AndroidGameEngineTools {...props} />,
    },
    {
      widgetName: "IOS",
      widgetFunc: (props) => <IOS {...props} />,
    },
    {
      widgetName: "CrossPlatform",
      widgetFunc: (props) => <CrossPlatformMobile {...props} />,
    },
    {
      widgetName: "MSWindowsMessage",
      widgetFunc: (props) => <MicrosoftWindowsGameEngineOptions {...props} />,
    },
    {
      widgetName: "MacOS",
      widgetFunc: (props) => <MacOS {...props} />,
    },
    {
      widgetName: "ReturnStep",
      widgetFunc: (props) => <ReturnStep {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Database Administrator",
            url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Web Developer",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Hardware Engineer",
            url: "https://frontendmasters.com",
            id: 3,
          },
          {
            text: "Systems Analyst",
            url: "https://frontendmasters.com",
            id: 4,
          },
        ],
      },
    },
  ],
};

export default config;
