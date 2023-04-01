import React, { useEffect, useState } from "react";
import { justAxios, axiosWithAuth } from "../../utils/axios";
import styles from "./seatPicker.module.css";
import Row from "./row";

function SeatPicker({ showingID, colCount }) {
  const [selectedSeats, setSelectedSeats] = useState(new Set());
  const [hasChanged, setHasChanged] = useState(false);
  const [rows, setRows] = useState([]);
  const [showingPrice, setShowingPrice] = useState(0);

  let handleSubmit = (event) => {
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

  useEffect(() => {
    justAxios()
      .get(`/showings/view/${showingID}`)
      .then((res2) => {
        console.log("res2", res2)
        setShowingPrice(res2.price)
      })
  })

  return (
    <div className={styles.seatPickerContainer}>

      {/* leftide */}
      <div className={styles.pickerLeftSide}>
        <div className={styles.seatsSelectedCount}>Seats selected: {selectedSeats.size}</div>
        <div className={styles.prices}>
          <table>
            <tr>
              <td>Standard</td><td>{selectedSeats.size}</td><td>{showingPrice}</td>
            </tr>
          </table>
        </div>
        <button className="bookNowButton" onClick={handleSubmit}>Book Seats</button>
      </div>

      {/* rightSide */}
      <div className={styles.pickerRightSide}>
        {colCount && rows ? (
          <table className={styles.seatPickerTable}>
            <tbody>
              {rows.map((row, index) => {
                return (
                  <Row
                    row={row}
                    selectedSeats={selectedSeats}
                    setSelectedSeats={setSelectedSeats}
                    key={`row-${index}`}
                  />
                );
              })}
            </tbody>
          </table>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>

      
    </div>
  );
}

export default SeatPicker;
