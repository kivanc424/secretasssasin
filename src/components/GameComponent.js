import { React, Component } from "react";
import styled from "styled-components";
import AvalonBoard from "../assets/images/avalonboard.jpg";
import BackgroundVideo from "../assets/videos/backgroundvideo.mp4";
class GameComponent extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Board></Board>
        </Container>
      </Wrapper>
    );
  }
}

export default GameComponent;

const Wrapper = styled.div`
  width: 100%;
  height: 1200px;
  background-image: url(${BackgroundVideo});
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 60%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Board = styled.div`
  width: 70%;
  height: 80%;
  border-radius: 50%;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${AvalonBoard});
`;
