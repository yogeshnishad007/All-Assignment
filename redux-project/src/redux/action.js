import {GET} from "./actionTypes"

export const getProduct=(data)=>{

       return{
             type:GET,payload:data
       }
}