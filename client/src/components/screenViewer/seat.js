import React from "react";
import "./screenViewer.css";
import { ReactComponent as SeatSVG } from "../../images/couch-seat-svgrepo-com.svg";

const Seat = ({ seat }) => {
  return (
    <SeatSVG
      className={`seat seat-${seat.seatID}`}
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
