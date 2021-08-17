import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./loginReducer";
import schoolNameReducer from "./schoolNameReducer";
import userNameReducer from "./userNameReducer";
import functionUserReducer from "./functionUserReducer";
import idReducer from "./idReducer";
import userReducer from './userReducer';
import contentReducer from './contentReducer';


const allReducers = combineReducers({ 
    userSetFirstName: userNameReducer, 
    setSchoolName: schoolNameReducer, 
    loginLogout: loginReducer, 
    userFunction: functionUserReducer, 
    idUser: idReducer,
    userData: userReducer,
    content: contentReducer
});

const store = createStore(allReducers, applyMiddleware(thunk));

export {allReducers, store};