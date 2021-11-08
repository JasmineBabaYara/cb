import React from 'react';
import { Component } from 'react';

//Import template folder Components
import Nav from "./Nav";
import Courses from './Courses';
import MidToFooter from "./midToFooter";

// home page with nav, courses and midToFooter components

class HomePage extends Component {
    render() {
        return (
            <div className="homepage-container">
            <Nav />
            <Courses />
            <MidToFooter />
            </div>
        )
    };
}

export default HomePage;