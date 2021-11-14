import React, { useState } from "react";
import { Route } from "react-router";
import "./App.css";
import firebase from "./Firebase/firebase";

//Compnents of pages to be rendered
import Welcome from "./components/template/welcomePage";
import HomePage from "./components/template/HomePage";
import SettingsPage from "./components/template/settingsPage";

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

  if (isUserSignedIn === true) {
    // console.log(user, "user");
    return (
      <>
        <Route path="/home" component={() => <HomePage username={username} />} />
        <Route path="/settings" component={() => <SettingsPage profileImg={profileImg} />} />
      </>
    );
  } else {
    return <Route path="/" exact component={() => <Welcome />} />;
  }
}

export default App;
