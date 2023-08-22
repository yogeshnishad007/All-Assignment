import {GET,POST} from "./actionTypes"


const initialState = {
    users: [],
    posts: [],
  };
  
  export const reducer = (state = initialState, {type,payload}) => {
    switch (type) {
      case GET:
        return { ...state, users: payload };
      case POST:
        return { ...state, posts: payload };
      default:
        return state;
    }
  };
  
   
  