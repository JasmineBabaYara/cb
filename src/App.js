import React from "react";
import "./App.css";


//Import Components
import Courses from "./components/template/Courses";
import MidToFooter from "./components/template/midToFooter";
import Nav from "./components/template/Nav";


function App() {
  return (<>
      <Nav />
      <Courses />
      <MidToFooter />
      </>
  );
}

export default App;
