import Home from "./Components/Home"
import PostForm from "./Components/PostForm"
import { Route,Routes,Link } from "react-router-dom"
import "./App.css"

function App() {


  return (
    <>
        <h1>Hello</h1>

                
  <div className="link">

        <h2>
          <Link to="/">Home</Link>
        </h2>

        <h2>
          <Link to="/post">Post Form</Link>
        </h2>
        
</div>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/post" element={<PostForm/>}/>

          </Routes>
        
    </>
  )
}

export default App
