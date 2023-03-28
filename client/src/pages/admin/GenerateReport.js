//get movies showing from chosen date to date 6 days later.
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { justAxios } from "../../utils/axios.js";

import "./adminStyles.css";

function GenerateReport() {
    const [showings, setShowings] = useState([]);
  
  useEffect(() => {
    justAxios()
    //get the showings
      .get("/showings")
      .then((res) => {
        console.log(res);
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
        }
        setShowings(showings);
      });
  });
    //get datetime
    //get movie id and get movie name by movie id


    return (
        <div>
        {/* show list of showings with movie name*/}
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
          </tr>
        </thead>
        <tbody>
          {showings.map((showing) => {
            return (
              <tr>
                <td>{showing.name}</td>
                <td>{showing.screenID}</td>
                <td>{showing.datetime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
            
        </div>

    );
}
export default GenerateReport