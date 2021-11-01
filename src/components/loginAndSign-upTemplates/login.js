import React, { Component } from 'react';
import "../../styles/loginAndSign-upStyles/login.css"
/* login page of job coach application
Job coach logo text
sign in with google button : google img
sign in with microsoft : button microsoft img
sign in with email : email img
*/

class Login extends Component {
    render() {
        return (
            <div className="login-page">
                <img src="close.png" className="close-btn"/>
                <p 
                className="welcome-back-message">Welcome Back</p>
                <div className="sign-in-form">
                    <input className="input em" type="email" placeholder="Email address"/>
                    <input className="input psd" type="password" placeholder="Password"/>
                </div>
                <div className="sign-in-div">
                    <p className="sign-in-message">Sign in</p><svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg>
                </div>
                <div className="options">
                    <img src="google.png" className="sign-in-with-img g" alt="google"/>
                    <img src="facebook.png" className="sign-in-with-img f" alt="facebook"/>
                    <img src="apple.png" className="sign-in-with-img a" alt="apple-icloud"/>
                </div>
                <footer>
                    <p className="link">Sign up</p>
                    <p className="link">Forgot password?</p>
                </footer>
            </div>
        );
    }
    
}

export default Login;