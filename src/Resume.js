import React, { useState } from "react";
import PersonalForm from "./components/Form";
import SkillsForm from "./components/Skillsform";
import WorkEx from "./components/WorkExperience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import "./css/Form.css";
import "./script.js";
import Slider from "./components/Slider";
import ProfileImage from "./components/ProfileImage";
import Profile from "./components/Profile";

const Resume = () => {
  const [step, setStep] = useState(0);

  const [allData, setAllData] = useState({});

  const [show,setShow]=useState(true);

  const [personalData, setPersonalData] = useState({
    name: "",
    age: "",
    email: "",
    phoneNumber: "",
    rollNumber: "",
    address: "",
  });

  const [skillsData, setSkillsData] = useState([{ skill: "", proficiency: 0 }]);

  const [profileData, setProfileData] = useState({});

  const [workExperience, setworkExperienceData] = useState([
    {
      company: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      aboutRole: "",
      certificate: "",
    },
  ]);
  const [projects, setProjectsData] = useState([
    {
      projectName: "",
      techUsed: "",
      startDate: "",
      endDate: "",
      aboutProject: "",
    },
  ]);
  const [education, setEducationData] = useState([
    {
      institutionName: "",
      degreeName: "",
      startDate: "",
      endDate: "",
      percentage: "",
    },
  ]);

  const handlePersonalDataSubmit = (data) => {
    const temp = { ...allData, personalData: data };
    console.log(temp);
    setAllData(temp);
    setPersonalData(data);
  };

  const handleSkillsDataSubmit = (data) => {
    const temp = { ...allData, skills: data };
    console.log(temp);
    setAllData(temp);
    setSkillsData(data);
  };

  const handleProfileDataSubmit = (data) => {
    const temp = { ...allData, profileData: data };
    console.log(temp);
    setAllData(temp);
    setProfileData(data);
  };

  const handleWorkExDataSubmit = (data) => {
    const temp = { ...allData, workExperience: data };
    console.log(temp);
    setAllData(temp);
    setworkExperienceData(data);
  };

  const handleProjectsDataSubmit = (data) => {
    const temp = { ...allData, projects: data };
    console.log(temp);
    setAllData(temp);
    setProjectsData(data);
  };

  const handleEducationDataSubmit = (data) => {
    const temp = { ...allData, education: data };
    console.log(temp);
    setAllData(temp);
    setEducationData(data);
  };

  const handleFinalDataSubmit = () => {
    let person = prompt(
      "I hereby declare that all the information given by me are true and verified from my end.",
      "Your Name here"
    );
    if (person === null || person === "" || person === "Your Name here") {
      handleFinalDataSubmit();
    } else {
      let text = `${person} your resume Data has been uploaded please check your Dashboard.`;
      document.getElementById("finalSubmitMessage").innerHTML = text;
      setShow(true);
    }
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const renderFormStep = () => {
    switch (step) {
      case 0:
        return (
          <PersonalForm
            onSave={handlePersonalDataSubmit}
            data={personalData}
            next={handleNextStep}
          />
        );
      case 1:
        return (
          <SkillsForm
            onSave={handleSkillsDataSubmit}
            data={skillsData}
            next={handleNextStep}
          />
        );
      case 2:
        return (
          <WorkEx
            onSave={handleWorkExDataSubmit}
            data={workExperience}
            next={handleNextStep}
          />
        );
      case 3:
        return (
          <Projects
            onSave={handleProjectsDataSubmit}
            data={projects}
            next={handleNextStep}
          />
        );
      case 4:
        return (
          <Education
            onSave={handleEducationDataSubmit}
            data={education}
            next={handleNextStep}
          />
        );
      case 5:
        return (
          <ProfileImage
            onSave={handleProfileDataSubmit}
            data={profileData}
            next={handleNextStep}
          />
        );
      default:
        return null;
    }
  };



  return (
    <>
    {
      show?<Profile candidateData={allData}/>:
      <>
      <div className="msform">
        <Slider value={step * 20} />
        {renderFormStep()}
        {step > 0 && (
          <button onClick={() => handlePrevStep()}>
            <svg
              fill="#fff"
              width="15px"
              height="15px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z" />
            </svg>
            Previous
          </button>
        )}{" "}
        {step > 5 && (
          <button onClick={() => handleFinalDataSubmit()}>Submit</button>
        )}
      </div>
      <p id="finalSubmitMessage"></p>
    </>
    }
    </>
  );

};

export default Resume;
