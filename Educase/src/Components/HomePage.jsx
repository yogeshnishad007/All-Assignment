import { Link } from "react-router-dom";
import "../Style/Home.css";
import "../Style/Common.css"
import Button from "./Button"

const HomePage = () => {
  return (
    <div className="home-conatiner">
      <div className="parent-container">
        <div className="child">
          <h2>Welcome to PopX</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <div className="link">
            <Link to="/signup">
              <Button className="btn purple" Name="Create  Account"/>
            </Link>

            <Link to="/login">
              <Button className="btn grey" Name="Already Registered?Login"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
