import React from "react";
import PropTypes from "prop-types";

const Button = ({ title }) => {
  return (
    <div className="button-hover cursor-pointer rounded-md border-[1px] border-green px-6 py-2">
      <span className="text-sm text-green">{title}</span>
    </div>
  );
};

export default Button;

Button.propTypes = {
  title: PropTypes.string.isRequired,
};
