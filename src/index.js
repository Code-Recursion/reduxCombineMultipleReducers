import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers } from "redux";
// import reducer from "./reducer";
import { Provider } from "react-redux";
import reducerA from "./reducers/reducerA";
import reducerB from "./reducers/reducerB";

const rootReducer = combineReducers({
  reducerA,
  reducerB,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
