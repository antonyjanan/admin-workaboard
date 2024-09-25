import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
