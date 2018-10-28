/**
 *
 * Header
 *
 */

import React from "react";
import PropTypes from "prop-types";

import "./Header.css";

function Header(props) {
  const { title, subheading } = props;
  return (
    <div className="Header">
      <p className="title">{title}</p>
      <p className="subTitle">{subheading}</p>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
};

export default Header;
