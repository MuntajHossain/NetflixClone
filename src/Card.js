import React from "react";
export default function Card(props) {

    const changePreview=()=>{
        props.setMovie(props.movie)
    }
    const imgSrc="https://image.tmdb.org/t/p/w154/"
    return (
        <div className="card" onClick={changePreview}>
            <img src={`${imgSrc}${props.movie.poster_path}`} alt="card"></img>
        </div>
    );
}
