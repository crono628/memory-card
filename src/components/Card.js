import React from 'react';

const Card = (props) => {
  return (
    <img
      className="card"
      src={props.src}
      id={props.id}
      onClick={props.onClick}
      alt={props.alt}
    />
  );
};

export default Card;
