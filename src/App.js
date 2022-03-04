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
  const [cards, setCards] = useState(allCards);

  useEffect(() => {
    handleShuffle();
  }, [currentScore, highScore]);

  const handleShuffle = () => {
    let copy = cards.slice();
    let shufCopy = shuffle(copy).map((character) => (
      <Card
        key={uniqid()}
        src={character.image}
        id={character.name}
        onClick={handleClick}
        alt={character.name}
      />
    ));
    setSelection(shufCopy);
  };

  const handleClick = (e) => {
    let cardId = e.target.id;
    let findCard = cards.find((card) => card.name === cardId);
    if (findCard.name === cardId && findCard.clicked === true) {
      setLoser(true);
    } else if (checkWin()) {
      setWinner(true);
    } else {
      setCurrentScore(currentScore + 1);
      findCard.clicked = true;
    }
  };

  const checkWin = () => cards.every((item) => item.clicked === true);

  const shuffle = (array) => {
    let copy = array.slice();
    let shuffled = copy.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 4);
    if (shuffled.every((item) => item.clicked === true)) {
      setWinner(true);
      return selected;
    } else if (
      selected.every((item) => item.clicked === true) &&
      winner === false
    ) {
      return shuffle(array);
    } else {
      console.log(selected);
      return selected;
    }
  };

  const handleReset = () => {
    setHighScore(currentScore > highScore ? currentScore : highScore);
    setCurrentScore(0);
    setWinner(false);
    setLoser(false);
    cards.map((card) => (card.clicked = false));
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
