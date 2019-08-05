import React from "react";
import VideoBg from "reactjs-videobg";
import ogg from "./videos/Neon.ogg";
import webm from "./videos/Neon.webm";
import mp4 from "./videos/Neon.mp4";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <VideoBg>
        <VideoBg.Source src={ogg} type="video/ogg" />
        <VideoBg.Source src={webm} type="video/webm" />
        <VideoBg.Source src={mp4} type="video/mp4" />
      </VideoBg>

      <div className="form">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    </div>
  );
}

export default App;
