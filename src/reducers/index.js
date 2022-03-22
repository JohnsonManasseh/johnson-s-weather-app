import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import weatherReducer from "./weatheReducer"

const rootReducer = combineReducers({
    weather: weatherReducer,
    search: searchReducer,
})

export default rootReducer





