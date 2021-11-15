import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import firebase from "./Firebase/firebase";

// Pages
import Welcome from "./components/template/welcomePage";
import HomePage from "./components/template/HomePage";
import SettingsPage from "./components/template/settingsPage";

// Chatbot config
import Chatbot from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";

//using if else statements to route through the pages if user signed in or not 
function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(true);
  const [username, setUsername] = useState(null);
  const [profileImg, setProfileImg] = useState(null);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUsername(user.displayName);
      setProfileImg(user.photoURL)
      return setIsUserSignedIn(true);
    }
    setIsUserSignedIn(false);
  });

  // if (isUserSignedIn === true) {
  console.log("user");
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage username={username} IsSignedIn={isUserSignedIn} />} />
        <Route path="/settings" element={<SettingsPage profileImg={profileImg} />} />
        <Route path="/chatbot" element={<Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} className="chatbot" />} />
        <Route path="/" exact element={<Welcome IsSignedIn={isUserSignedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
