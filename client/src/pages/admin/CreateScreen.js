import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

import SeatGenerator from "../../components/screenSeatGenerator/seatGenerator";

function CreateScreen() {
  return (
    <div className="marginAbove">
      <NavBar/>
      <div id="header">
        <h1>Add Screen</h1>
        <div id="headerButtons">
          <Link to="/admin" style={{ textDecoration: 'none' }}>
            <button className="btn btn-success">Home</button>
          </Link>
          <Link to="/admin/screens" style={{ textDecoration: 'none' }}>
            <button className="btn btn-danger">Cancel</button>
          </Link>
        </div>
      </div>
      <SeatGenerator />
    </div>
  );
}

export default CreateScreen;
