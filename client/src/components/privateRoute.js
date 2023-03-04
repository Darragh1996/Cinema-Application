import React from "react";
import { Navigate } from "react-router-dom";
import decode from "jwt-decode";

function privateRoute({ Component, admin }) {
  const checkToken = () => {
    try {
      let token = localStorage.getItem("reel_dreams_jwt");
      const decodedToken = decode(token);
      if (
        decodedToken.hasOwnProperty("subject") &&
        decodedToken.hasOwnProperty("name") &&
        decodedToken.hasOwnProperty("email") &&
        decodedToken.hasOwnProperty("exp") &&
        decodedToken.hasOwnProperty("iat") &&
        decodedToken.hasOwnProperty("admin")
      ) {
        // this if check is for preventing users from
        // getting to admin only pages
        if (admin === true && decodedToken.admin === false) {
          return false;
        }
        return true;
      } else {
        localStorage.clear();
        return false;
      }
    } catch (error) {
      localStorage.clear();
      return false;
    }
  };

  return localStorage.getItem("reel_dreams_jwt") && checkToken() ? (
    <Component />
  ) : (
    <Navigate to="/login" />
  );
}

export default privateRoute;
