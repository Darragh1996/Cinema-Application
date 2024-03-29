import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { Trash } from "react-bootstrap-icons";

import ScreenViewer from "../../components/screenViewer/screenViewer.js";

// import styles from "./ViewMovie.module.css";
import "./adminStyles.css";

import { justAxios, axiosWithAuth } from "../../utils/axios.js";

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

  let handleDeleteClick = async (screenID) => {
    // deleteScreen(screenID)
    try {
      axiosWithAuth()
        .delete(`/screens/`+screenID)
        console.log("Screen number ", screenID, " deleted")

        window.location.reload();

    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="marginAbove">
      <NavBar/>
      <div id="header">
        <h1>Screens List</h1>
        <div id="headerButtons">
          <Link to="/admin" style={{ textDecoration: 'none' }}>
            <button className="btn btn-success">Home</button>
          </Link>
          <Link to="/admin/addScreen" style={{ textDecoration: 'none' }}>
            <button className="btn btn-primary">+ Add Screen</button>
          </Link>
        </div>
      </div>
      <div className="screenViewer">
        <ul className="screenViewerLeftUL" style={{ listStyleType: "none" }}>
          {screens.map((screen) => {
            return (
              <span className="screensListSpan">
                <li
                  className={choice === screen.id ? "highlighted" : ""}
                  onClick={() => {
                    handleClick(screen.id) 
                    document.getElementById(`deleteScreen${screen.id}`).hidden = false;
                    screens.forEach(e => {
                      if(e.id !== screen.id){
                        document.getElementById(`deleteScreen${e.id}`).hidden = true;
                      }
                    });
                  }}
                  // a key is needed
                  key={screen.id}
                >
                  Screen {screen.id} 
                  {/* <img 
                    className="deleteScreenButton" 
                    id={`deleteScreen${screen.id}`} 
                    hidden={choice === screen.id ? "" : "hidden"}
                    src={deleteButtonPath} 
                    alt="del"
                    onClick={() => handleDeleteClick(screen.id)}
                  ></img> */}
                  <span
                    className="deleteScreenButton" 
                    id={`deleteScreen${screen.id}`} 
                    hidden={choice === screen.id ? "" : "hidden"}
                    onClick={() => handleDeleteClick(screen.id)}
                  >
                    <Trash/>
                  </span>
                </li>
              </span>
            );
          })}
        </ul>
        <ScreenViewer screenID={choice} colCount={selectedScreen.colCount} />
      </div>
    </div>
  );
}

export default ViewScreens;
