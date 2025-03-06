import './ProfilePicture.css';

const ProfilePicture = () => {
  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img
          src="src/components/img/WIN_20240731_18_55_49_Pro.jpg" 
          alt="Profile"
        />
      </div>
      <h1 className="name">Hi, I'm Lilsonia</h1>
    </div>
  );
};

export default ProfilePicture;