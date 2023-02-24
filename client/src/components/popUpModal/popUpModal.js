import React from "react";

function popUpModal({ linkToYoutubeTrailer }) {
  const closeTrailerBox = () => {
    // closes the pop-up modal

    let popUpModal = document.getElementById("popUpModal");
    let trailer = document.getElementById("trailer");
    trailer.remove(); // removes the now unneeded ifram element
    popUpModal.style.display = "none"; // makes it invisible
  };

  return (
    <div id="popUpModal" onClick={closeTrailerBox}>
      <div id="trailerBox">
        <iframe
          id="trailer"
          src={linkToYoutubeTrailer}
          style={{ height: "100%", width: "100%", display: "block" }}
        ></iframe>
      </div>
    </div>
  );
}

export default popUpModal;
