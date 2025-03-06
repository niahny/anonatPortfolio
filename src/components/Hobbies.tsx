import './comps.css';

const hobbiesList = [
  "Photography/Videography: Capturing moments, editing videos, vlogging",
  "Video Editing: Creating content for TikTok, YouTube, or school projects",
  "Sports: Basketball, football, volleyball, badminton"
];

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h2>Hobbies:</h2>
      <ul>
        {hobbiesList.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;
