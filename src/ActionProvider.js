
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
// recreated learning option for step back to select available sectors
  learningOptions = () => {
    const message = this.createChatBotMessage("Choose one of the available jobs below",
    {
      widget: "learningOptions"
    });

    this.updateChatbotState(message);
  };

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
      "On a scale of 1-5, how would you grade your problem solving ability & creativity?",
      {
        widget: "TestQuestion1",
      }
    );

    this.updateChatbotState(message);
    };

    MindSkillTest = () => {
      const message = this.createChatBotMessage(
        "On the scale below, how would you grade your problem solving ability & creativity?",
        {
          widget: "MindSkillTest",
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
  
  GamePlatform = () => {
    const message = this.createChatBotMessage(
      "Choose your preferred game development platform",
      {
        widget: "DevelopmentPlatform",
      }
    );

    this.updateChatbotState(message);
  };

  Certification = () => {
    const message = this.createChatBotMessage(
      "Please highlight your level of education in the options below",
      {
        widget: "Certification",
      }
    );

    this.updateChatbotState(message);
  };

  ExperienceInGameDev = () => {
    const message = this.createChatBotMessage(
      "What is the time length of experience in Android game development?",
      {
        widget: "ExperienceInGameDev",
      }
    );

    this.updateChatbotState(message);
  };

  
// actiionprovider.MobileGamePlatform when invoked displays message along with the MobilePlatform widget
  MobileGamePlatform = () => {
    const message = this.createChatBotMessage("These are the available platforms with job offers. Select your mobile development platform",
    {
      widget: "MobilePlatform",
      }
    );

      this.updateChatbotState(message);
  };

  // AndroidMessage questions them on users knowledge in most used p langs . in game dev
  AndroidMessage = () => {
    const message = this.createChatBotMessage("You must at least have indepth knowledge and use the following programming languages as per requirements set by employees; C++, C#, C, optional javascript and python. And an average skill in 2D and 3D design.",
    {
      widget: "Android"
    });

    this.updateChatbotState(message);
  };

  // Game tools selection render
  AndroidToolsOption = () => {
    const message = this.createChatBotMessage("Please select your development engine or tool. These options are in high demand by employers and the general community.", 
    {
      widget: "AndroidGameEngineTools"
    })

    this.updateChatbotState(message);
  };
  
  // IOSMessage questions them on users knowledge in most used p langs in game dev
  IOSMessage = () => {
    const message = this.createChatBotMessage("You must at least have indepth knowledge and use the following programming languages as per requirements set by employees; Objective-C, C++, C#, C. And an average skill in 2D and 3D design. If YES select your game engine tool",
    {
      widget: "IOS"
    });

    this.updateChatbotState(message);
  };

  // CrossPlatform on mobile game dev
  CrossPlatformMessage = () => {
    const message = this.createChatBotMessage("You must at least have indepth knowledge and use the following programming and scripting languages as per requirements set by employees; C++, C#, C, Objective-C, optional javascript, and python. And an average skill in 2D and 3D design.",
    {
      widget: "CrossPlatform"
    });

    this.updateChatbotState(message);
  };

  // Desktop ActionProvider Section

  DesktopOption = () => {
    const message = this.createChatBotMessage("Select your OS development platform", {
      widget: "DesktopOption"
    });

    this.updateChatbotState(message);
  };

  MsWindowsMessage = () => {
    const message = this.createChatBotMessage("As a requirement by game development companies, you must know and be able to leverage the following languages: C, Assembler, C++, Javascript, Python, GLSL, HLSL.");

    this.updateChatbotState(message);
    
    const message1 = this.createChatBotMessage("Select your OS development platform", {
      widget: "MSWindowsMessage"
    });
    this.updateChatbotState(message1);

  }

  MacOSMessage = () => {
    const message = this.createChatBotMessage("As a requirement by game development companies, you must know and be able to leverage the following languages: C, Assembler, C++, Javascript, Python, GLSL, HLSL.");

    this.updateChatbotState(message);
    
    const message1 = this.createChatBotMessage("Select your OS development platform", {
      widget: "MacOS"
    });
    this.updateChatbotState(message1);

  }
  ConsoleMessage = () => {
    const message = this.createChatBotMessage("As a requirement by game development companies, you must know and be able to leverage the following languages: C, C++, 2D and 3D design, sound effects engineering.");

    this.updateChatbotState(message);
    
    const message1 = this.createChatBotMessage("Select your console development platform", {
      widget: "Console"
    });
    this.updateChatbotState(message1);
  }

  handleReturn = (props) => {
    const message = this.createChatBotMessage(`Sorry, but there are no job requests for ${props} game developers`, {
      widget: "ReturnStep"
    });

    this.updateChatbotState(message);
  }

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
