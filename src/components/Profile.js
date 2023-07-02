import hiredLogo from "../images/# Sangeet Dance.jpg";
import "../css/main.css";
import "../css/print.css";
import "../css/site.css";
import Pdf from "react-to-pdf";
import React from "react";

const candidateData = {
  personalData: {
    name: "Arthraj",
    age: "23",
    email: "asdfasjd@fdas.dfasd",
    phoneNumber: "2313131231",
    rollNumber: "02302dfa",
    address: "dsjfnaknfa",
  },
  skills: [
    {
      skill: "C",
      proficiency: 100,
    },
    {
      skill: "MERN",
      proficiency: 100,
    },
    {
      skill: "SQL",
      proficiency: 50,
    },
    {
      skill: "C",
      proficiency: 100,
    },
    {
      skill: "MERN",
      proficiency: 100,
    },
    {
      skill: "SQL",
      proficiency: 50,
    },
  ],
  workExperience: [
    {
      company: "dsfa",
      jobTitle: "fdsfa",
      startDate: "2023-07-07",
      endDate: "2023-07-21",
      location: "fsda",
      aboutRole: "dfads",
      certificate: "",
    },
    {
      company: "dsfa",
      jobTitle: "fdsfa",
      startDate: "2023-07-07",
      endDate: "2023-07-21",
      location: "fsda",
      aboutRole: "dfads",
      certificate: "",
    },
    {
      company: "dsfa",
      jobTitle: "fdsfa",
      startDate: "2023-07-07",
      endDate: "2023-07-21",
      location: "fsda",
      aboutRole: "dfads",
      certificate: "",
    },
  ],
  projects: [
    {
      projectName: "fdsfa",
      techUsed: "dfafd",
      startDate: "2023-07-13",
      endDate: "2023-07-18",
      aboutProject: "fsdafa",
    },
    {
      projectName: "fdsfa",
      techUsed: "dfafd",
      startDate: "2023-07-13",
      endDate: "2023-07-18",
      aboutProject: "fsdafa",
    },
    {
      projectName: "fdsfa",
      techUsed: "dfafd",
      startDate: "2023-07-13",
      endDate: "2023-07-18",
      aboutProject: "fsdafa",
    },
  ],
  education: [
    {
      institutionName: "fasdf",
      degreeName: "fdsa",
      startDate: "2023-07-25",
      endDate: "2023-07-13",
      percentage: "23",
    },
    {
      institutionName: "fasdf",
      degreeName: "fdsa",
      startDate: "2023-07-25",
      endDate: "2023-07-13",
      percentage: "23",
    },
    {
      institutionName: "fasdf",
      degreeName: "fdsa",
      startDate: "2023-07-25",
      endDate: "2023-07-13",
      percentage: "23",
    },
  ],
};

