import React from 'react';

const ThatsAll = (props) => {
  return (
    <div className="thats-all">
      <p className="congrats">Congratulations, you win!</p>
      <img src="https://media4.giphy.com/media/xUPOqo6E1XvWXwlCyQ/giphy.gif" />
      <button className="reset" onClick={props.onClick}>
        New Game
      </button>
    </div>
  );
};

export default ThatsAll;
