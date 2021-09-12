import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
import { lanReducer } from "./lanRaducer";

export const rootReducers = combineReducers({
  app: countReducer,
  lang: lanReducer,
});
