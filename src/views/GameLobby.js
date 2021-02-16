import { Component, React } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button } from "react-bootstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

import "../css/lobby.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import GameLobbyComponent from "../components/GameLobbyComponent";

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

        {
          dataField: "readyState",
          text: "Ready Status",
          sort: true,
        },
      ],

      lobbyState: false,
      username: "",
      lobby: "",
      players: [],
      lobbyButtonState: false,
      player: "",
      ready: false,
      gameStatus: true,
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

      stompClient.subscribe("/rooms/player-ready", (response) => {
        const data = JSON.parse(response.body);
        this.setState({
          players: data.players,
        });
      });

      stompClient.subscribe("/rooms/player-not-ready", (response) => {
        const data = JSON.parse(response.body);
        this.setState({
          players: data.players,
        });
      });

      stompClient.subscribe("/rooms/destroy-lobby", (response) => {
        that.props.history.push("/");
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

  componentWillUnmount() {
    stompClient.disconnect();
  }

  leaveLobbyButton = () => {
    this.setState({ lobbyButtonState: false });
    let ob = JSON.stringify({
      lobbyId: this.props.match.params.id,
      id: localStorage.getItem("id"),
      username: localStorage.getItem("username"),
    });

    stompClient.send("/app/leave-lobby", {}, ob);

    this.props.history.push("/all-game-room");
  };

  buttonClickReady = () => {
    let message = JSON.stringify({
      lobbyId: this.props.match.params.id,
      id: localStorage.getItem("id"),
      username: localStorage.getItem("username"),
      readyState: "ready",
    });
    stompClient.send("/app/ready", {}, message);

    this.setState({
      ready: true,
    });
  };

  buttonClickNotReady = () => {
    let message = JSON.stringify({
      lobbyId: this.props.match.params.id,
      id: localStorage.getItem("id"),
      username: localStorage.getItem("username"),
      readyState: "not ready",
    });
    stompClient.send("/app/not-ready", {}, message);
    this.setState({
      ready: false,
    });
  };

  destroyLobbyButton = () => {
    let message = JSON.stringify({
      lobbyId: this.props.match.params.id,
      gameStatus: true,
    });

    stompClient.send("/app/destroy-lobby", {}, message);
  };

  render() {
    return (
      <GameLobbyComponent
        lobbyState={this.state.lobbyButtonState}
        gameMaster={this.state.player.gameMaster}
        destroyLobbyButton={this.destroyLobbyButton}
        ready={this.state.ready}
        buttonClickNotReady={this.buttonClickNotReady}
        buttonClickReady={this.buttonClickReady}
        leaveLobbyButton={this.leaveLobbyButton}
        playersData={this.state.players}
        columnData={this.state.columns}
      />
    );
  }
}

export default withRouter(GameLobby);
