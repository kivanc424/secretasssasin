import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home";
import AllGameRoomView from "./views/AllGameRoomView";
import CreateRoomView from "./views/CreateRoomView";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/create-room" component={CreateRoomView}/>
        <Route path="/all-game-room" component={AllGameRoomView}/>
      </Switch>
    </BrowserRouter>
  );
}
