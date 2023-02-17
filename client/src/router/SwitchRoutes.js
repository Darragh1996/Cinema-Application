import React from "react";
import { Route, Routes } from "react-router-dom";

const SwitchRoutes = ({ routes }) => {
  return (
    <Routes>
      {routes.map((route, index) => {
        return <Route key={index} path={route.path} element={route.element} />;
      })}
    </Routes>
  );
};

export default SwitchRoutes;
