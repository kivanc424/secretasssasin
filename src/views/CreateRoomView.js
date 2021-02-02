import { Component, React } from "react";
import { Form, Button } from "react-bootstrap";
import { options } from "../data/data";
import { withRouter } from "react-router-dom";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

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
      "id": "kakaka",
      "username": localStorage.getItem("username")
    }

    let ob = JSON.stringify({
      roomName: this.state.roomName,
      roomPassword: this.state.roomPassword,
      totalPlayers: this.state.totalPlayers,
      percival: this.state.percival,
      merlin: this.state.merlin,
      morgana: this.state.morgana,
      oberon: this.state.oberon,
      mordred: this.state.mordred,
      players: [roomMaster]
    });

    stompClient.send("/app/creategame-room", {}, ob);

    that.props.history.push("/all-game-room");
  };

  render() {
    return (
      <div className="container">
        <Form className="form-container">
          <Form.Group>
            <Form.Label>Room Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name of Room"
              value={this.state.roomName}
              onChange={(event) => {
                this.setState({ roomName: event.target.value });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Room Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={this.state.roomPassword}
              onChange={(event) => {
                this.setState({ roomPassword: event.target.value });
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Percival"
              checked={this.state.percival}
              onChange={(event) => {
                const target = event.target;
                this.setState({
                  percival:
                    target.type === "checkbox" ? target.checked : target.value,
                });
              }}
            />
            <Form.Check
              type="checkbox"
              label="Merlin"
              checked={this.state.merlin}
              onChange={(event) => {
                const target = event.target;
                this.setState({
                  merlin:
                    target.type === "checkbox" ? target.checked : target.value,
                });
              }}
            />
            <Form.Check
              type="checkbox"
              label="Morgana"
              checked={this.state.morgana}
              onChange={(event) => {
                const target = event.target;
                this.setState({
                  morgana:
                    target.type === "checkbox" ? target.checked : target.value,
                });
              }}
            />
            <Form.Check
              type="checkbox"
              label="Oberon"
              checked={this.state.oberon}
              onChange={(event) => {
                const target = event.target;
                this.setState({
                  oberon:
                    target.type === "checkbox" ? target.checked : target.value,
                });
              }}
            />
            <Form.Check
              type="checkbox"
              label="Mordred"
              checked={this.state.mordred}
              onChange={(event) => {
                const target = event.target;
                this.setState({
                  mordred:
                    target.type === "checkbox" ? target.checked : target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              size="sm"
              as="select"
              value={this.state.totalPlayers}
              onChange={(event) => {
                this.setState({ totalPlayers: parseInt(event.target.value) });
              }}
            >
              {options.map((option) => {
                return <option value={option.value}>{option.label}</option>;
              })}
            </Form.Control>
          </Form.Group>
          <Button variant="primary" onClick={this.createRoomButton}>
            Create Room
          </Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(CreateRoomView);
