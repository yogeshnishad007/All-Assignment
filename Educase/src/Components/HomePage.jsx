import { Link } from "react-router-dom";
import "../Style/Home.css";

const HomePage = () => {
  return (
    <div className="home-conatiner">
      <div className="parent-container">
        <div className="child">
          <h2>Welcome to PopX</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <div className="link">
            <Link to="/signup">
              <button className="btn purple">Create Account</button>
            </Link>

            <Link to="/login">
              <button className="btn grey">Already Registered?Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
