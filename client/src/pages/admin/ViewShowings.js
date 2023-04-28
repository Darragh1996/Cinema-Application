import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pencil, Trash } from "react-bootstrap-icons";
import NavBar from "../../components/NavBar/NavBar";

// import styles from "./ViewMovie.module.css";
import "./adminStyles.css";

import { justAxios, axiosWithAuth } from "../../utils/axios.js";

// import "bootstrap/dist/css/bootstrap.min.css";

function ViewShowings() {
  const [showings, setShowings] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    justAxios()
      .get("/showings")
      .then((res) => {
        console.log("res1",res);
        let showings = res.data.data;
        for (let i = 0; i < showings.length; i++) {
          const date = new Date(showings[i].datetime);
          const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZoneName: "short",
          };
          const formattedDate = date.toLocaleDateString("en-IE", options);
          showings[i].datetime = formattedDate;
        }
        setShowings(showings);
      });
  }, [update]);

  let deleteShowing = async (showingID) => {
    // e.preventDefault();
    // let movieToDelete = ("/movies/" + id)
    try {
      axiosWithAuth()
        .delete(`/showings/${showingID}`)
        .then((res) => {
          console.log( res);
          // navigate("/admin/viewMovies");
          setUpdate(!update);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="marginAbove">
      <NavBar/>
      <div id="header">
        <h1>Showings List</h1>
        <div id="headerButtons">
          <Link to="/admin" style={{ textDecoration: 'none' }}>
            <button className="btn btn-success">Home</button>
          </Link>
          <Link to="/admin/addShowing" style={{ textDecoration: 'none' }}>
            <button className="btn btn-primary">+ Add Showing</button>
          </Link>
        </div>
      </div>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">Movie Name</th>
            <th scope="col">Screen</th>
            <th scope="col">Type</th>
            <th scope="col">Price</th>
            <th scope="col">Date & Time</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {showings.map((showing) => {
            return (
              <tr>
                <td>{showing.name}</td>
                <td>{showing.screenID}</td>
                <td>{showing.private === true ? "Private" : "Public"}</td>
                <td>{showing.price}</td>
                <td>{showing.datetime}</td>
                <td>
                  <Link to={`/admin/editShowing/${showing.id}`}>
                    <span className="glyphicon glyphicon-edit">
                      <Pencil />
                    </span>
                  </Link>
                </td>
                <td>
                  <Link
                    onClick={() => deleteShowing(showing.id)}
                    to={`/admin/showings`}
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

export default ViewShowings;
