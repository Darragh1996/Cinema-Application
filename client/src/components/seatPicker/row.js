import React from "react";
import "./test.css";

function Row({ row }) {
  return (
    <div class="row">
      {row.map((seat) => {
        return (
          <span
            class="seat"
            style={{
              backgroundColor: seat.occupied ? "red" : "green",
              visibility: seat.aisle ? "hidden" : "",
            }}
          >
            {seat.seatID}.
          </span>
        );
      })}
    </div>
  );
}

export default Row;
