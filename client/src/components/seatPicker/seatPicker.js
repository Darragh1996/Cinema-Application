import React, { useEffect, useState } from "react";
import { justAxios, axiosWithAuth } from "../../utils/axios";
import Row from "./row";

function SeatPicker({ showingID, colCount }) {
  const [selectedSeats, setSelectedSeats] = useState(new Set());
  const [hasChanged, setHasChanged] = useState(false);
  const [rows, setRows] = useState([]);

  let handleSubmit = (event) => {
    console.log(selectedSeats);
    axiosWithAuth()
      .post("/showingSeats/book", { ids: [...selectedSeats], showingID })
      .then((res) => {
        if (res.status === 200) {
          setHasChanged(!hasChanged);
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
        setRows(rows);
      });
  }, [showingID, hasChanged, colCount]);

  return (
    <div className="pickYourSeats">
      <h3>Seats selected: {selectedSeats.size}</h3>
      <div className="seatsLayout">
        {colCount && rows ? (
          rows.map((row, index) => {
            return (
              <Row
                row={row}
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
                key={`row-${index}`}
              />
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      <button onClick={handleSubmit}>Book Seats</button>
    </div>
  );
}

export default SeatPicker;
