import React from 'react';
import "../../styles/loginAndSign-upStyles/login.css"
/* login page of job coach application
Job coach logo text
Join job coach
sign in with google button : google img
sign in with microsoft : button microsoft img
sign in with email : email img
*/

function Login() {
    return (
        <div className="login-page">
            <div className="logo-div">
            <p className="logo-text">JOB COACH</p>
            </div>
            <section className="sign-in-section">
                <button className="sign-in-button">Sign in with Google</button>
                <p className="or">or</p>
                <button className="sign-in-button">Sign in with Email</button>
            </section>
            <div className="footer">
                <p className="footer-text">Don't have an account? </p>
                <p className="sign-up-text">Sign Up</p>
            </div>
        </div>
    );
}

export default Login;