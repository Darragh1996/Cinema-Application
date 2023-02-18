import React, { useEffect, useState } from "react";
import { justAxios } from "../../utils/axios";
import Row from "./row";

function SeatPicker() {
  const [seats, setSeats] = useState([]);
  const [res, setRes] = useState([]);

  useEffect(() => {
    justAxios()
      .get("/showingSeats/1")
      .then((res) => {
        console.log(res.data.showingSeats);
        setRes(res.data.showingSeats);
      });
  }, []);

  useEffect(() => {
    let rows = [];
    let counter = 1;
    let temp = [];
    for (let i = 0; i < res.length; i++) {
      if (counter > 5) {
        rows.push(temp);
        counter = 1;
        temp = [];
      }
      temp.push(res[i]);
      counter += 1;
    }
    rows.push(temp);
    setSeats(rows);
  }, [res]);

  return (
    <div>
      <h3>This is the seat picker</h3>
      <ul>
        {seats.map((row) => {
          return <Row row={row} />;
        })}
      </ul>
    </div>
  );
}

export default SeatPicker;
