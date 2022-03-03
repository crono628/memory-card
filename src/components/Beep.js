import React from 'react';

const Beep = (props) => {
  return (
    <div className="thats-all">
      <p className="congrats">Better luck next time!</p>
      <img src="https://i.kym-cdn.com/photos/images/newsfeed/001/851/170/cd9" />
      <button className="reset" onClick={props.onClick}>
        New Game
      </button>
    </div>
  );
};

export default Beep;
