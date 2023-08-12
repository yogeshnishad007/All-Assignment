
import {Routes,Route} from "react-router-dom"
import HomePage from "./HomePage"
import Login from "./Login"
import Profile from "./Profile"
import SignUp from "./SignUp"

const AllRoutes = () => {

  return (
    <div>
            <Routes>
              
                 <Route path="/" element={<HomePage/>}/>
                 <Route path="/login" element={<Login/>}/>
                 <Route path="/profile" element={<Profile/>}/>
                 <Route path="/signup" element={<SignUp/>}/>

            </Routes>
        

    </div>
  )
}

export default AllRoutes

