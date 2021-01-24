import { Component } from "react";
import { withRouter } from "react-router";
import { axiosInstance } from "../axios/axios";
import axios from 'axios'
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import "../App.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  loginButtonEvent = (event) => {
    event.preventDefault();
    //this.props.history.push("/home");
    axios.post('http://localhost:8080/getUser', {
      username: 'kivancozmen55'
    })
    .then(function (response) {
      localStorage.setItem("username", response.data.username)
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  handlePasswordChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleUsernameChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <Container className="login-form">
        <Row>
          <h1>Welcome to Secret Assassin</h1>
          <Col>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Username</Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  value={this.state.password}
                  onChange={this.handleUsernameChange}
                  placeholder="Username"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={this.state.username}
                  onChange={this.handlePasswordChange}
                  id="examplePassword"
                  placeholder="Password"
                />
              </FormGroup>
              <Button onClick={this.loginButtonEvent}>Login</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(Login);
