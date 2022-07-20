import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer";

const middleware = [thunk];
const createMiddleWare = applyMiddleware(...middleware)(createStore);
// const store = createStore(rootReducer, {}, applyMiddleware(...middleware));
const store = createMiddleWare(rootReducer);
export default store;
