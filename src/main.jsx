import React from "react";
import { createRoot } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./components/App/App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
