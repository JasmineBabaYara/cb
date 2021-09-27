import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Bool from "./components/LearningOptions/Bool";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";

const config = {
  botName: "AI",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help you find your dream Job!", {
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
      widgetName: "Bool",
      widgetFunc: (props) => <Bool {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Database Administrator",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Web Developer",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
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
