import React from "react";

import ExampleButton from "../components/exampleButton.js";
import AddMovieButton from "../components/addMovieButton";
import CreateUserButton from "../components/createUserButton.js";
import DeleteMovieButton from "../components/deleteMovieButton.js";
import LoginButton from "../components/loginButton.js";
import ViewMovieButton from "../components/viewMovieButton.js";

function home() {
  return (
    <div>
      <h1>Home page</h1>
      <ExampleButton /> <br/>
      <AddMovieButton/> <br/>
      <CreateUserButton/> <br/>
      <DeleteMovieButton/> <br/>
      <LoginButton/> <br/>
      <ViewMovieButton/>
    </div>
  );
}

export default home;
