import React from "react";
import styles from "./screenViewer.module.css";
import { ReactComponent as SeatSVG } from "../../images/couch-seat-svgrepo-com.svg";

const Seat = ({ seat }) => {
  return (
    <SeatSVG
      className={styles.seat}
      style={{
        fill: "green",
        backgroundColor: "white",
        visibility: seat.aisle ? "hidden" : "",
      }}
      key={`seat-${seat.seatID}`}
    />
  );
};

export default Seat;
