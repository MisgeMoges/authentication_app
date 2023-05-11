import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import  reducers  from "./reducers";
import App from "./app/App";
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import "./index.css";

const store = configureStore(
  { reducer: reducers },
  compose(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
