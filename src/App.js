import React from "react";
import { Route } from "react-router";
// import "./App.css";

//Compnents of pages to be rendered
import Welcome from "./components/welcomePage";
import Login from "./components/loginAndSign-upTemplates/login";
import SignUp from "./components/loginAndSign-upTemplates/signUp";
import HomePage from "./components/template/HomePage";
import SettingsPage from "./components/settingsTemplate/settingsPage";





function App() {
  return (
    <>
    <Route path="/home" component={HomePage}/> 
    <Route path="/login" component={Login} />
    <Route path="/sign-up" component={SignUp} />
    <Route path="/settings" component={SettingsPage} />
    <Route path="/" exact component={Welcome}/>
    </>
  );
}

export default App;
