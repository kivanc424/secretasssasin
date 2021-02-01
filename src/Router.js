import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home";
import AllGameRoomView from "./views/AllGameRoomView";
import CreateRoomView from "./views/CreateRoomView";
import GameLobby from "./views/GameLobby";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/create-room" component={CreateRoomView} />
        <Route path="/all-game-room" component={AllGameRoomView} />
        <Route path="/lobby" component={GameLobby} />
      </Switch>
    </BrowserRouter>
  );
}
