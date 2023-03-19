import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./app/App";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
