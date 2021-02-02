import { Component, React } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { mockUpData } from "../data/data";
import { Button } from "react-bootstrap";
import axios from "axios";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

import "../css/lobby.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";


var socket;
var stompClient;

class GameLobby extends Component {
  constructor() {
    super();

    this.state = {
      columns: [
        {
          dataField: "player",
          text: "Players",
          sort: true,
        },
        {
          dataField: "status",
          text: "Status",
          sort: true,
        },
      ],

      lobbyState: false,
    };
  }
  render() {
    return (
      <div>
        {this.state.lobbyState === true ? (
          <h1>Hello</h1>
        ) : (
          <div className="lobby__container">
            <div className="lobby__contents">
              <div className="lobby__player__table">
                <div className="lobby__options__container">
                  <h1 className="h2">Lobby</h1>
                  <Button onClick={() => {
                    this.setState({lobbyState: true})
                  }}>Leave Lobby</Button>
                </div>
                <BootstrapTable
                  keyField="id"
                  data={mockUpData}
                  columns={this.state.columns}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default GameLobby;
