import React from "react";
// import "./seatPicker.css";

import Seat from "./seat";

function Row({ row, rowIndex, setSeats }) {
  return (
    <div className="row">
      {row.map((seat, index) => {
        return (
          <Seat
            rowIndex={rowIndex}
            colIndex={index}
            setSeats={setSeats}
            key={`seat-${index}`}
          />
        );
      })}
    </div>
  );
}

export default Row;
