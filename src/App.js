import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Display from './components/Display';
import Navbar from './components/Navbar';
import allCards from './components/allCards';
import uniqid from 'uniqid';
import './styles.css';
import ThatsAll from './components/ThatsAll';
import Beep from './components/Beep';

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selection, setSelection] = useState([]);
  const [winner, setWinner] = useState(false);
  const [loser, setLoser] = useState(false);

  useEffect(() => {
    handleShuffle();
  }, [currentScore, winner]);

  const handleShuffle = () => {
    if (winner === false) {
      setSelection([
        shuffle(allCards).map((character) => (
          <Card
            key={uniqid()}
            src={character.image}
            id={character.name}
            onClick={handleClick}
            alt={character.name}
          />
        )),
      ]);
    } else return;
  };

  const handleClick = (e) => {
    let cardId = e.target.id;
    let findCard = allCards.find((card) => card.name === cardId);
    if (findCard.name === cardId && findCard.clicked === true) {
      setHighScore(currentScore);
      setCurrentScore(0);
      setLoser(true);
      allCards.map((card) => (card.clicked = false));
    } else {
      setCurrentScore(currentScore + 1);
      findCard.clicked = true;
    }
    if (allCards.every(checkClick)) {
      setWinner(true);
    }
  };

  const checkClick = (currVal) => currVal.clicked === true;
  const checkHighScore = () => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  };

  const shuffle = (array) => {
    let copyArr = array.slice();
    if (winner === false) {
      let shuffled = copyArr.sort(() => 0.5 - Math.random());
      let selected = shuffled.slice(0, 4);
      if (shuffled.every(checkClick)) {
        setWinner(true);
        return winner;
      } else if (selected.every(checkClick)) {
        return shuffle(array);
      } else {
        console.log(selected);
        return selected;
      }
    }
  };

  const handleReset = () => {
    setHighScore(currentScore);
    setCurrentScore(0);
    setWinner(false);
    handleShuffle();
  };

  return (
    <div className="container">
      <Navbar current={currentScore} high={highScore} />
      <Display>
        {winner === true ? (
          <ThatsAll onClick={handleReset} />
        ) : loser === true ? (
          <Beep onClick={handleReset} />
        ) : (
          selection
        )}
      </Display>
    </div>
  );
};

export default App;
