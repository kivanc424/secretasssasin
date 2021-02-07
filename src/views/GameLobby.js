import { Component, React } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { mockUpData } from "../data/data";
import { Button } from "react-bootstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";
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
          dataField: "username",
          text: "Players",
          sort: true,
        },
      ],

      lobbyState: false,
      username: "",
      lobby: "",
      players: [],
      lobbyButtonState: false,
      player: "",
    };
  }

  componentDidMount() {
    let that = this;

    socket = new SockJS("http://localhost:8080/secret-assassin");
    stompClient = Stomp.over(socket);

    stompClient.connect({}, (frame) => {
      stompClient.subscribe("/rooms/join-lobby", (response) => {
        const data = JSON.parse(response.body);
        that.setState({ players: that.state.players.concat([data]) });
      });

      stompClient.subscribe("/rooms/leave-lobby", (response) => {
        const data = JSON.parse(response.body);
        this.setState({
          players: that.state.players.filter(
            (player) => !player.id.includes(data.id)
          ),
        });
      });
    });
    axios
      .get(`http://localhost:8080/get-lobby/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          lobby: res.data,
          players: res.data.players,
        });
      });

    axios
      .get(
        `http://localhost:8080/get-player-information/${
          this.props.match.params.id
        }/${localStorage.getItem("id")}`
      )
      .then((res) => {
        this.setState({ player: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  leaveLobbyButton = () => {
    this.setState({ lobbyButtonState: false });
    let ob = JSON.stringify({
      lobbyId: this.props.match.params.id,
      id: localStorage.getItem("id"),
      username: localStorage.getItem("username"),
    });

    stompClient.send("/app/leave-lobby", {}, ob);

    this.props.history.push("/");
  };

  componentWillUnmount() {
    stompClient.disconnect();
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
                  {this.state.player.gameMaster ? (
                    <div>
                      <Button>Start Game</Button>
                      <Button>Destroy Lobby</Button>
                    </div>
                  ) : (
                    <div>
                      <Button>Ready</Button>
                      <Button onClick={this.leaveLobbyButton}>
                        LeaveLobby
                      </Button>
                    </div>
                  )}
                </div>

                <BootstrapTable
                  keyField="id"
                  data={this.state.players}
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

export default withRouter(GameLobby);
