import { Component, React } from "react";
import GameRoomTable from "../components/GameRoomTable";
import { Button } from "react-bootstrap";
import axios from "axios";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { withRouter } from "react-router-dom";

var socket;
var stompClient;

class AllGameRoomView extends Component {
  constructor() {
    super();
    this.state = {
      // For displaying data
      columns: [
        {
          dataField: "roomName",
          text: "Room Name",
          sort: true,
        },
        {
          dataField: "totalPlayers",
          text: "Total Players",
          sort: true,
        },
        {
          dataField: "follow",
          text: "Join Room",
          formatter: this.linkFollow,
          sort: true,
        },
      ],
      isFollow: true,
      rooms: [],
    };

    this.onFollowChanged.bind(this);
  }

  componentDidMount() {
    let that = this;

    socket = new SockJS("http://localhost:8080/secret-assassin");
    stompClient = Stomp.over(socket);

    axios
      .get("http://localhost:8080/get-all-rooms")
      .then((response) => {
        that.setState({ rooms: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    stompClient.connect({}, (frame) => {});
  }

  onFollowChanged() {
    this.setState({ isFollow: !this.state.isFollow });
    console.log(this.state.isFollow);
  }

  linkFollow = (cell, row, rowIndex, formatExtraData) => {
    return (
      <Button
        onClick={() => {
          console.log(row);

          let ob = JSON.stringify({
            lobbyId: row.id,
            id: localStorage.getItem("id"),
            username: localStorage.getItem("username"),
            gameMaster: false,
            readyState: "not ready"
          });
          stompClient.send("/app/lobby", {}, ob);
          this.props.history.push(`/lobby/${row.id}`);
        }}
      >
        Join Room
      </Button>
    );
  };
  render() {
    return (
      <GameRoomTable columns={this.state.columns} products={this.state.rooms} />
    );
  }
}

export default withRouter(AllGameRoomView);
