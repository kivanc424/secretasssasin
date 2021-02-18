import React from "react";
import "../css/lobby.css";
import BootstrapTable from "react-bootstrap-table-next";
import { Button } from "react-bootstrap";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

function GameLobbyComponent(props) {
  return (
    <div>
      {props.lobbyState === true ? (
        <h1>Hello</h1>
      ) : (
        <div className="lobby__container">
          <div className="lobby__contents">
            <div className="lobby__player__table">
              <div className="lobby__options__container">
                <h1 className="h2">Lobby</h1>
                {props.gameMaster ? (
                  <div>
                    <Button onClick={props.startGameButton}>Start Game</Button>
                    <Button onClick={props.destroyLobbyButton}>
                      Destroy Lobby
                    </Button>
                  </div>
                ) : (
                  <div>
                    {props.ready ? (
                      <Button onClick={props.buttonClickNotReady}>
                        Not Ready
                      </Button>
                    ) : (
                      <Button onClick={props.buttonClickReady}>Ready</Button>
                    )}
                    <Button onClick={props.leaveLobbyButton}>LeaveLobby</Button>
                  </div>
                )}
              </div>

              <BootstrapTable
                keyField="id"
                data={props.playersData}
                columns={props.columnData}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameLobbyComponent;
