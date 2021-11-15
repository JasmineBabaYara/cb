import React from 'react';
import { Component } from 'react';

//Import template folder Components
import Nav from "./Nav";
import Courses from './Courses';
import MidToFooter from "./midToFooter";
import { Navigate } from 'react-router';

// home page with nav, courses and midToFooter components

class HomePage extends Component {
    render() {
        if (this.props.IsSignedIn) {
            return (
                <div className="homepage-container">
                    <Nav username={this.props.username} />
                    <Courses />
                    <MidToFooter />
                </div>
            )
        } else {
            return <Navigate to="/" />
        }
    };
}

export default HomePage;