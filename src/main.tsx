import ReactDOM from "react-dom";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./store"; // Import your Redux store
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
