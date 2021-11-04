import React from 'react';
import { Component } from 'react';

//Import template folder Components
import Nav from "./Nav";
import Courses from './Courses';
import MidToFooter from "./midToFooter"

// home page with nav, courses and midToFooter components

class HomePage extends Component {
    render() {
        return (
            <>
            <Nav />
            <Courses />
            <MidToFooter />
            </>
        )
    };
}

export default HomePage;