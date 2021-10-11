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

  mobileDevOptionsOne = () => {
    const message = this.createChatBotMessage(
      "Choose one of the following skills...",
      {
        widget: "MobileDevOptionsOne",
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
