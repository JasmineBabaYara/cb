import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../styles/loginAndSign-upStyles/welcomePage.css";

// Welcome page, contains welcome message and sign in and sign out pages

class Welcome extends Component {
    render() {
        return (
            <div className="welcome-container">
                <div className="welcome-div">
                    <h1 className="welcome-main">Welcome</h1>
                    <p className="welcome-message">
                        lorem ipsum a lor emu ipsum lips sldul  shf s as df ha faenfd thsktj sfja hfna feoapo a sjhf jsosm jf fhgjksjs ahsd a fajf? ahd fa! A df ahd afdsjfa. Ahf afaAdf fjhajf. 
                    </p>
                    <div className="btn-div">
                        <Link to="/home">
                        <button className="wbtn w-sign-up-btn">Sign In With Google</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;