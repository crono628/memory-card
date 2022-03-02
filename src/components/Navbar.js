import React from 'react';

const Navbar = ({ current, high }) => {
  return (
    <div className="navbar">
      <div className="title">Merry Melodies Memory Game</div>
      <div className="current score">Current score: {current}</div>
      <div className="high score">High score: {high}</div>
    </div>
  );
};

export default Navbar;
