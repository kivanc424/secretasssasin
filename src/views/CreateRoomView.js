import { Component, React } from "react";
import { Form, Button } from "react-bootstrap";
import { options } from "../data/data";
import { withRouter } from "react-router-dom";
import CreateGameForm from "../components/CreateGameForm";
import axios from "axios";

import "../css/createRoom.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

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

  createRoomButton = (event) => {
    event.preventDefault();
    let that = this;

    axios
      .post("http://localhost:8080/create-game", {
        roomName: this.state.roomName,
        roomPassword: this.state.roomPassword,
        totalPlayers: this.state.totalPlayers,
        percival: this.state.percival,
        merlin: this.state.merlin,
        morgana: this.state.morgana,
        oberon: this.state.oberon,
        mordred: this.state.mordred,
        players: [
          {
            id: localStorage.getItem("id"),
            username: localStorage.getItem("username"),
            gameMaster: true,
          },
        ],
      })
      .then((res) => {
        that.props.history.push(`/lobby/${res.data.id}`);
      })
      .catch((error) => {});
  };

  render() {
    return (
      <div className="game__container">
        <div className="game__create__lobby">
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
      </div>
    );
  }
}

export default withRouter(CreateRoomView);
