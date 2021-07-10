import { createStore } from "redux";
import CakeReducer from "./cake/CakeReducer";
import IcecreamReducer from "./icecream/IcecreamReducer";
import { combineReducers } from "redux";
const RootReducer = combineReducers({
  cake: CakeReducer,
  icecream: IcecreamReducer,
});
const store = createStore(RootReducer);
export default store;
