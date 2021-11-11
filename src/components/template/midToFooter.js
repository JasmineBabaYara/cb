import React, { Component } from "react";
import "../../styles/homePage/midToFooter.css";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// half of screen to footer section or midToFooter section of main page
class midToFooter extends Component {
  render() {
    return (
      <>
        <div className="midToFooter">
          <div className="title-container"><p className="midToFooter-title">IMMEDIATE OFFERS</p></div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Software Engineer, Research</Accordion.Header>
              <Accordion.Body>
              <p className="bold-p-tag">Google  Accra, Greater Accra, Ghana
                  68 applicants</p><p><em> 1 week ago </em></p>
              Minimum qualifications:
              Bachelor's degree in Computer Science, a related technical field, or equivalent practical experience.
              Software engineering experience with Python.
              Ability to speak and write in English fluently.

              Preferred qualifications:
              Master's degree or PhD in Computer Science, Artificial Intelligence, Machine Learning, or related technical field.
              Experience with Machine Learning libraries (TensorFlow, JAX, etc.).
              Experience working with real-world or geospatial data.
              <p/>
              <p>Seniority level</p>
          <p className="bold-p-tag"> Not Applicable</p>
              <p>Employment type</p>
              <p className="bold-p-tag">Full-time</p>
              <p>Job function</p>
              <p className="bold-p-tag">Engineering and Information Technology</p>
              <p>Industries</p>
              <p className="bold-p-tag">Information Services and Internet Publishing</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Software Engineer</Accordion.Header>
              <Accordion.Body>
                <p className="bold-p-tag">Digital Age Network  Greater Accra, Ghana  Be among the first 25 applicants</p> <p><em> 2 weeks ago </em></p>
                The ideal candidate will be responsible for developing high-quality applications. They will also be responsible for designing and implementing testable and scalable code.  Should have experience in designing or be willing to payment systems and APIs
                <p className="bold-p-tag">Responsibilities</p>
                <p>
                  <ul>
                    <li>Develop quality software and web applications</li>
                    <li>Analyze and maintain existing software applications</li>
                    <li>Design highly scalable, testable code</li>
                    <li>Discover and fix programming bugs</li>
                  </ul>
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Web Developer at SOS-Hermann Gmeiner International College</Accordion.Header>
              <Accordion.Body>
                <p className="bold-p-tag">sos  Accra, Greater Accra, Ghana Be among the first 25 applicants</p><p><em>2 months ago</em></p>
                <p className="bold-p-tag"> Main Responsibilities Include</p>
              The SOS-HGIC brings together almost 360 secondary school students from more than 12 African nations. The school offers both an International Baccalaureate Middle Years Program (for children aged 11-16) and an International Baccalaureate Diploma Program (for children aged 16-19). More information can be found here:
              Work with a remote team to design features to be implemented into the WISE Portal
              Design both the front-end user interface and the back-end architecture of new features and improvements
              Perform maintenance on existing features within the platform
              Write maintainable and testable code
              <p className="bold-p-tag">Qualification Required & Experience</p>
              <ul> <li>Bachelor’s Degree in computer science or a related field; equivalent experience will be considered.
              Further Consideration Will Be Given To Candidates That Possess</li>
              <li>Real-time software development experience.</li>
              <li>Native mobile app development (Android or iOS)</li></ul>
              <p className="bold-p-tag">Required Technical Skills</p>
              Ruby on Rails / a MVC framework
              Javascript (with React, Vue or Angular as an asset)
              HTML, CSS / SCSS
              Relational Databases – MySQL, PostgreSQL
              Cloud Server Management (AWS, Azure, Digital Ocean, etc.)
              Experience with Git / any VCS
              Ability to design and implement both front end interfaces and backend architectures and APIs
              Experience with using and designing REST APIs
              Knowledge of AWS Lambda, EC2, RDS, Heroku, Elasticsearch, Node.js, Express, or Django will be considered a plus.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <button className="cb-btn">Bot</button>
        </div>
      </>
    );
  };
}
export default midToFooter;
