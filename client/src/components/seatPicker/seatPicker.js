import React, { useEffect, useState } from "react";
import { justAxios, axiosWithAuth } from "../../utils/axios";
import styles from "./seatPicker.module.css";
import Row from "./row";
import CreditCardForm from "../CreditCardForm/CreditCardForm.js"

function SeatPicker({ showingID, colCount }) {
  const [selectedSeats, setSelectedSeats] = useState(new Set());
  const [hasChanged, setHasChanged] = useState(false);
  const [rows, setRows] = useState([]);
  const [showingPrice, setShowingPrice] = useState(0.0);
  const [displayCreditCardForm, setDisplayCreditCardForm] = useState(false)

  let handleSubmit = (event) => {
    event.preventDefault()
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
      .get(`/showings/${showingID}`)
      .then((res) => {
        setShowingPrice(res.data.showing.price);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [showingID]);

  return (
    <div className={styles.seatPickerContainer}>
      {displayCreditCardForm ? <CreditCardForm handleSubmit={handleSubmit} setDisplayCreditCardForm={setDisplayCreditCardForm}/>: ""}
      {/* leftide */}
      <div className={styles.pickerLeftSide}>
        <div className={styles.seatsSelectedCount}>
          {selectedSeats.size} Seats
        </div>
        <div className={styles.prices}>
          <table>
            <tbody>
              <tr>
                <td>Standard</td>
                <td>{selectedSeats.size === 0 ? "-" : selectedSeats.size}</td>
                <td>{` \u20AC${showingPrice}`}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.leftSideLine}>
          {/* Empty line for display */}
        </div>
        <div className={styles.pricesTotal}>
          <table>
            <tbody>
              <tr>
                <td style={{ textAlign: "left" }}>Total</td>
                <td></td>
                <td>{"\u20AC" + showingPrice * selectedSeats.size}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <button className="bookNowButton" onClick={() => setDisplayCreditCardForm(true)}>
          Purchase
        </button>
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
              <tr colSpan={colCount}>
                <td className={styles.screen}>Screen This Way</td>
              </tr>
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
