// MessageParser starter code in MessageParser.js
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();


    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    } else
      // web dev
      if (lowerCaseMessage.includes("web developer")) {
        this.actionProvider.WebDevField();
      } else if (lowerCaseMessage.includes("frontend") || lowerCaseMessage.includes("backend") || lowerCaseMessage.includes("fullstack")) {
        this.actionProvider.noJobAvailable();
      } else
        // mobile dev
        if (lowerCaseMessage.includes("mobile developer")) {
          this.actionProvider.Platform();
        } else if (lowerCaseMessage.includes("cross platform")) {
          this.actionProvider.CrossFramework();
        } else if (lowerCaseMessage.includes("react native")) {
          this.actionProvider.ReactExperience();
        } else if (lowerCaseMessage.includes("native")) {
          this.actionProvider.NativeFramework();
        } else if (lowerCaseMessage.includes("flutter")) {
          this.actionProvider.FlutterExperience();
        } else if (lowerCaseMessage.includes("java") || lowerCaseMessage.includes("kotlin") || lowerCaseMessage.includes("java/kotlin")) {
          this.actionProvider.AndroidExperience();
        } else if (lowerCaseMessage.includes("swift")) {
          this.actionProvider.IOSExperience();
        }
        else {
          this.actionProvider.didNotUnderstand();
        }
  }
}

export default MessageParser;
