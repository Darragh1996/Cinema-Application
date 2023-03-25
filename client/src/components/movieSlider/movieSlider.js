import React, { useState, useEffect } from "react";

import styles from "./movieSlider.module.css";

import leftArrow from "../../joes/img/leftArrow.png";
import rightArrow from "../../joes/img/rightArrow.png";

function MovieSlider({ movies }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateImage = (val) => {
    console.log("update image");
    setCurrentIndex((currentIndex + val) % movies.length);
  };

  useEffect(() => {
    const interval = setInterval(() => updateImage(1), 5000);
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
                width: "600px", // Added width
                height: "400px", // Added height
                backgroundImage: `url(${movie.img_landscape_url})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: currentIndex === idx ? "block" : "none",
              }}
            >
              <div className={styles.text}>{movie.name}</div>
            </div>
          );
        })}
      </div>
      <img
        className={styles.arrow}
        id="leftArrow"
        onClick={() => updateImage(-1)}
        src={leftArrow}
        alt="leftArrow"
      />
      <img
        className={styles.arrow}
        id="rightArrow"
        onClick={() => updateImage(1)}
        src={rightArrow}
        alt="rightArrow"
      />
    </div>
  );
}

export default MovieSlider;
