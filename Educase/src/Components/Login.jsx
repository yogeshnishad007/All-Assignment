import { Link } from "react-router-dom";
import "../Style/Login.css";
import "../Style/Common.css"
import Button from "./Button"
const Login = () => {
  return (
    <div>
      <div className="parent-container">
        <div className="child">
          <h2>Signin to your PopX account</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <div className="input-wrapper">
            <label className="label-1">Email</label>
            <input type="text" placeholder="Enter Email" />

            <label className="label-2">Password</label>
            <input type="text" placeholder="Enter Password" />
          </div>

          <div className="link">
            <Link to="/profile">
              <Button className="btn purple" Name="Login"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
