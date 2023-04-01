import React, { useState, useEffect } from "react";
import PopUpModal from "../popUpModal/popUpModal";
import { useNavigate } from "react-router-dom";

import styles from "./movieSlider.module.css";

function MovieSlider({ movies }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trailer, setTrailer] = useState("");
  const [modalDisplay, setModalDisplay] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (trailer) {
      setModalDisplay(true);
    } else {
      setModalDisplay(false);
    }
  }, [trailer]);

  let handleModal = (trailer) => {
    console.log("clicked");
    setTrailer(trailer);
  };

  const updateImage = (val) => {
    console.log("update image");
    setCurrentIndex((currentIndex + val) % movies.length);
  };

  const goToSlide = (n) => {
    setCurrentIndex(n);
  };

  
  function pickSeats(selectedMovieID, selectedShowingID = 0) {
    navigate(`/bookSeats/${selectedMovieID}`, {
      state: {
        showingID: selectedShowingID,
      },
    });
  }


  useEffect(() => {
    const interval = setInterval(() => updateImage(1), 8000);
    return () => clearInterval(interval);
  }, [currentIndex, movies]);

  return (
    <div>
      <div className={styles.carouselContainer}>
        {movies.map((movie, idx) => {
          return (
            <div
              key={idx}
              className={styles.fade}
              style={{
                // width: "100vw", // Added width
                height: "600px", // Added height
                backgroundImage: `linear-gradient(to bottom, rgba(150, 150, 150, 0), rgba(0, 0, 0, 1)), url(${movie.img_landscape_url})`,
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: currentIndex === idx ? "" : "none",
              }}
            >
              <div>
                {/* {This Div belove is for the left side of the carousel data} */}
                <div className={styles.leftSide}>
                  <div className={styles.text}>{movie.name}</div>
                  <div className={styles.movieInfo}>
                    <div>{movie.genre}</div>
                    <div
                      style={{
                        paddingLeft: "12px",
                        paddingRight: "12px",
                        fontSize: "5px",
                      }}
                    >
                      ⬤
                    </div>
                    <div>{movie.director}</div>
                    <div
                      style={{
                        paddingLeft: "12px",
                        paddingRight: "12px",
                        fontSize: "5px",
                      }}
                    >
                      ⬤
                    </div>
                    <div>{movie.runtime} mins</div>
                  </div>
                  <div>
                    <button 
                      className={styles.bookBtn}
                      onClick={() => pickSeats(movie.id)}
                    >BOOK NOW</button>
                    <button
                      className={styles.trailerBtn}
                      onClick={() => handleModal(movie.trailer_url)}
                    >
                      TRAILER
                    </button>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "550px",
                }}
              >
                {movies.map((movie, movieIndex) => (
                  <div
                    key={movieIndex}
                    style={{
                      margin: "0 3px",
                      cursor: "pointer",
                      fontSize: currentIndex === movieIndex ? "15px" : "8px",
                      color: currentIndex === movieIndex ? "#fcaf3b" : "white",
                      verticalAlign: "middle",
                      lineHeight: "30px",
                    }}
                    onClick={() => goToSlide(movieIndex)}
                  >
                    ⬤
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      {modalDisplay ? (
        <PopUpModal
          setModalDisplay={setModalDisplay}
          linkToYoutubeTrailer={trailer}
          setTrailer={setTrailer}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default MovieSlider;
