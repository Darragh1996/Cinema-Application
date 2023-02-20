import React from "react";
import "./seatPicker.css";

import Seat from "./seat";

function Row({ row, selectedSeats, setSelectedSeats }) {
  return (
    <div className="row">
      {row.map((seat, index) => {
        return (
          <Seat
            seat={seat}
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
            key={`seat-${index}`}
          />
        );
      })}
    </div>
  );
}

export default Row;
