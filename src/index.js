import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "materialize-css/dist/css/materialize.min.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers/index";
const rootElement = document.getElementById("root");
const store = createStore(allReducers);
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  rootElement
);
