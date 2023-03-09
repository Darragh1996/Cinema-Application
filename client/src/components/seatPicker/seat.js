import React, { useState, useEffect } from "react";
import "./seatPicker.css";
import { ReactComponent as SeatSVG } from "../../images/couch-seat-svgrepo-com.svg";

const Seat = ({ seat, selectedSeats, setSelectedSeats }) => {
  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(selectedSeats.has(seat.id));
  }, [selectedSeats, seat.id]);

  let addToSet = (newSeat) => {
    setSelected(true);
    setSelectedSeats((prevSet) => new Set([...prevSet, newSeat]));
  };

  let removeFromSet = (itemToRemove) => {
    setSelected(false);
    setSelectedSeats((prevSet) => {
      let newSet = new Set(prevSet);
      newSet.delete(itemToRemove);
      return newSet;
    });
  };

  let handleSeatClick = (event) => {
    if (!isSelected) {
      addToSet(seat.id);
    } else {
      removeFromSet(seat.id);
    }
  };

  return (
    <SeatSVG
      className={`seat seat-${seat.seatID}`}
      onClick={(e) => handleSeatClick(e)}
      style={{
        fill: seat.occupied ? "red" : isSelected ? "orange" : "green",
        backgroundColor: "white",
        visibility: seat.aisle ? "hidden" : "",
        pointerEvents: seat.occupied ? "none" : "",
      }}
      key={`seat-${seat.seatID}`}
    />
  );
};

export default Seat;
