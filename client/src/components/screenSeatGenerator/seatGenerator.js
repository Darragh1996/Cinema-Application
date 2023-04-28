import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axios";
import styles from "./screenSeatGenerator.module.css";
import Row from "./row";

function SeatGenerator() {
  const [seats, setSeats] = useState([]);
  const navigate = useNavigate();

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
    axiosWithAuth()
      .post("/screens", {
        rowCount: jsonSeats.length,
        colCount: jsonSeats[0].length,
        seats: jsonSeats,
      })
      .then((res) => {
        console.log(res);
        navigate("/admin/screens");
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
    <div className={styles.seatGeneratorParent}>
      <div className={styles.seatGeneratorTop}>
        <div>
          <h3>Enter amount of seats in rows and columns</h3>
        </div>
        

        <label htmlFor="rows">Row value:</label>
        <input type="number" id="rowSelect" name="rows" min="1" max="99" />

        <label htmlFor="cols">Column value:</label>
        <input type="number" id="colSelect" name="cols" min="1" max="99" />

        <button 
          onClick={generateSeats}
          className="bookNowButton"
        >Generate</button>
      </div>

      <table className={styles.screenSeatGenTable}>
        <tbody>
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
          
        </tbody>
      </table>
      <button
        className="bookNowButton"
        onClick={handleSubmit}
        style={{
          visibility: seats.length ? "" : "hidden",
          width: '200px'
        }}
      >
        Create Screen
      </button>
    </div>
  );
}

export default SeatGenerator;
