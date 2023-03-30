import React, { useState, useEffect } from "react";

import styles from "./movieSlider.module.css";


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
      {/* <Parallax 
        strength={600}
        bgImage={`url(${movie.img_landscape_url})`}
      ></Parallax> */}
      <div className={styles.carouselContainer}>
        {movies.map((movie, idx) => {
          return (
            <div
              key={idx}
              className={styles.fade}
              style={{
                width: "100vw", // Added width
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
    </div>
  );
}

export default MovieSlider;
