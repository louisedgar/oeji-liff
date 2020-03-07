import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hasil from "./pages/Hasil";
import Soal from "./pages/Soal";
import ButtonRow from "./components/ButtonRow";
import { Provider } from "react-redux";
import store from "./redux/configureStore";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/soal">
            <Soal />
          </Route>
          <Route path="/hasil">
            <Hasil />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
