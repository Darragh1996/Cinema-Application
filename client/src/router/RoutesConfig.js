import React from "react";

import Home from "../pages/home.js";
import Example from "../pages/example.js";
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
    path: "/admin/createScreen",
    element: <CreateScreen />,
  },
  {
    path: "/bookSeats/:showingID",
    element: <BookSeats />,
  },
];

export default RoutesConfig;
