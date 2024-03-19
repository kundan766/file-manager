// import {createStore, combineReducers, applyMiddleware} from "redux";
// import  thunk from 'redux-thunk';
// import {composeWithDevTools} from "redux-devtools-extension"
// import authReducer from "./reducer/authReducer";

// export default store= createStore(
//     combineReducer({authReducer}),
    
//     composeWithDevTools(applyMiddleware(thunk))
// )


import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "../redux/reducer/authReducer";

const rootReducer = combineReducers({
  auth: authReducer 
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
