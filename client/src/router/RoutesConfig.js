import React from "react";

import Home from "../pages/Home/Home.js";
import Example from "../pages/example.js";
import AddMovie from "../pages/admin/AddMovie.js";
import CreateUser from "../pages/createUser.js";
// import DeleteMovie from "../pages/deleteMovie.js";
import UserLogin from "../pages/userLogIn.js";
import ViewMovies from "../pages/admin/ViewMovie.js";
import EditMovie from "../pages/admin/EditMovie.js";
import AdminHome from "../pages/admin/AdminHome.js";

// import CreateScreen from "../pages/admin/createScreen.js";
// import BookSeats from "../pages/bookSeats.js";

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
    path: "/admin",
    element: <AdminHome />,
  },
  {
    path: "/admin/addMovie",
    element: <AddMovie />,
  },
  {
    path: "/createUser",
    element: <CreateUser />,
  },
  // {
  //   path: "/deleteMovie",
  //   element: <DeleteMovie />,
  // },
  {
    path: "/admin/editMovie/:movieID",
    element: <EditMovie />,
  },
  {
    path: "/userLogin",
    element: <UserLogin />,
  },
  {
    path: "/admin/viewMovies",
    element: <ViewMovies />,
  },
  // {
  //   path: "/admin/createScreen",
  //   element: <CreateScreen />,
  // },
  // {
  //   path: "/bookSeats/:showingID",
  //   element: <BookSeats />,
  // },
];

export default RoutesConfig;
