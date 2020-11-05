import { combineReducers } from "redux";
import { ScreenSize, ShowHeader } from './settingsReducer';
import { AdminLoggedIn } from './adminReducer';
export default combineReducers({
    ScreenSize,
    ShowHeader,
    AdminLoggedIn
});