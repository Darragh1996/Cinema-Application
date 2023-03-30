import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

import "./adminStyles.css";

function AdminHome() {
  return (
    <div>
      <NavBar/>
      <h1 id="indexHeader">Reel Dreams Admin Page</h1>
      <div id="indexBtns">
        <Link to="/admin/movies">
          <button className="btn btn-primary">Movie List</button>
        </Link>
        <Link to="/admin/showings">
          <button className="btn btn-primary">Showings</button>
        </Link>
        <Link to="/admin/screens">
          <button className="btn btn-primary">Screens</button>
        </Link>
      </div>
    </div>
  );
}

export default AdminHome;
