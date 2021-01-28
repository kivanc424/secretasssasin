import { Component, React } from "react";
import { Form, Button } from "react-bootstrap";
import { options } from "../data/data";
import { withRouter } from "react-router-dom";

import "../css/createRoom.css";

class CreateRoomView extends Component {
  createRoomButton = (event) => {
    event.preventDefault();
    this.props.history.push("/all-game-room");
  };

  render() {
    return (
      <div className="container">
        <Form className="form-container">
          <Form.Group>
            <Form.Label>Room Name</Form.Label>
            <Form.Control type="text" placeholder="Name of Room" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Room Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Percival" />
            <Form.Check type="checkbox" label="Merlin" />
            <Form.Check type="checkbox" label="Morgana" />
            <Form.Check type="checkbox" label="Oberon" />
            <Form.Check type="checkbox" label="Mordred" />
          </Form.Group>
          <Form.Group>
            <Form.Control size="sm" as="select">
              {options.map((option) => {
                return <option value={option.value}>{option.label}</option>;
              })}
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Create Room
          </Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(CreateRoomView);
