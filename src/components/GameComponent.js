import { React, Component } from "react";
import styled from "styled-components";
class GameComponent extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <h1>Hello world</h1>
        </Container>
      </Wrapper>
    );
  }
}

export default GameComponent;

const Wrapper = styled.div``;

const Container = styled.div``;
