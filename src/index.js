import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store/";
import { Provider } from "react-redux";
import App from "./App";
import * as serviceWorker from "./serviceWorker";


ReactDOM.render(<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>, document.getElementById("root"));
serviceWorker.unregister();
