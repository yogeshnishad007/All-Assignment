import {GET,POST} from "./actionTypes"


const initialState = {
    users: [],
    posts: [],
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET:
        return { ...state, users: action.payload };
      case POST:
        return { ...state, posts: action.payload };
      default:
        return state;
    }
  };
  
   
  