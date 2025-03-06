import './comps.css';

const PersonalInfo = () => {
  return (
    <div className="infoprofile">
      <h1>Lilsonia F. Anonat</h1>
      <h3>CCS Student</h3>
      <p>
        <strong>Phone:</strong> 09456054571 | <strong>Email:</strong> anonatlilsonia5@gmail.com
      </p>
      <p>
        <strong>LinkedIn:</strong>{" "}
        <a href="https://www.linkedin.com/in/lilsonia-anonat-9a68b52b5/" target="_blank" rel="noopener noreferrer">
          Lilsonia F. Anonat
        </a>{" "}
        | <strong>Location:</strong> Philippines
      </p>
    </div>
  );
};

export default PersonalInfo;
