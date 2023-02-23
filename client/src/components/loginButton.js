import React from "react";
import { Link } from "react-router-dom";

function LoginButton(props) {
  return <Link to="/userLogIn">Login</Link>;
}

export default LoginButton;