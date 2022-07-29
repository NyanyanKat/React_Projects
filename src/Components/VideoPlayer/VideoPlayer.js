import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.css";

export default function ResponsivePlayer() {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url="https://clips.twitch.tv/ResoluteCheerfulLegAMPEnergyCherry-NW9J2VlWNnAnZGWf"
        width="300px"
        height="200px"
        controls
        pip
        light="https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?cs=srgb&dl=pexels-anel-rossouw-2558605.jpg&fm=jpg"
      />
    </div>
  );
}
