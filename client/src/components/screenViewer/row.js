import React from "react";
import styles from "./screenViewer.module.css";

import Seat from "./seat";

function Row({ row, selectedSeats, setSelectedSeats }) {
  return (
    <tr className={styles.screenViewerRow}>
      {row.map((seat, index) => {
        return (
          <td className={styles.screenViewerCell}>
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
