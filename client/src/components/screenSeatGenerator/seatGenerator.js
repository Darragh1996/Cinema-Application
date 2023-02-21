import React, { useEffect, useState } from "react";
// import { justAxios } from "../../utils/axios";
// import Row from "./row";
// import Seat from "./seat";
import Row from "./row";

function SeatGenerator({ showingID, colCount }) {
  const [seats, setSeats] = useState([]);

  let handleSave = (event) => {
    console.log(seats);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    let rowVal = document.getElementById("rowSelect").valueAsNumber;
    let colVal = document.getElementById("colSelect").valueAsNumber;

    let seats = [];

    for (let i = 0; i < rowVal; i++) {
      let row = [];
      for (let j = 0; j < colVal; j++) {
        row.push(1);
      }
      seats.push(row);
    }
    setSeats(seats);
    console.log("row: ", rowVal, "col: ", colVal);
  };

  useEffect(() => {
    console.log(Math.random());
    console.log(seats);
  }, [seats]);

  return (
    <div>
      <h3>This is a seat generator</h3>
      <label for="rows">Select a row value:</label>

      {/* <select name="rows" id="rowSelect">
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select> */}
      <input type="number" id="rowSelect" name="rows" min="1" max="99" />

      <label for="cols">Select a column value:</label>

      {/* <select name="cols" id="colSelect">
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select> */}

      <input type="number" id="colSelect" name="cols" min="1" max="99" />

      <button onClick={handleSubmit}>Generate</button>

      <div id="seatLayout">
        {seats.map((row, index) => {
          return <Row row={row} setSeats={setSeats} rowIndex={index} />;
        })}
        <button
          onClick={handleSave}
          style={{
            visibility: seats.length ? "" : "hidden",
          }}
        >
          Save Seats Layout
        </button>
      </div>
    </div>
  );
}

export default SeatGenerator;
