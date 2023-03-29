import React, { useEffect, useState } from "react";
import { justAxios } from "../../utils/axios";
import { useNavigate } from "react-router-dom";


import logo from "./img/logo.png";
import userIcon from "./img/userIcon.png";

import "../../styles.css";

function NavBar() {
  const navigate = useNavigate();


  useEffect(() => {
    
  }, []);


  let logout = () => {
      sessionStorage.clear();                //Should clear data from user in that session
      localStorage.removeItem('reel_dreams_jwt');    
      navigate('/login');          
    }

  return (
    
      <div id="nav">
        <img src={logo} alt="Reel Dreams" />
        <a href>
          <h3>SHOWTIMES</h3>
        </a>
        <img id="userIcon" src={userIcon} alt="User Icon" />
        <button onClick={logout}>Logout</button>
      </div>
     
  );
}

export default NavBar;
