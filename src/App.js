import React from "react";
import "./App.css";

//Import Components
import Courses from "./components/template/Courses";
import MidToFooter from "./components/template/MidToFooter";
import Nav from "./components/template/Nav";
import SettingsPage from "./components/settingsTemplate/SettingsPage";

// Import declarative routing components
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <Nav />
      <Courses />
      <MidToFooter />
      <Switch>
        <Route path="/settingspage" component={SettingsPage} />
      </Switch>
    </Router>
  );
}

export default App;
