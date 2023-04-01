import React, { useEffect, useState, useRef } from "react";
// import { justAxios } from "../../utils/axios";
import { useNavigate } from "react-router-dom";

import decode from "jwt-decode";

import logo from "./img/logo.png";
import "../../styles.css";
import styles from "./navBar.module.css";

function NavBar() {
  const navigate = useNavigate();
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const dropdownRef = useRef(null);

  let token = localStorage.getItem("reel_dreams_jwt");
  const decodedToken = decode(token);
  const userName = decodedToken.name;

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest("#account-button")
      ) {
        setIsAccountOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleAccountClick = () => {
    setIsAccountOpen((prevState) => !prevState);
  };

  const handleLogoutClick = () => {
    sessionStorage.clear();
    localStorage.removeItem("reel_dreams_jwt");
    navigate("/login");
  };

  const viewBookings = () => {
    console.log("it works");
    navigate("/viewBookings");
  };

  console.log(window.location.pathname)

  return (
    <div id="nav" style={{ 
        display: "flex", 
        alignItems: "center",
        top: '0px',
        backgroundColor: (window.location.pathname === '/' || window.location.pathname.startsWith('/bookSeats')) ? 'rgba(255, 255, 255, 0)' : 'rgba(0,0,0,1)'
      }}><link href='https://fonts.googleapis.com/css?family=Roboto Flex' rel='stylesheet'></link>
      <img src={logo} alt="Reel Dreams" style={{ width: "90px" }} onClick={()=>navigate('/')}/>
      <h1
        style={{
          // textAlign: "left",
          // marginTop: 'auto',
          // marginBottom: 'auto',
          paddingLeft: '25px',
          color: "#fcaf3b",  
          fontWeight: 'bolder'  ,
          fontSize: '22px'
        }}
      >
        Reel Dreams Cinema
      </h1>
      <div
        style={{
          position: "relative",
          marginLeft: "auto",
        }}
      >
        <button
          id="account-button"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "50px",
            border: "none",
            padding: "10px 20px",
            marginRight: "20px",
            color: "#333",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
            transition: "all 0.3s",
          }}
          onClick={handleAccountClick}
        >
          {userName}
        </button>
        {isAccountOpen && (
          <div
            ref={dropdownRef}
            style={{
              position: "absolute",
              top: "calc(100% + 10px)",
              right: 0,
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              padding: "10px",
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
              zIndex: 1,
              minWidth: "150px",
              textAlign: "center",
            }}
          >
          <button
            onClick={viewBookings}
            style={{
              backgroundColor: "black",
              color: "#ffffff",
              borderRadius: "5px",
              padding: "5px 10px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            className={styles.navBtn}
          >
            View Bookings
          </button>
            <button
              onClick={handleLogoutClick}
              style={{
                backgroundColor: "orange",
                color: "#000",
                borderRadius: "5px",
                padding: "5px 10px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              className={styles.navBtn}
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
