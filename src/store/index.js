import {configureStore, combineReducers} from "@reduxjs/toolkit";
import taskReducer from "./taskReducer";
import selectReducer from "./selectReducer";

const rootReducer = combineReducers({
    tasks: taskReducer,
    select: selectReducer
})

const store = configureStore({"reducer": rootReducer});

export default store;