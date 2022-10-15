import React from "react";
import preview from "./Assets/Videos/big_buck_bunny.mp4";
// import HorizontalCardList from "./HorizontalCardList";
import CardSection from "./CardSection";
import "./Preview.css";

export default function Preview(props) {
  return (
    <div className="preview-box">
      {/* <video className="bg-video" autoPlay muted loop>
        <source src={preview} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <iframe
        className="bg-video"
        width="1000"
        height="750"
        src="https://www.youtube.com/embed/Ew9ngL1GZvs?autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>

      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Ew9ngL1GZvs?start=5"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}

      <div className="transparent-layer">
        <div className="preview-details">
          <div className="preview-title">
            <h1> BIG BUCK BUNNY sdfkjsj sjf sdfijsdijf SHFIS FOSDJF SF SF</h1>
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
          <CardSection name="Recomended" movies={props.movie} />
        </div>
      </div>
    </div>
  );
}
