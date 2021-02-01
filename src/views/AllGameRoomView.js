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

    stompClient.connect({}, (frame) => {
      stompClient.subscribe("/rooms/room-lists", (response) => {
        const data = JSON.parse(response.body);
        that.setState({ rooms: that.state.rooms.concat([data]) });
      });
    });
  }

  componentWillUnmount() {
    stompClient.disconnect((res) => {
      console.log("Client has disconnect from socket");
    });
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
          this.props.history.push("/lobby")
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
