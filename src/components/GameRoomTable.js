import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

function GameRoomTable(props) {
  return (
    <div style={{ padding: "20px" }}>
      <h1 className="h2">Game Rooms</h1>
      <BootstrapTable
        keyField="id"
        data={props.products}
        columns={props.columns}
      />
    </div>
  );
}

export default GameRoomTable;
