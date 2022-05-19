import React from "react";
import ReactDOM from "react-dom/client";
import 'react-toastify/dist/ReactToastify.min.css'
import 'react-calendar/dist/Calendar.css'
import "./app/layout/styles.css";
import App from "./app/layout/App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import configureStore from "./app/store/configureStore";
import ScrollToTop from "./app/layout/ScrollToTop";
import { loadEvents } from "./features/events/eventAction";

const store = configureStore()
store.dispatch(loadEvents())

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
