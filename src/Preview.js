import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

import preview from "./Assets/Videos/big_buck_bunny.mp4";
// import HorizontalCardList from "./HorizontalCardList";
import CardSection from "./CardSection";
import "./Preview.css";

export default function Preview(props) {
    const API_KEY = "3f43b1f4908e25b6fcb9dba49d0b6c0a";
    const [mov, setMov] = useState({});
    const [vid, setVid] = useState("g6fnFALEseI");
    var id;
    if (props.movie.length !== 0) {
        console.log(props.movieSelected.id);
        id = props.movieSelected.id;
        console.log("id=", props.movieSelected);
    }

    const getMovie = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
        );
        const adata = await response.json();
        console.log(adata.videos);
        let officialTrailers = [];
        if (adata.videos !== undefined) {
            officialTrailers = adata.videos.results.filter((item) => {
                return item.type === "Trailer" && item.official === true;
            });
             officialTrailers.push(adata.videos.results[0]);
        }
        console.log(officialTrailers);

        if (officialTrailers.length) {
            const trailer = officialTrailers[0];
            setVid(trailer.key);
            console.log(trailer.key);
        }
        // else{
        //   setVid(adata.videos.results[0].key)
        // }
        console.log(vid);
    };

    useEffect(() => {
        getMovie();
    },[props.movieSelected]);
    const key = "g6fnFALEseI";

    // console.log(props.movieSelected);
    return (
        <div className="preview-box">
            {/* <video className="bg-video" autoPlay muted loop>
                <source src={preview} type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}

            <ReactPlayer
                className="bg-video"
                url={`https://www.youtube.com/watch?v=${vid}`}
                playing={true}
                loop={true}
                controls={false}
                muted={true}
                width='100%'
            />

            <div className="transparent-layer">
                <div className="preview-details">
                    <div className="preview-title">
                        <h1>
                            {props.movieSelected.title
                                ? props.movieSelected.title
                                : ""}
                        </h1>
                    </div>
                    <div className="play-button">PLAY</div>
                </div>
                {/* <div className="card-list-container">
          <span >New Arrival</span>
          <div className="list-contain<div className="relative-card-section-holder">
        <CardSection name="New Arrival" movies={data} />
      </div>

      <div className="relative-card-section-holder">
        <CardSection name="Popular" movies={data}/>
      </div>

      <div className="relative-card-section-holder">
        <CardSection name="Recently Viewed" movies={data}/>
      </div>er">
            <HorizontalCardList />
          </div>
        </div> */}
                <div className="card-section-container">
                    <CardSection
                        name="Recomended"
                        movies={props.movie}
                        setMovie={props.setMovie}
                    />
                </div>
            </div>
        </div>
    );
}
