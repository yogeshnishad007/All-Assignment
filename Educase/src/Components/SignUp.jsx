import {Link} from 'react-router-dom';
import "../Style/Signup.css"

const SignUp = () => {

  

  return (
    <div>

<div className="parent-container">
        <div className="child">
          <h2>Signup to your PopX account</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
             
          <div className="input-wrapper">
              <label className="label-1"  >Full Name</label>
              <input type="text" placeholder="Enter Your Full Name"/>

              <label className="label-2" >Phone Number</label>
              <input type="text" placeholder="Enter Your Phone Number"/>

              <label className="label-3" >Email Address</label>
              <input type="text" placeholder="Enter Your Email"/>

              <label className="label-4" >Password</label>
              <input type="text" placeholder="Enter Your Password"/>

              <label className="label-5" >Company Name</label>
              <input type="text" placeholder="Enter Your Company Name"/>
          </div>

          <div className="radio-btn">
             <p>Are you an Agency?</p>
                <input name="group1" type="radio" id="test1" />
                <label >Yes</label>
    
           
                <input name="group1" type="radio" id="test1" />
                <label >No</label>
           
          </div>

          <div >
                 <Link to="/login">
                 <button className="signup-btn">Create Account</button>
                 </Link>
              
  
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp