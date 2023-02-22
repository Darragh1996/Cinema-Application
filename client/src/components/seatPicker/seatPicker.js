import React, { useEffect, useState } from "react";
import { justAxios } from "../../utils/axios";
import Row from "./row";

function SeatPicker({ showingID, colCount }) {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState(new Set());
  const [response, setResponse] = useState(false);

  let handleSubmit = (event) => {
    justAxios()
      .post("/showingSeats/book", { ids: [...selectedSeats] })
      .then((res) => {
        if (res.status === 200) {
          setResponse(!response);
        }
        setSelectedSeats(new Set());
      });
  };

  useEffect(() => {
    justAxios()
      .get(`/showingSeats/${showingID}`)
      .then((res) => {
        let rows = [];
        let row = [];
        let counter = 1;

        let seats = res.data.showingSeats;

        console.log("seats before: ", seats);

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
        console.log("seats ordered: ", rows);
        setSeats(rows);
      });
  }, [response, colCount]);

  return (
    <div>
      <h3>Seats selected: {selectedSeats.size}</h3>
      <div>
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
      </div>
      <button onClick={handleSubmit}>Book Seats</button>
    </div>
  );
}

export default SeatPicker;
