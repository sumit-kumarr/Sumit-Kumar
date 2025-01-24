import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import store from "./redux/store";
import AppContextProvider from "./components/Context/AppContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <AppContextProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
      </AppContextProvider>
  </React.StrictMode>
);
