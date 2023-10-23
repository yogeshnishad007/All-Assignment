import React, { useState } from "react";
import MyContext from "../Context Api/ContextApi";
// import { useNavigate } from "react-router-dom";

const Provider =({children})=>{
    
    const [data,setData]=useState(null);
    // const history = useNavigate();
    const handleData=(el)=>{

        setData(el)
        // history('/singlepage')
    }

      return(

          <>
           <MyContext.Provider value={{data,handleData}}>

             {children}
           </MyContext.Provider>
            
           
          </>
      )
}

export default Provider