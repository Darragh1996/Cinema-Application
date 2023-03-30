import React, { useEffect, useState, useRef } from "react";
// import { justAxios } from "../../utils/axios";
import { useNavigate } from "react-router-dom";

import logo from "./img/logo.png";
import "../../styles.css";
import "./navBar.module.css";

function NavBar() {
  const navigate = useNavigate();
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  return (
    <div id="nav" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="Reel Dreams" style={{ width: "90px" }} />
      <div style={{ flex: 1 }}></div>
      <h1
        style={{
          textAlign: "left",
          margin: 0,
          flex: 2,
          color: "orange",
          paddingLeft: "40px",
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
          Account
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
              onClick={handleLogoutClick}
              style={{
                backgroundColor: "orange",
                color: "#ffffff",
                borderRadius: "5px",
                padding: "5px 10px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              Log Out
            </button>
            <button
              onClick={viewBookings}
              style={{
                backgroundColor: "green",
                color: "#ffffff",
                borderRadius: "5px",
                padding: "5px 10px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              View Bookings
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
