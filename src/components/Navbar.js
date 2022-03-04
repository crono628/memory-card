import React from 'react';

const Navbar = ({ current, high }) => {
  return (
    <div className="navbar">
      <div className="title">Looney Memory Game</div>
      <div className="scores">
        <div className="score">
          Current score: <span className="current">{current}</span>
        </div>
        <div className="score">
          High score: <span className="high">{high}</span>{' '}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
