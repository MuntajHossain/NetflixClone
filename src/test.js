import React from "react";
// import YouTube from "react-youtube";
import ReactPlayer from "react-player";

class Example extends React.Component {
  state = {
    url: null,
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
  };
  handlePlay = () => {
    console.log("onPlay");
    this.setState({ muted: false });
  };
  render() {
    return (
      <ReactPlayer
        height="80vh"
        width="100vw"
        url="https://www.youtube.com/watch?v=g6fnFALEseI"
        playing={true}
        loop={true}
        controls={true}
        volume={0.5}
        muted={true}
        onReady={this.handlePlay}
      />
    );
  }
}

export default Example;
