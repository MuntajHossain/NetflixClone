import React from "react";
// import YouTube from "react-youtube";
import ReactPlayer from "react-player";

export default function Example() {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=g6fnFALEseI"
      playing={true}
      loop={true}
      controls={false}
      muted={true}
    />
  );
}
