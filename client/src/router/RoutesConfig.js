import React from "react";

import Home from "../pages/Home/Home.js";
import AddMovie from "../pages/admin/AddMovie.js";
import CreateUser from "../pages/createUser.js";
// import DeleteMovie from "../pages/deleteMovie.js";
import UserLogin from "../pages/userLogIn.js";
import ViewMovies from "../pages/admin/ViewMovie.js";
import EditMovie from "../pages/admin/EditMovie.js";
import AdminHome from "../pages/admin/AdminHome.js";
import ViewScreens from "../pages/admin/ViewScreens.js";
import ViewShowings from "../pages/admin/ViewShowings.js";
import AddShowing from "../pages/admin/AddShowing.js";
import EditShowing from "../pages/admin/EditShowing.js";
import ViewBooking from "../pages/viewBookings.js";

import CreateScreen from "../pages/admin/CreateScreen.js";
import BookSeats from "../pages/bookSeats.js";
import PrivateRoute from "../components/privateRoute.js";

const RoutesConfig = [
  {
    path: "/",
    element: <PrivateRoute Component={Home} admin={false} />,
  },
  {
    path: "/admin",
    element: <PrivateRoute Component={AdminHome} admin={true} />,
  },
  {
    path: "/admin/addMovie",
    element: <PrivateRoute Component={AddMovie} admin={true} />,
  },
  {
    path: "/register",
    element: <CreateUser />,
  },
  // {
  //   path: "/deleteMovie",
  //   element: <DeleteMovie />,
  // },
  {
    path: "/admin/editMovie/:movieID",
    element: <PrivateRoute Component={EditMovie} admin={true} />,
  },
  {
    path: "/login",
    element: <UserLogin />,
  },
  {
    path: "/viewBookings",
    element: <PrivateRoute Component={ViewBooking} admin={false} />,
  },
  {
    path: "/admin/movies",
    element: <PrivateRoute Component={ViewMovies} admin={true} />,
  },
  {
    path: "/admin/screens",
    element: <PrivateRoute Component={ViewScreens} admin={true} />,
  },
  {
    path: "/admin/addScreen",
    element: <PrivateRoute Component={CreateScreen} admin={true} />,
  },
  {
    path: "/bookSeats/:showingID",
    element: <PrivateRoute Component={BookSeats} admin={false} />,
  },
  {
    path: "/admin/showings",
    element: <PrivateRoute Component={ViewShowings} admin={true} />,
  },
  {
    path: "/admin/addShowing",
    element: <PrivateRoute Component={AddShowing} admin={true} />,
  },
  {
    path: "/admin/editShowing/:showingID",
    element: <PrivateRoute Component={EditShowing} admin={true} />,
  },
];

export default RoutesConfig;
