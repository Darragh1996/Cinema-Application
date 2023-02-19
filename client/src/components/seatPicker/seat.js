import React, { useState, useEffect } from "react";
import "./test.css";

const Seat = ({ seat, selectedSeats, setSelectedSeats }) => {
  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(selectedSeats.has(seat.seatID));
  }, [selectedSeats, seat.seatID]);

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
    console.log(selectedSeats);
    if (!isSelected) {
      console.log(event.target);
      event.target.style.backgroundColor = "blue";
      addToSet(seat.seatID);
    } else {
      event.target.style.backgroundColor = "green";
      removeFromSet(seat.seatID);
    }
  };

  return (
    <div
      className={`seat seat-${seat.seatID}`}
      onClick={(e) => handleSeatClick(e)}
      style={{
        backgroundColor: seat.occupied ? "red" : isSelected ? "blue" : "green",
        visibility: seat.aisle ? "hidden" : "",
        pointerEvents: seat.occupied ? "none" : "",
      }}
      key={`seat-${seat.seatID}`}
    >
      {seat.seatID}
    </div>
  );
};

export default Seat;
