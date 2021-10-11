class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // new method
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.");
    this.updateChatbotState(greetingMessage);
  }

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Fantastic! There are 10 companies that needs an employee like you now, but they require these skills: Python, C++, Java, JavaScript, MySQL. Do you have all these skills?",
      {
        widget: "Bool",
      }
    );

    this.updateChatbotState(message);
  };

  webDevOptionsOne = () => {
    const message = this.createChatBotMessage(
      "Choose one of the following skills...",
      {
        widget: "WebDevOptionsOne",
      }
    );

    this.updateChatbotState(message);
  };

  Platform = () => {
    const message = this.createChatBotMessage(
      "Choose preferred platform.",
      {
        widget: "Platform",
      }
    );

    this.updateChatbotState(message);
  };

  Framework = () => {
    const message = this.createChatBotMessage(
      "Choose your preferred option.",
      {
        widget: "Framework",
      }
    );

    this.updateChatbotState(message);
  };

  Experience = () => {
    const message = this.createChatBotMessage(
      "How many Years of Experience do you have?",
      {
        widget: "Experience",
      }
    );

    this.updateChatbotState(message);
  };

  TestQuestion1 = () => {
    const message = this.createChatBotMessage(
      "On a scale of 1-5, how do you grade your problem solving ability & creativity?",
      {
        widget: "TestQuestion1",
      }
    );

    this.updateChatbotState(message);
  };

  TestQuestion2 = () => {
    const message = this.createChatBotMessage(
      "How about your communication skill & teamwork?",
      {
        widget: "TestQuestion2",
      }
    );

    this.updateChatbotState(message);
  };

  Location = () => {
    const message = this.createChatBotMessage(
      "What's your preferred location?",
      {
        widget: "Location",
      }
    );

    this.updateChatbotState(message);
  };

  handleBoolYes = () => {
    const message = this.createChatBotMessage(
      "Great! Follow this link to reach these companies: www.example.com"
      // {
      //   widget: "Bool",
      // },
    );

    this.updateChatbotState(message);
  };

  handleBoolNo = () => {
    const message = this.createChatBotMessage(
      "I'm Sorry. Please take sometime, get familiar with all these skills and come back when you're done. Thank You."
      // {
      //   widget: "Bool",
      // },
    );

    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
