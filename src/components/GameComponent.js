import { React, Component } from "react";
import styled from "styled-components";
import Merlin from "../assets/images/merlin.jpg";
class GameComponent extends Component {
  state = {
    questData: [
      {
        quest: "Quest 1",
        players: 2,
      },
      {
        quest: "Quest 2",
        players: 3,
      },
      {
        quest: "Quest 3",
        players: 2,
      },
      {
        quest: "Quest 4",
        players: 3,
      },
      {
        quest: "Quest 5",
        players: 3,
      },
    ],
    voteTrackData: [
      { vote: 1 },
      { vote: 2 },
      { vote: 3 },
      { vote: 4 },
      { vote: 5 },
    ],
    
  };
  render() {
    return (
      <Layout>
        <Container>
          <GameContainer>
            <Board>
              <MissionsContainer>
                {this.state.questData.map((data) => {
                  return (
                    <Missions>
                      <h4>{data.quest}</h4>
                      <h1>{data.players}</h1>
                    </Missions>
                  );
                })}
              </MissionsContainer>
              <h1>Vote Track</h1>
              <VoteTrackContainer>
                {this.state.voteTrackData.map((data) => {
                  return (
                    <VoteTrack>
                      <h1>{data.vote}</h1>
                    </VoteTrack>
                  );
                })}
              </VoteTrackContainer>
            </Board>
            <PlayersContainer>
              <Player>
                <Avatar src={Merlin} />
                <Name>Kivanc</Name>
              </Player>
              <Player>
                <Avatar src={Merlin} />
              </Player>
              <Player>
                <Avatar src={Merlin} />
              </Player>
              <Player>
                <Avatar src={Merlin} />
              </Player>
              <Player>
                <Avatar src={Merlin} />
              </Player>
            </PlayersContainer>
          </GameContainer>
        </Container>
      </Layout>
    );
  }
}

export default GameComponent;

const Layout = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: green;
  width: 80%;
  height: 90%;
`;

const GameContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MissionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Board = styled.div`
  background-color: purple;
  border-radius: 50%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
`;

const Missions = styled.div`
  background-color: red;
  margin-left: 15px;
  width: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 130px;
`;

const VoteTrackContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  margin-left: 50px;
  align-items: center;
`;

const VoteTrack = styled.div`
  background-color: red;
  margin-left: 15px;
  width: 80px;
  border-radius: 50%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayersContainer = styled.div`
  width: 70%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Player = styled.div`
  background-color: grey;
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.img`
  width: 100%;
  height: 80%;
`;

const Name = styled.h2`
  color: white;
`;
