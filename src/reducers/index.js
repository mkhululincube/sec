import { combineReducers } from "redux";
import { ScreenSize, ShowHeader } from './settingsReducer';
import { AdminLoggedIn } from './adminReducer';
import { Citizens } from './citizensReducer';
export default combineReducers({
    ScreenSize,
    ShowHeader,
    AdminLoggedIn,
    Citizens
});