import React, { useState } from "react";
import { justAxios } from "../../utils/axios";
import Row from "./row";

function SeatGenerator() {
  const [seats, setSeats] = useState([]);

  let handleSubmit = (event) => {
    let jsonSeats = seats.map((row, rowIndex) => {
      return row.map((seat, colIndex) => {
        return {
          rowID: rowIndex,
          colID: colIndex,
          aisle: seat ? false : true,
        };
      });
    });
    justAxios()
      .post("/screens", {
        rowCount: jsonSeats.length,
        colCount: jsonSeats[0].length,
        seats: jsonSeats,
      })
      .then((res) => {
        console.log(res);
      });
  };

  let generateSeats = (event) => {
    event.preventDefault();
    let rowVal = document.getElementById("rowSelect").valueAsNumber;
    let colVal = document.getElementById("colSelect").valueAsNumber;

    let seatsInit = [];

    for (let i = 0; i < rowVal; i++) {
      let row = [];
      for (let j = 0; j < colVal; j++) {
        row.push(1);
      }
      seatsInit.push(row);
    }
    setSeats((prevSeat) => {
      for (let i = 0; i < prevSeat.length; i++) {
        for (let j = 0; j < prevSeat[i].length; j++) {
          if (i < seatsInit.length && j < seatsInit[i].length) {
            seatsInit[i][j] = seats[i][j];
          } else {
            break;
          }
        }
      }
      return seatsInit;
    });
    console.log("row: ", rowVal, "col: ", colVal);
  };

  return (
    <div>
      <h3>This is a seat generator</h3>
      <label htmlFor="rows">Select a row value:</label>

      <input type="number" id="rowSelect" name="rows" min="1" max="99" />

      <label htmlFor="cols">Select a column value:</label>

      <input type="number" id="colSelect" name="cols" min="1" max="99" />

      <button onClick={generateSeats}>Generate</button>

      <div id="seatLayout">
        {seats.map((row, index) => {
          return (
            <Row
              row={row}
              setSeats={setSeats}
              rowIndex={index}
              key={`row-${index}`}
            />
          );
        })}
        <button
          onClick={handleSubmit}
          style={{
            visibility: seats.length ? "" : "hidden",
          }}
        >
          Create Screen
        </button>
      </div>
    </div>
  );
}

export default SeatGenerator;
