import React from "react";
import PropTypes from "prop-types";

export const Filter = ({ type, label, getSearchName }) => {
  return <input type={type} onChange={getSearchName} placeholder={label} />;
};

Filter.defaultProps = {
  type: "text",
};

Filter.propTypes = {
  label: PropTypes.string,
  getSearchName: PropTypes.func.isRequired,
};
