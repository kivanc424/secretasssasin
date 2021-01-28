import React from "react";
import { Card, Button } from "react-bootstrap";

import "../css/home.css";

function CreateRoomCard(props) {
  return (
    <div>
      <Card className="text-center">
        <Card.Body className="mx-auto">
          <Card.Title>Welcome to Secret Assassin</Card.Title>
          <Card.Text>
            To start the game create a room and invite your friends
          </Card.Text>
          <Button onClick={props.createRoomButton} variant="primary">Create A Game Room</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CreateRoomCard;
