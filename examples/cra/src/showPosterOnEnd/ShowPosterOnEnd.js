import React, { useState } from "react";
import VideoBg from "reactjs-videobg";
import ogg from "../videos/Neon.ogg";
import webm from "../videos/Neon.webm";
import mp4 from "../videos/Neon.mp4";
import poster from "../img/poster.jpg";
import "../styles.css";
import './ShowPosterOnEnd.css';

function ShowPosterOnEnd() {

  const [isEnded, setIsEnded] = useState(false)

  const handleOnEnded = () => {
    setIsEnded(true)
  }

  return (
    <div className="App">
      <VideoBg
        poster={poster}
        onEnded={handleOnEnded}
        loop={false}
      >
        <VideoBg.Source src={ogg} type="video/ogg" />
        <VideoBg.Source src={webm} type="video/webm" />
        <VideoBg.Source src={mp4} type="video/mp4" />
      </VideoBg>

      <div className="form">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>

      {isEnded && <div className='overlay'></div>}
    </div>
  );
}

export default React.forwardRef(ShowPosterOnEnd);
