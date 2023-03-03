import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ScreenViewer from "../../components/screenViewer/screenViewer.js";

// import styles from "./ViewMovie.module.css";
import "./adminStyles.css";

import { justAxios } from "../../utils/axios.js";

// import "bootstrap/dist/css/bootstrap.min.css";

function ViewScreens() {
  const [screens, setScreens] = useState([]);
  const [choice, setChoice] = useState(0);
  const [selectedScreen, setSelectedScreen] = useState({});

  useEffect(() => {
    justAxios()
      .get("/screens")
      .then((res) => {
        setScreens(res.data.screens);
        setChoice(res.data.screens[0].id);
        setSelectedScreen(res.data.screens[0]);
      });
  }, []);

  useEffect(() => {
    justAxios()
      .get(`/screens/${choice}`)
      .then((res) => {
        if (res.data.screen) {
          console.log(res);
          setSelectedScreen(res.data.screen);
        }
      });
  }, [choice]);

  let handleClick = (screenID) => {
    setChoice(screenID);
  };

  return (
    <div>
      <div id="header">
        <h1>Screens List</h1>
        <div id="headerButtons">
          <Link to="/admin">
            <button className="btn btn-success">Home</button>
          </Link>
          <Link to="/admin/addScreen">
            <button className="btn btn-primary">+ Add Screen</button>
          </Link>
        </div>
      </div>
      <div>
        <ul style={{ listStyleType: "none" }}>
          {screens.map((screen) => {
            // if (index === 0) {
            //   return <li className="highlighted">Screen {screen.id}</li>;
            // } else {
            //   return <li>Screen {screen.id}</li>;
            // }
            return (
              <li
                className={choice === screen.id ? "highlighted" : ""}
                onClick={() => handleClick(screen.id)}
              >
                Screen {screen.id}
              </li>
            );
          })}
        </ul>
      </div>
      <ScreenViewer screenID={choice} colCount={selectedScreen.colCount} />
    </div>
  );
}

export default ViewScreens;
