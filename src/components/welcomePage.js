import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../Firebase/firebase";
import "../styles/loginAndSign-upStyles/welcomePage.css";

// Welcome page, contains welcome message and sign in and sign out pages

class Welcome extends Component {
  constructor() {
    super();

    this.signIn = this.signIn.bind(this);
  }

  signIn() {
    var google_provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(google_provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="welcome-container">
        <div className="welcome-div">
          <h1 className="welcome-main">Welcome</h1>
          <p className="welcome-message">
            lorem ipsum a lor emu ipsum lips sldul shf s as df ha faenfd thsktj
            sfja hfna feoapo a sjhf jsosm jf fhgjksjs ahsd a fajf? ahd fa! A df
            ahd afdsjfa. Ahf afaAdf fjhajf.
          </p>
          <div className="btn-div">
            <Link to="/home">
              <button className="wbtn w-sign-up-btn" onClick={this.signIn}>
                Sign In With Google
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
