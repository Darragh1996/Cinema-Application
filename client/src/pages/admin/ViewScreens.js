import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import deleteScreen from "../../../../server/api/resources/screens";

import ScreenViewer from "../../components/screenViewer/screenViewer.js";

// import styles from "./ViewMovie.module.css";
import "./adminStyles.css";

import { justAxios, axiosWithAuth } from "../../utils/axios.js";

// import "bootstrap/dist/css/bootstrap.min.css";

function ViewScreens() {
  const [screens, setScreens] = useState([]);
  const [choice, setChoice] = useState(0);
  const [selectedScreen, setSelectedScreen] = useState({});

  const deleteButtonPath = "https://drive.google.com/uc?export=view&id=1JDIqx_MMt2JyjUlTP8-Qi8MGZs8JetjZ";

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

  let handleDeleteClick = (screenID) => {
    // deleteScreen(screenID)
    console.log(screenID)
  }

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
      <div className="screenViewer">
        <ul style={{ listStyleType: "none" }}>
          {screens.map((screen) => {
            return (
              <li
                className={choice === screen.id ? "highlighted" : ""}
                onClick={() => handleClick(screen.id)}
                onMouseOver={() => {return document.getElementById(`deleteScreen${screen.id}`).hidden = false;}}
                onMouseLeave={() => {return document.getElementById(`deleteScreen${screen.id}`).hidden = true;}}
                // a key is needed
                key={screen.id}
              >
                Screen {screen.id} 
                <img 
                  className="deleteScreenButton" 
                  id={`deleteScreen${screen.id}`} 
                  hidden 
                  src={deleteButtonPath} 
                  alt="del"
                  onClick={() => handleDeleteClick(screen.id)}
                ></img>
              </li>
            );
          })}
        </ul>
        <ScreenViewer screenID={choice} colCount={selectedScreen.colCount} />
      </div>
    </div>
  );
}

export default ViewScreens;
