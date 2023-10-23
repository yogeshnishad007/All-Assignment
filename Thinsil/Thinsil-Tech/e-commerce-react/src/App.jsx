
import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home'
import SinglePage from './Components/SinglePage'
import Navbar from './Components/Navbar'
import Cart from './Components/Cart'
// import Login from './Components/Login'
// import Register from './Components/Register'

function App() {
 

  return (
    <>

            <Navbar/>
            {/* <Home/> */}
         <Routes>
        
        <Route path="/" element={<Home/>} />
        

        <Route path='/singlepage' element={<SinglePage/>}  />
        <Route path='/cart' element={<Cart/>}  />
       
      </Routes>
    </>
  )
}

export default App
