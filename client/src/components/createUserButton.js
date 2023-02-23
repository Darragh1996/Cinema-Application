import React from "react";
import { Link } from "react-router-dom";

function CreateUserButton(props) {
  return <Link to="/createUser">Create User</Link>;
}

export default CreateUserButton;