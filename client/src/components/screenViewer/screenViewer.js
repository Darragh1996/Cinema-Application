import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../../utils/axios";
import styles from "./screenViewer.module.css";
import Row from "./row";

function SeatPicker({ screenID, colCount }) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axiosWithAuth()
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
        <table className={styles.screenViewerTable}>
          <tbody>
            {rows.map((row, index) => {
              return <Row row={row} key={`row-${index}`} />;
            })}
          </tbody>
        </table>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default SeatPicker;
