import React from "react";
import PropTypes from "prop-types";

const Source = ({ src, type }) => <source src={src} type={type} />;

Source.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Source;
