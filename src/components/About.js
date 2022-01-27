import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h3 className="ver">Version : 1.0.0</h3>
      <Link className="link" to="/">
        Go Back
      </Link>
    </div>
  );
};

export default About;
