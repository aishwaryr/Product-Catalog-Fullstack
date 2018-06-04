import { combineReducers } from "redux";
import { SET_SEARCH_TERM, LOAD_PRODUCTS } from "./actions";

const searchTerm = (state = "", action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

// since we are using combine reducers now - every reducer below now is only concerned with a pice of app state. no need to copy and return new state. just return the new

const productsData = (state = {}, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return action.payload;
  }
  return state;
};

const rootReducer = combineReducers({
  searchTerm,
  productsData
});

export default rootReducer;
