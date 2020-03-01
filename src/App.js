import React from "react";
import "./App.css";
import Soal from "./pages/Soal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hasil from "./pages/Hasil";
import ButtonRow from "./components/ButtonRow";
import { Provider } from "react-redux";
import store from "./redux/configureStore";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Soal />
          </Route>
          <Route path="/hasil">
            <Hasil />
          </Route>
          <Route path="/coba">
            <ButtonRow />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