const Profile = () => {
  // const user= { name, email, role };
  const personalData = candidateData.personalData;
  const education = candidateData.education;
  const workExperience = candidateData.workExperience;
  const skills = candidateData.skills;
  const projects = candidateData.projects;
  const profileData = candidateData.profileData;
  console.log(
    personalData,
    education,
    workExperience,
    skills,
    projects,
    profileData
  );
  const ref = React.createRef();
  const options = {
    orientation: "potrait",
    unit: "in",
    // format: [16,16]
  };
  return (
    <div className="container" ref={ref}>
      <div className="cover shadow-lg bg-white">
        <div className="cover-bg p-3 p-lg-4 text-white">
          <div className="row">
            <div className="col-lg-3 col-md-5">
              <div className="avatar hover-effect bg-white shadow-sm p-1">
                <img src={profileData} width="200" height="200" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-7 text-center text-md-start">
              <h2 className="h1 mt-2">{personalData.name}</h2>
              <p> Full Stack Developer (MERN)</p>

              <Pdf
                targetRef={ref}
                filename="RESUME.pdf"
                options={options}
                scale={0.7}
              >
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
              </Pdf>
              <div className="d-print-none">
                <a
                  className="btn btn-light text-dark shadow-sm mt-1 me-1 rounded-pill"
                  href="right-resume.pdf"
                  target="_blank"
                >
                  Download CV(pdf)
                </a>
                <a
                  className="btn btn-success rounded-pill shadow-sm mt-1"
                  href="#contact"
                >
                  Developer
                </a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="placedLogo">
                <img src={hiredLogo} width="120" height="120" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="about-section pt-4 px-3 px-lg-4 mt-5">
          <div className="row">
            <div className="col-md-6">
              <h2 className="h3 mb-3">About Me</h2>
              <p>
                Hello! I'm an innovative, task-driven professional with
                experience in Web and App development. Proficient in developing
                databases, creating user interfaces, troubleshooting
                simple/complex issues, and implementing new features based on
                user feedback.
              </p>
            </div>
            <div className="col-md-5 offset-md-1">
              <div className="row mt-2">
                <div className="col-sm-4">
                  <div className="pb-1">Age</div>
                </div>
                <div className="col-sm-8">
                  <div className="pb-1 text-secondary">{personalData.age}</div>
                </div>
                <div className="col-sm-4">
                  <div className="pb-1">Email</div>
                </div>
                <div className="col-sm-8">
                  <div className="pb-1 text-secondary">
                    {personalData.email}
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="pb-1">Phone</div>
                </div>
                <div className="col-sm-8">
                  <div className="pb-1 text-secondary">
                    {personalData.phoneNumber}
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="pb-1">Address</div>
                </div>
                <div className="col-sm-8">
                  <div className="pb-1 text-secondary">
                    {personalData.address}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="d-print-none" />
        <div className="skills-section px-3 px-lg-4">
          <h2 className="h3 mb-3">Professional Skills</h2>
          <div className="row">
            {skills.map((skill) => {
              return (
                <div className="col-md-4">
                  <div className="mb-2">
                    <span>{skill.skill}</span>
                    <div className="progress my-1">
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: skill.proficiency * 4 }}
                        aria-valuenow={skill.proficiency}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <hr className="d-print-none" />
        <div className="work-experience-section px-3 px-lg-4">
          <h2 className="h3 mb-4">Work Experience</h2>
          <div className="timeline">
            <>
              {workExperience.map((workExx) => {
                return (
                  <div className="timeline-card timeline-card-primary card shadow-sm">
                    <div className="card-body">
                      <div className="h5 mb-1">
                        {workExx.jobTitle}{" "}
                        <span className="text-muted h6">
                          at {workExx.company}
                        </span>
                        <span className="" style={{ float: "right" }}>
                          {workExx.location}
                        </span>
                      </div>
                      <div className="text-muted text-small mb-2">
                        {workExx.startDate} to {workExx.endDate}
                      </div>
                      <div>{workExx.aboutRole}</div>
                    </div>
                  </div>
                );
              })}
            </>
          </div>
        </div>
        <hr className="d-print-none" />
        <div className="page-break"></div>
        <div className="education-section px-3 px-lg-4 pb-4">
          <h2 className="h3 mb-4">Projects</h2>
          <div className="timeline">
            {projects.map((project, index) => {
              return (
                <>
                  <div className="timeline-card timeline-card-success card shadow-sm">
                    <div className="card-body">
                      <div className="h5 mb-1">
                        {project.projectName}{" "}
                        <span className="text-muted h6">
                          using {project.techUsed}
                        </span>
                      </div>
                      <div className="text-muted text-small mb-2">
                        {project.startDate} to {project.endDate}
                      </div>
                      <div>{project.aboutProject}</div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <hr className="d-print-none" />
        <div className="page-break"></div>
        <div className="education-section px-3 px-lg-4 pb-4">
          <h2 className="h3 mb-4">Education</h2>
          <div className="timeline">
            {education.map((education) => {
              return (
                <>
                  <div className="timeline-card timeline-card-success card shadow-sm">
                    <div className="card-body">
                      <div className="h5 mb-1">
                        {education.degreeName}{" "}
                        <span className="text-muted h6">
                          from {education.institutionName}
                        </span>
                        <span style={{ float: "right" }}>
                          {education.percentage}
                          {"%"}
                        </span>
                      </div>
                      <div className="text-muted text-small mb-2">
                        {education.startDate} - {education.endDate}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <hr className="d-print-none" />
        <div className="contant-section px-3 px-lg-4 pb-4" id="contact">
          <h2 className="h3 text mb-3">Contact</h2>
          <div className="row">
            <div className="col-md-7 d-print-none">
              <div className="my-2">
                <form
                  action="https://formspree.io/your@email.com"
                  method="POST"
                >
                  <div className="row">
                    <div className="col-6">
                      <input
                        className="form-control"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-6">
                      <input
                        className="form-control"
                        type="email"
                        id="email"
                        name="_replyto"
                        placeholder="Your E-mail"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group my-2">
                    <textarea
                      className="form-control"
                      style={{ resize: "none;" }}
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button className="btn btn-primary mt-2" type="submit">
                    Send
                  </button>
                </form>
              </div>
            </div>
            <div className="col">
              <div className="mt-2">
                <h3 className="h6">Address</h3>
                <div className="pb-2 text-secondary">
                  Bhopal, Madhya Pradesh, India
                </div>
                <h3 className="h6">Phone</h3>
                <div className="pb-2 text-secondary">
                  +91-{personalData.phoneNumber}
                </div>
                <h3 className="h6">Email</h3>
                <div className="pb-2 text-secondary">{personalData.email}</div>
              </div>
            </div>
            <div className="col d-none d-print-block">
              <div className="mt-2">
                <div>
                  <div className="mb-2">
                    <div className="text-dark">
                      <i className="fab fa-twitter mr-1"></i>
                      <span>https://twitter.com/templateflip</span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="text-dark">
                      <i className="fab fa-facebook mr-1"></i>
                      <span>https://www.facebook.com/templateflip</span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="text-dark">
                      <i className="fab fa-instagram mr-1"></i>
                      <span>https://www.instagram.com/templateflip</span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="text-dark">
                      <i className="fab fa-github mr-1"></i>
                      <span>https://github.com/templateflip</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
