import React, { useEffect } from "react";

import styles from "./popUpModal.module.css";

function popUpModal({ linkToYoutubeTrailer, setModalDisplay, setTrailer }) {
  useEffect(() => {
    console.log("from inside the modal");
  }, []);

  return (
    <div
      id={styles.popUpModal}
      onClick={() => {
        setModalDisplay(false);
        setTrailer("");
      }}
    >
      <div id="trailerBox">
        <iframe
          title="Watch Trailer"
          id={styles.trailer}
          src={linkToYoutubeTrailer}
          style={{
            height: "100%",
            width: "100%",
            display: "block",
          }}
        ></iframe>
      </div>
    </div>
  );
}

export default popUpModal;
