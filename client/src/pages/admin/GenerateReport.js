import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { justAxios, axiosWithAuth } from "../../utils/axios.js";

import "./adminStyles.css";

function GenerateReport() {
  const [showings, setShowings] = useState([]);

  //need to get showings between two dates rather than them all
  useEffect(() => {
    justAxios()
      .get("/showings")
      .then((res) => {
        let showings = res.data.data;
        for (let i = 0; i < showings.length; i++) {
          const date = new Date(showings[i].datetime);
          const options = {
            weekday: "long",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          };
          const formattedDate = date.toLocaleDateString("en-IE", options);
          showings[i].datetime = formattedDate;

          //get total number of seats per screen
          axiosWithAuth()
            .get(`/seats/${showings[i].id}`)
            .then((res) => {
              let seats = res.data.data;
              //get the number of seats using length
              let totalSeats = seats.length;
              //filter out the seats to find number of aisle seats
              let aisleSeats = seats.filter(seat => seat.aisle == true)
              //take away the number of aisle seats to get actual number of seats
              totalSeats = totalSeats - aisleSeats.length;
              //update showings to include total number of seats
              setShowings((prevShowings) => {
                let updatedShowings = [...prevShowings];
                updatedShowings[i].totalSeats = totalSeats;
                return updatedShowings;
              });
            })

          //get total number of seats that are available
          axiosWithAuth()
            .get(`/ShowingSeats/${showings[i].id}`)
            .then((res) => {
              //get the showing seats data
              let showingSeat = res.data.showingSeats;
              //filter the seats to find the number of occupied seats
              let occupiedSeats = showingSeat.filter(seat => seat.occupied == true);
              //set the length of occupied seats to tickets sold
              let ticketsSold = occupiedSeats.length
              //update showings to include tickets sold
              setShowings((prevShowings) => {
                let updatedShowings = [...prevShowings];
                updatedShowings[i].ticketsSold = ticketsSold;
                return updatedShowings;
              });
            })
        }
        setShowings(showings);
      })
  }, []);

  return (
    <div>
      <div id="header">
        <h1>Weekly Report</h1>
        <div id="headerButtons">
          <Link to="/admin">
            <button className="btn btn-success">Home</button>
          </Link>
        </div>
      </div>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">Movie Name</th>
            <th scope="col">Screen</th>
            <th scope="col">Date & Time</th>
            <th scope="col">Total Tickets</th>
            <th scope="col">Tickets Sold</th>
            <th scope="col">Money Made</th>
          </tr>
        </thead>
        <tbody>
          {showings.map((showing) => {
            return (
              <tr key={showing.id}>
                <td>{showing.name}</td>
                <td>{showing.screenID}</td>
                <td>{showing.datetime}</td>
                <td>{showing.totalSeats}</td>
                <td>{showing.ticketsSold}</td>
                <td>€{(showing.ticketsSold) * (showing.price)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default GenerateReport