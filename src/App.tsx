import "./index.css";
import ProfilePicture from "./components/ProfilePicture/ProfilePicture";
import Education from "./components/Education";
import PersonalInfo from "./components/PersonalInfo";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>My Portfolio</h1>
        <p>Showcasing my journey, skills, and passions</p>
      </header>
      <div className="">
      <ProfilePicture />
      </div>
      <div>
      <PersonalInfo />
      </div>
      <div>
      <Education />
      </div>
      <div className="skills-hobbies">
        <Skills />
        <Hobbies />
      </div>
    </div>
  );
};

export default App;