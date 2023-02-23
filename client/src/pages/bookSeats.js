import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { justAxios } from "../utils/axios";

import SeatPicker from "../components/seatPicker/seatPicker";

function bookSeats() {
  const params = useParams();
  const [colCount, setColCount] = useState(0);

  useEffect(() => {
    justAxios()
      .get(`/showings/${params.showingID}`)
      .then((res) => {
        justAxios()
          .get(`/screens/${res.data.showing.screenID}`)
          .then((res2) => {
            console.log("response: ", res2.data.screen);
            setColCount(res2.data.screen.colCount);
          });
      });
  }, []);

  return (
    <div>
      <h1>Pick your seats.</h1>
      <SeatPicker showingID={params.showingID} colCount={colCount} />
    </div>
  );
}

export default bookSeats;
