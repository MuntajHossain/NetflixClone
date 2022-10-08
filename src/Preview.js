import React from "react";
import preview from "./Assets/Videos/big_buck_bunny.mp4";
import HorizontalCardList from "./HorizontalCardList";
import "./Preview.css";

export default function Preview() {
  return (
    <div className="preview-box">
      <video className="bg-video" autoPlay muted loop>
        <source src={preview} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <iframe className="bg-video"
        // width="560"
        // height="315"
        src="https://www.youtube.com/embed/IvSBN4z3t3Y?controls=0&autoplay=1"
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
        <HorizontalCardList />
      </div>
    </div>
  );
}
