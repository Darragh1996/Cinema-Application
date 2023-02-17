import React from "react";

import Home from "../pages/home.js";
import Example from "../pages/example.js";

const RoutesConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/example",
    element: <Example />,
  },
];

export default RoutesConfig;
