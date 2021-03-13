import { React, Component } from "react";
import styled from "styled-components";
import Merlin from "../assets/images/merlin.jpg";

function GameComponent(props) {
  return (
    <Layout>
      <Container>
        <GameContainer>
          <Board>
            <MissionsContainer>
              {props.questData.map((data) => {
                if (data.goodGuysPoint === true) {
                  return (
                    <Missions style={{ backgroundColor: "blue" }}>
                      <h4>{data.questText}</h4>
                      <h1>{data.maxPlayersForQuest}</h1>
                    </Missions>
                  );
                } else if (data.badGuysPoint === true) {
                  return (
                    <Missions style={{ backgroundColor: "red" }}>
                      <h4>{data.questText}</h4>
                      <h1>{data.maxPlayersForQuest}</h1>
                    </Missions>
                  );
                } else {
                  return (
                    <Missions style={{ backgroundColor: "white" }}>
                      <h4>{data.questText}</h4>
                      <h1>{data.maxPlayersForQuest}</h1>
                    </Missions>
                  );
                }
              })}
            </MissionsContainer>
            <h1>Vote Track</h1>
            <VoteTrackContainer>
              {props.voteData.map((data) => {
                if (data.marker === true) {
                  return (
                    <VoteTrack style={{ backgroundColor: "brown" }}>
                      <h1>{data.voteTrack}</h1>
                    </VoteTrack>
                  );
                } else {
                  return (
                    <VoteTrack style={{ backgroundColor: "white" }}>
                      <h1>{data.voteTrack}</h1>
                    </VoteTrack>
                  );
                }
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

export default GameComponent;

const Layout = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
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
  background-color: white;
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
  background-color: white;
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
