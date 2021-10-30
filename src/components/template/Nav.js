import React from "react";

// Import declarative routing
import { Link } from "react-router-dom";

//Import custom styling
import "../../styles/nav.css";

// nav and nav secion of home or main page
export default function Nav() {
  return (
    <>
      <div className="nav-wrapper">
        <p className="nav-title">JOB COACH</p>
        <div className="settings-icon">
          <Link to="SettingsPage">
            <button>Settings</button>
          </Link>
        </div>
      </div>
      <section className="nav-section">
        <p className="greeting-message">Hello,</p>
        <p className="username">USER NAME</p>
        <p className="course-header">FREE COURSES</p>
      </section>
    </>
  );
}
