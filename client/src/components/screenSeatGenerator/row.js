import React from "react";
import styles from "./screenSeatGenerator.module.css";

import Seat from "./seat";

function Row({ row, rowIndex, setSeats }) {
  return (
    <tr className={styles.screenSeatGenRow}>
      {row.map((seat, index) => {
        return (
          <td className={styles.screenSeatGenCell}>
            <Seat
              rowIndex={rowIndex}
              colIndex={index}
              setSeats={setSeats}
              key={`seat-${index}`}
            />
          </td>
        );
      })}
    </tr>
  );
}

export default Row;
