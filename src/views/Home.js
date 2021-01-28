import { React, Component } from "react";
import CreateRoomCard from "../components/CreateRoomCard";
import GameNavBar from "../components/GameNavBar";
import { withRouter } from "react-router-dom";

class Home extends Component {
  createRoomButton = () => {
    this.props.history.push("/create-room");
  };
  render() {
    return (
      <div>
        <GameNavBar />
        <CreateRoomCard createRoomButton={this.createRoomButton} />
      </div>
    );
  }
}

export default withRouter(Home);
