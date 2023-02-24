import React from "react";

import Home from "../pages/home.js";
import Example from "../pages/example.js";
import AddMovie from "../pages/addMovie.js";
import CreateUser from "../pages/createUser.js";
import DeleteMovie from "../pages/deleteMovie.js";
import UserLogin from "../pages/userLogIn.js";
import ViewMovie from "../pages/viewMovie.js";
import EditMovie from "../pages/editMovie.js";

import CreateScreen from "../pages/admin/createScreen.js";
import BookSeats from "../pages/bookSeats.js";

const RoutesConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/example",
    element: <Example />,
  },
  {
    path: "/addMovie",
    element: <AddMovie />,
  },
  {
    path: "/createUser",
    element: <CreateUser />,
  },
  {
    path: "/deleteMovie",
    element: <DeleteMovie />,
  },
  {
    path: "/editMovie",
    element: <EditMovie />,
  },
  {
    path: "/userLogin",
    element: <UserLogin />,
  },
  {
    path: "/viewMovie",
    element: <ViewMovie />,
  },
  {
    path: "/admin/createScreen",
    element: <CreateScreen />,
  },
  {
    path: "/bookSeats/:showingID",
    element: <BookSeats />,
  },
];

export default RoutesConfig;
