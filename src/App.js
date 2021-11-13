import React, { useState } from "react";
import { Route } from "react-router";
import "./App.css";
import firebase from "./Firebase/firebase";

//Compnents of pages to be rendered
import Welcome from "./components/welcomePage";
import HomePage from "./components/template/HomePage";
import SettingsPage from "./components/settingsTemplate/settingsPage";

//using if else statements to route through the pages if user signed in or not 
function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(true);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      return setIsUserSignedIn(true);
    }

    setIsUserSignedIn(false);
  });

  if (isUserSignedIn === true) {
    return (
      <>
        <Route path="/home" component={HomePage} />
        <Route path="/settings" component={SettingsPage} />
      </>
    );
  } else {
    return <Route path="/" exact component={Welcome} />;
  }
}

export default App;
