import React from "react";
import { Navigate } from "react-router-dom";
import decode from "jwt-decode";

function privateRoute({ Component, admin }) {
  const checkToken = () => {
    try {
      let token = localStorage.getItem("reel_dreams_jwt");
      const decodedToken = decode(token);
      console.log("Decoded token: ", decodedToken);
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
        if (
          decodedToken.exp < Date.now() / 1000 ||
          (admin === true && decodedToken.admin === false)
        ) {
          return false;
        }
        return true;
      } else {
        console.log("something wrong with the jwt");
        localStorage.clear();
        window.alert("Your login session has expired");
        return false;
      }
    } catch (error) {
      console.log("something wrong with the jwt");
      localStorage.clear();
      window.alert("Your login session has expired");
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
