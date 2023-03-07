import React, { useEffect, useState } from "react";
import decode from "jwt-decode";
import { axiosWithAuth } from "../utils/axios";

function viewBookings() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {

        let token = localStorage.getItem("reel_dreams_jwt");

        if (token) {
            const decoded = decode(token);
            const userID = decoded.subject;
            console.log(userID)

            axiosWithAuth()
                .get("/bookings/" + userID)
                .then((res) => {
                    setBookings(res.data.bookings);
                });
                console.log(bookings)
        }
    }, []);

    return (
        <div>
            <h1>Bookings</h1>
            <table className="table table-striped">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Movie ID</th>
                        <th scope="col">User</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => {
                        return (
                            <tr>
                                <td>{booking.showingID}</td>
                                <td>{booking.userID}</td>

                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default viewBookings;

