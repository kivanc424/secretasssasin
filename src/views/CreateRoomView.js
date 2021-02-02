import { Component, React } from "react";
import { Form, Button } from "react-bootstrap";
import { options } from "../data/data";
import { withRouter } from "react-router-dom";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import CreateGameForm from "../components/CreateGameForm";

import "../css/createRoom.css";

var socket;
var stompClient;

class CreateRoomView extends Component {
  state = {
    totalPlayers: 5,
    roomName: "",
    roomPassword: "",
    percival: false,
    merlin: false,
    morgana: false,
    oberon: false,
    mordred: false,
  };

  componentDidMount() {
    socket = new SockJS("http://localhost:8080/secret-assassin");
    stompClient = Stomp.over(socket);
    stompClient.connect({}, (frame) => {});
  }

  componentWillUnmount() {
    stompClient.disconnect((res) => {
      console.log("Client disconnected from create room");
    });
  }

  createRoomButton = (event) => {
    event.preventDefault();
    let that = this;

    let roomMaster = {
      id: "kakaka",
      username: localStorage.getItem("username"),
    };

    let ob = JSON.stringify({
      roomName: this.state.roomName,
      roomPassword: this.state.roomPassword,
      totalPlayers: this.state.totalPlayers,
      percival: this.state.percival,
      merlin: this.state.merlin,
      morgana: this.state.morgana,
      oberon: this.state.oberon,
      mordred: this.state.mordred,
      players: [roomMaster],
    });

    stompClient.send("/app/creategame-room", {}, ob);

    that.props.history.push("/all-game-room");
  };

  render() {
    return (
      <div className="container">
        <CreateGameForm
          roomName={this.state.roomName}
          password={this.state.roomPassword}
          percival={this.state.percival}
          morgana={this.state.morgana}
          oberon={this.state.oberon}
          mordred={this.state.mordred}
          totalPlayers={this.state.totalPlayers}
          options={options}
          createRoomButton={this.createRoomButton}
          totalPlayersChange={(event) => {
            this.setState({ totalPlayers: parseInt(event.target.value) });
          }}
          mordredCheckChange={(event) => {
            const target = event.target;
            this.setState({
              mordred:
                target.type === "checkbox" ? target.checked : target.value,
            });
          }}
          oberonCheckChange={(event) => {
            const target = event.target;
            this.setState({
              oberon:
                target.type === "checkbox" ? target.checked : target.value,
            });
          }}
          morganaCheckChange={(event) => {
            const target = event.target;
            this.setState({
              morgana:
                target.type === "checkbox" ? target.checked : target.value,
            });
          }}
          merlinCheckChange={(event) => {
            const target = event.target;
            this.setState({
              merlin:
                target.type === "checkbox" ? target.checked : target.value,
            });
          }}
          percivalCheckChange={(event) => {
            const target = event.target;
            this.setState({
              percival:
                target.type === "checkbox" ? target.checked : target.value,
            });
          }}
          roomPasswordChange={(event) => {
            this.setState({ roomPassword: event.target.value });
          }}
          roomNameChange={(event) => {
            this.setState({ roomName: event.target.value });
          }}
        />
      </div>
    );
  }
}

export default withRouter(CreateRoomView);
