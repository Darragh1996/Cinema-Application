import React , { useState, useEffect} from "react";
import { justAxios } from "../../utils/axios";



import leftArrow from "../../joes/img/leftArrow.png";
import rightArrow from "../../joes/img/rightArrow.png";


function MovieSlider() {
    const [movies, setMovies] = useState([{}]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        width: "600px",
        height: "400px",
        backgroundImage: `url(${movies[currentIndex].img_landscape_url})` , 
        backgroundPosition: "center",
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover"

    }

    function goToPrevious(){
        if(currentIndex <= 0){
            setCurrentIndex(11)
        }
        else{ 
            setCurrentIndex(currentIndex-1)
        }
    }

    function goToNext(){
        if(currentIndex >= 11){
            setCurrentIndex(0)
        }
        else{ 
            setCurrentIndex(currentIndex+1)
        }
    }
    setInterval(goToNext, 5000);
    useEffect(() => {
        justAxios()
            .get(`/movies/`)
            .then((res) => {
                console.log(res)
                setMovies(res.data.movies);
        });
      }, []);
    
    return (
        <div style={ slideStyles }>
            <img id="leftArrow" onClick={goToPrevious} src={leftArrow} alt="leftArrow" />
            <img id="rightArrow" onClick={goToNext} src={rightArrow} alt="rightArrow" />
        </div>
    );
}

export default MovieSlider;
