import React from "react";
import "./App.css";
import Soal from "./pages/Soal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hasil from "./pages/Hasil";
import ButtonRow from "./components/ButtonRow";

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
        <Route path="/coba">
          <ButtonRow />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
