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

  noJobAvailable = () => {
    const message = this.createChatBotMessage(
      "There are no jobs available at the moment. Please check back later."
    );

    this.updateChatbotState(message);
  };

  Platform = () => {
    const message = this.createChatBotMessage("Choose preferred platform.", {
      widget: "Platform",
    });

    this.updateChatbotState(message);
  };

  CrossFramework = () => {
    const message = this.createChatBotMessage("Choose your preferred option.", {
      widget: "CrossFramework",
    });

    this.updateChatbotState(message);
  };

  NativeFramework = () => {
    const message = this.createChatBotMessage("Choose your preferred option.", {
      widget: "NativeFramework",
    });

    this.updateChatbotState(message);
  };

  ReactExperience = () => {
    const message = this.createChatBotMessage(
      "How many Years of Experience do you have?",
      {
        widget: "ReactExperience",
      }
    );

    this.updateChatbotState(message);
  };
  FlutterExperience = () => {
    const message = this.createChatBotMessage(
      "How many Years of Experience do you have?",
      {
        widget: "FlutterExperience",
      }
    );

    this.updateChatbotState(message);
  };
  AndroidExperience = () => {
    const message = this.createChatBotMessage(
      "How many Years of Experience do you have?",
      {
        widget: "AndroidExperience",
      }
    );

    this.updateChatbotState(message);
  };
  IOSExperience = () => {
    const message = this.createChatBotMessage(
      "How many Years of Experience do you have?",
      {
        widget: "IOSExperience",
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

  CrossReactRequirement = () => {
    const message = this.createChatBotMessage(
      "'Nobel Cyber Inc.' wants an employee like you but requires these skills - Javascript, React Native, Api, SQL, OOP, unit testing, Git. Do you have all these skills",
      {
        widget: "Requirement",
      }
    );

    this.updateChatbotState(message);
  };

  CrossFlutterRequirement = () => {
    const message = this.createChatBotMessage(
      "'Nobel Cyber Inc.' wants an employee like you but requires these skills - Dart, Flutter, Api, SQL, OOP, unit testing, Git. Do you have all these skills",
      {
        widget: "Requirement",
      }
    );

    this.updateChatbotState(message);
  };

  NativeAndroidRequirement = () => {
    const message = this.createChatBotMessage(
      "'Droid Ideal Technologies' wants an employee like you but requires these skills - Java, Kotlin, linux, Api, SQL, OOP, Unit testing, Git. Do you have all these skills",
      {
        widget: "Requirement",
      }
    );

    this.updateChatbotState(message);
  };

  NativeIOSRequirement = () => {
    const message = this.createChatBotMessage(
      "'Kava tech Ltd.' wants an employee like you but requires these skills - Swift, linux, Api, SQL, OOP, Unit testing, Git. Do you have all these skills",
      {
        widget: "Requirement",
      }
    );

    this.updateChatbotState(message);
  };

  handleBoolYes = () => {
    const message = this.createChatBotMessage(
      "Great! Reach them on 030 000 000, submit your cv to them and prepare for an interview from them.",
      {
        widget: "javascriptLinks",
      },
    );

    this.updateChatbotState(message);
  };

  handleBoolNo = () => {
    const message = this.createChatBotMessage(
      "I'm Sorry. Please take sometime, get familiar with all these skills and come back when you're done. Thank You. These are links to udemy course to guide you."
      // https://www.udemy.com/courses/search/?src=ukw&q=mysql
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
