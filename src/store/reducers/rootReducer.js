import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import notificationReducer from "./notificationReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    notification: notificationReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;