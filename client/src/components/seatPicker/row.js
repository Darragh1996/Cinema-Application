import React from "react";
import styles from "./seatPicker.module.css";

import Seat from "./seat";

function Row({ row, selectedSeats, setSelectedSeats }) {
  return (
    <tr className={styles.seatPickerRow}>
      {row.map((seat, index) => {
        return (
          <td className={styles.seatPickerCell}>
            <Seat
              seat={seat}
              selectedSeats={selectedSeats}
              setSelectedSeats={setSelectedSeats}
              key={`seat-${index}`}
            />
          </td>
        );
      })}
    </tr>
  );
}

export default Row;
