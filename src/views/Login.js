import { Component } from "react";
import { withRouter } from 'react-router-dom';
import axios from "axios";
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



class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  loginButtonEvent = (event) => {
    event.preventDefault();
    let that = this;
    axios
      .post("http://localhost:8080/login", {
        username: this.state.username,
        password: this.state.password,
      })
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);
        that.props.history.push("/home")
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
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
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                  placeholder="Username"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={this.state.password}
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
