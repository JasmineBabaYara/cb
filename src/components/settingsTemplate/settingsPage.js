import React, { Component } from "react";
import "../../styles/settingspage.css";


// settings page
export default class SettingsPage extends Component {
  render(){
  return (
    <div className="settings">
      <div className="setting-img"></div>
      <p className="account-title">ACCOUNT SETTING</p>
      <div className="account-info">
        <div className="name-div">
          <p className="name">Set Full Name</p>
          <button className="name-btn">Save</button>
        </div>
        <div className="contact-div">
          <p className="contact">Set Contact</p>
          <button className="contact-btn">Save</button>
        </div>
        <div className="category-div">
          <p className="category">Select Category</p>
          <button className="category-btn">Save</button>
        </div>
        <div className="notifications-div">
          <p className="notifications">Allow Notifications</p>
          <button className="notifications-btn">On/Off</button>
        </div>
        <p className="faqs">FAQS</p>
        <p className="feedback">SEND FEEDBACK</p>
        <p className="about">ABOUT</p>
        <p className="reset">RESET SETTINGS</p>
      </div>
        <button className="logout-btn">LOGOUT</button>
    </div>
  )
  }
}


