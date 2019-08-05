import React from "react";
import classNames from "./VideoBg.module.css";
import Source from "./Source";
import PropTypes from "prop-types";

const VideoBg = ({
  wrapperClass,
  videoClass,
  loop = true,
  muted = true,
  autoPlay = true,
  poster,
  children
}) => (
  <div className={`${wrapperClass} ${classNames.wrapper}`}>
    <video
      className={`${videoClass} ${classNames.video}`}
      loop={loop}
      muted={muted}
      poster={poster}
      autoPlay={autoPlay}
    >
      {children}
    </video>
  </div>
);

VideoBg.propTypes = {
  wrapperClass: PropTypes.string,
  videoClass: PropTypes.string,
  loop: PropTypes.string,
  muted: PropTypes.string,
  poster: PropTypes.string,
  autoPlay: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: Source
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        type: Source
      })
    )
  ])
};

VideoBg.Source = Source;

export default VideoBg;
