import {GET,POST} from "./actionTypes"

export const getData=(data)=>{

       return{
             type:GET,
             payload:data
       }
}


  
  export const postData = (posts) => {
    return {
      type: POST,
      payload: posts,
    };
  };
  