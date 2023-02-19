import React, { useEffect, useState } from "react";
import { justAxios } from "../../utils/axios";
import Row from "./row";
import { v4 as uuidv4 } from "uuid";

function SeatPicker({ showingID, colCount }) {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState(new Set());

  useEffect(() => {
    justAxios()
      .get(`/showingSeats/${showingID}`)
      .then((res) => {
        let rows = [];
        let row = [];
        let counter = 1;

        let seats = res.data.showingSeats;

        for (let i = 0; i < seats.length; i++) {
          if (counter > colCount) {
            rows.push(row);
            counter = 1;
            row = [];
          }
          row.push(seats[i]);
          counter += 1;
        }
        rows.push(row);
        setSeats(rows);
      });
  }, []);

  return (
    <div>
      <h3>This is the seat picker</h3>
      <ul>
        {seats.map((row, index) => {
          return (
            <Row
              row={row}
              selectedSeats={selectedSeats}
              setSelectedSeats={setSelectedSeats}
              key={`row-${index}`}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default SeatPicker;
