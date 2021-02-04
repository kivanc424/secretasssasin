import React from "react";
import styled from "styled-components";
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

export default function ExampleLogin() {
  return (
    <Wrapper>
      <FormWrapper>
        <FormContents>
          <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password"
            />
          </FormGroup>
          <Button>Login</Button>
        </FormContents>
      </FormWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  width: 100%;
  height: 821px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  width: 50%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
`;

const FormContents = styled.div`
  max-width: 60%;
  max-height: 100%;
`;
