import React from "react";
import { Link } from "react-router-dom";

import "./adminStyles.css";

function AdminHome() {
  return (
    <div>
      <h1 id="indexHeader">Reel Dreams Admin Page</h1>
      <div id="indexBtns">
        <Link to="/admin/viewMovies">
          <button class="btn btn-primary">Movie List</button>
        </Link>
        <Link to="/timetable">
          <button class="btn btn-primary">Timetable</button>
        </Link>
        <Link to="/events">
          <button class="btn btn-primary">Screens</button>
        </Link>
      </div>
    </div>
  );
}

export default AdminHome;
