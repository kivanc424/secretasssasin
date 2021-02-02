import { React, Component } from "react";
import { Form, Button } from "react-bootstrap";

function CreateGameForm(props) {
  return (
    <div>
      <Form className="form-container">
        <Form.Group>
          <Form.Label>Room Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name of Room"
            value={props.roomName}
            onChange={props.roomNameChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Room Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={props.roomPassword}
            onChange={props.roomPasswordChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Percival"
            checked={props.percival}
            onChange={props.percivalCheckChange}
          />
          <Form.Check
            type="checkbox"
            label="Merlin"
            checked={props.merlin}
            onChange={props.merlinCheckChange}
          />
          <Form.Check
            type="checkbox"
            label="Morgana"
            checked={props.morgana}
            onChange={props.morganaCheckChange}
          />
          <Form.Check
            type="checkbox"
            label="Oberon"
            checked={props.oberon}
            onChange={props.oberonCheckChange}
          />
          <Form.Check
            type="checkbox"
            label="Mordred"
            checked={props.mordred}
            onChange={props.mordredCheckChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            size="sm"
            as="select"
            value={props.totalPlayers}
            onChange={props.totalPlayersChange}
          >
            {props.options.map((option) => {
              return <option value={option.value}>{option.label}</option>;
            })}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" onClick={props.createRoomButton}>
          Create Room
        </Button>
      </Form>
    </div>
  );
}

export default CreateGameForm;
