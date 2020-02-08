import React from "react";
import "./App.css";
import Soal from "./pages/Soal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hasil from "./pages/Hasil";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Soal />
        </Route>
        <Route path="/hasil">
          <Hasil />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
