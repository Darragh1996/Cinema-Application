import React, { useEffect, useState } from "react";
import { justAxios } from "../../utils/axios";
import Row from "./row";

function SeatPicker({ screenID, colCount }) {
  const [hasChanged, setHasChanged] = useState(false);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    justAxios()
      .get(`/seats/${screenID}`)
      .then((res) => {
        let rows = [];
        let row = [];
        let counter = 1;

        let seats = res.data.data;
        console.log(res);

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
        console.log("rows: ", rows);
        console.log("colCount: ", colCount);
        setRows(rows);
      });
  }, [screenID, colCount]);

  return (
    <div>
      {colCount && rows ? (
        rows.map((row, index) => {
          return <Row row={row} key={`row-${index}`} />;
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default SeatPicker;
