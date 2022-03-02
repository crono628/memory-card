import React, { useState } from 'react';
import Card from './components/Card';
import Display from './components/Display';
import Navbar from './components/Navbar';
import allCards from './components/allCards';
import uniqid from 'uniqid';
import './styles.css';

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // const shuffle = (array) => {
  //   let currentIndex = array.length;
  //   let tempVal;
  //   let randomIndex;
  //   while (0 !== currentIndex) {
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;
  //     tempVal = array[currentIndex];
  //     array[currentIndex] = array[randomIndex];
  //     array[randomIndex] = tempVal;
  //   }
  //   return [array[0], array[1], array[2], array[3]];
  // };

  const shuffle = (array) => {
    let shuffled = array.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 4);
    console.log(shuffled);

    return selected;
  };

  return (
    <div className="container">
      <Navbar current={currentScore} high={highScore} />
      <Display>
        {shuffle(allCards).map((character) => (
          <Card key={uniqid()} src={character.image} />
        ))}
      </Display>
    </div>
  );
};

export default App;
