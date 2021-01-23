import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
            <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
