import React, { useState, useEffect } from "react";
// import "./seatPicker.css";
import { ReactComponent as SeatSVG } from "../../images/couch-seat-svgrepo-com.svg";

const Seat = ({ rowIndex, colIndex, setSeats }) => {
  const [isSelected, setSelected] = useState(false);

  //   useEffect(() => {
  //     setSelected(selectedSeats.has(seat.seatID));
  //   }, [selectedSeats, seat.seatID]);

  //   let addToSet = (newSeat) => {
  //     setSelected(true);
  //     setSelectedSeats((prevSet) => new Set([...prevSet, newSeat]));
  //   };

  //   let removeFromSet = (itemToRemove) => {
  //     setSelected(false);
  //     setSelectedSeats((prevSet) => {
  //       let newSet = new Set(prevSet);
  //       newSet.delete(itemToRemove);
  //       return newSet;
  //     });
  //   };

  useEffect(() => {
    if (isSelected) {
      setSeats((prevSeats) => {
        let newSeats = prevSeats;
        newSeats[rowIndex][colIndex] = 0;
        return newSeats;
      });
    } else {
      setSeats((prevSeats) => {
        let newSeats = prevSeats;
        newSeats[rowIndex][colIndex] = 1;
        return newSeats;
      });
    }
  }, [isSelected]);

  let handleSeatClick = (event) => {
    setSelected(!isSelected);
  };

  return (
    <SeatSVG
      className={`seat`}
      onClick={(e) => handleSeatClick(e)}
      style={{
        fill: isSelected ? "gray" : "green",
        backgroundColor: "white",
      }}
      //   key={`seat-${seat.seatID}`}
    />
  );
};

export default Seat;
