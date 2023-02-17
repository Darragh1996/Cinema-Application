import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SwitchRoutes from "./SwitchRoutes";
import RoutesConfig from "./RoutesConfig";

const AppRouter = () => {
  console.log(SwitchRoutes);
  return (
    <Router>
      <SwitchRoutes routes={RoutesConfig} />
    </Router>
  );
};

export default AppRouter;
