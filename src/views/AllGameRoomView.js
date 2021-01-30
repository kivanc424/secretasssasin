import { Component, React } from "react";
import GameRoomTable from "../components/GameRoomTable";
import { Button } from "react-bootstrap";
import axios from "axios";

const products = [
  { id: 1, name: "Item 1", price: 100 },
  { id: 2, name: "Item 2", price: 102 },
];

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
    axios
      .get("http://localhost:8080/getrooms")
      .then((response) => {
        this.setState({rooms: response.data})
      })
      .catch((error) => {
        console.log(error);
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
          this.onFollowChanged(row);
        }}
      >
        Join Room
      </Button>
    );
  };
  render() {
    return <GameRoomTable columns={this.state.columns} products={this.state.rooms} />;
  }
}

export default AllGameRoomView;
