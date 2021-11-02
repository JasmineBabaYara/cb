import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/settings/settingspage.css";


// settings page
export default class SettingsPage extends Component {
  render(){
  return (
    <div className="settings-container">
      <div className="return-btn"><Link to="/home">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
</svg></Link>
      </div>
      <div className="s-img-div">
      <div className="setting-img"></div>
      </div>
      <p className="account-title">ACCOUNT SETTINGS</p>
      <div className="settings-section">
      <div className="account-info">
        <div className="div">
          <input placeholder="Set Full Name"/>
          <button className="btn">Save</button>
        </div>
        <div className="contact-div div">
          <input placeholder="Set contact" />
          <button className="btn">Save</button>
        </div>
        <div className="div">
          <input  placeholder="Choose category" />
          <button className="btn">Save</button>
        </div>
        </div>
        <div className="optional-settings">
        <div className="notifications-div">
          <p className="notifications">Allow Notifications</p>
          <button className="notifications-btn">On</button>
        </div>
        <p className="faqs">FAQS</p>
        <p className="feedback">SEND FEEDBACK</p>
        <p className="about">ABOUT</p>
      </div>
      <div className="footer-div"><button className="reset">RESET</button>
        <div className="log-out"><Link to="/"><button className="logout-btn">LOGOUT</button></Link></div></div>
        </div>
    </div>
  )
  }
}


