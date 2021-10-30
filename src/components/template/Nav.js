import React from "react";

//Import custom styling
import "../../styles/nav.css";

// nav and nav secion of home or main page
export default function Nav() {
  return (
    <>
      <div className="nav-wrapper">
        <p className="nav-title">JOB COACH</p>
        <div className="settings-icon">
            <button>Settings</button>
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
