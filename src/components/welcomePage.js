import React, { Component } from 'react';
import "../styles/loginAndSign-upStyles/welcomePage.css";

// Welcome page, contains welcome message and sign in and sign out pages

class Welcome extends Component {
    render() {
        return (
            <div className="welcome-container">
                <div className="welcome-div">
                    <h1 className="welcome-main">Welcome</h1>
                    <p className="welcome-message">New to Visual Studio? Learning a new development tool can be overwhelming. Take this step-by-step learning journey at your own pace to successfully create a simple app in any language of your choice. Let’s get started!</p>
                    <div className="btn-div">
                        <button className="btn sign-in-btn">Sign in</button>
                        <button className="btn sign-up-btn">Sign up</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;