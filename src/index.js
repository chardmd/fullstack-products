import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import createHistory from "history/createBrowserHistory";
import registerServiceWorker from "./registerServiceWorker";
import App from "./containers/App";
import configureStore from "./store";
import "./index.css";
import "bulma/css/bulma.css";

const history = createHistory();
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {/* place ConnectedRouter under Provider */}
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
