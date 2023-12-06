import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
function Button({ onClick, color = "", text = "", textColor = "", icon }) {
  const buttonStyle = {
    backgroundColor: color,
    color: textColor,
    padding: "7px",
    borderRadius: "3px"
  };

  return (
    <button style={buttonStyle} onClick={onClick && (() => onClick())}>
    { icon && <FontAwesomeIcon icon={faPenToSquare} />}
      {" " + text}
    </button>
  );
};

export default Button;
