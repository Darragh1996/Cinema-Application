import React, { useEffect, useState } from "react";
import decode from "jwt-decode";
import { axiosWithAuth } from "../utils/axios";
import { Link } from "react-router-dom";
import { Trash } from "react-bootstrap-icons";

function ViewBookings() {
  const [booking, setBookings] = useState([]);
  const [update, setUpdate] = useState(false);
  const [userID, setUserID] = useState(0);

  useEffect(() => {
    let token = localStorage.getItem("reel_dreams_jwt");

    if (token) {
      const decoded = decode(token);
      setUserID(decoded.subject);
    }
  }, []);

  useEffect(() => {
    axiosWithAuth()
      .get("/bookings/" + userID)
      .then((res) => {
        // console.log(res.data)
        setBookings(res.data.bookings);
      });
  }, [userID, update]);

  let deleteBooking = async (bookingId) => {
    try {
      axiosWithAuth()
        .delete(`bookings/${userID}/${bookingId}`)
        .then((res) => {
          console.log(bookingId);
          setUpdate(!update);
        });
    } catch (err) {
      console.log(err);
    }
  };

  function formatDatetime(datetime) {
    const date = new Date(datetime);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const formattedDatetime = date.toLocaleDateString("en-GB", options);
    return formattedDatetime;
  }

  return (
    <div>
      <h1>Bookings</h1>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">Movie</th>
            <th scope="col">Date & Time</th>
            <th scope="col">No. of tickets</th>
            <th scope="col">Cancel</th>
          </tr>
        </thead>
        <tbody>
          {booking.map((booking) => {
            return (
              <tr>
                <td>{booking.film_name}</td>
                <td>{formatDatetime(booking.datetime)}</td>
                <td>{booking.total_bookings}</td>
                <td>
                  <Link
                    onClick={() => deleteBooking(booking.showingID)}
                    to={`/viewBookings`}
                  >
                    <span className="glyphicon glyphicon-trash">
                      <Trash />
                    </span>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default ViewBookings;
