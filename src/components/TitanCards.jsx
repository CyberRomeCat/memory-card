import Card from './card';
import shuffleArray from '../logic/shuffleCards';
import score from '../logic/score';
import Header from './displayHeader';
import DisplayStatus from './displayStatus';
import { useState } from 'react';
import Multimedia from './multimedia';

export default function TitanCards({ titans, setTitans }) {
  const [flip, setFlip] = useState(false);
  const [currentTitan, setCurrentTitan] = useState();
  const allScore = score(currentTitan);
  function flipCard() {
    setFlip(!false);
    setTimeout(() => {
      setFlip(false);
    }, 700);
  }
  return (
    <>
      <Header allScore={allScore} />
      <DisplayStatus status={allScore.status} />
      <div className="titan-cards">
        {titans.map((titan) => {
          if (titan.name === 'Colossal Titan' || titan.name === 'Jaw Titan')
            return;
          let originalString = titan.img;
          let substring = '/revision';
          let newString;

          // Find the index of the substring
          let index = originalString.indexOf(substring);

          // Check if the substring exists
          if (index !== -1) {
            // Remove the substring and everything after it
            newString = originalString.slice(0, index);
          } else {
            console.log('Substring not found.');
          }
          return (
            <Card
              image={
                <img
                  key={titan.id}
                  src={newString}
                  alt={titan.name}
                  className="titan-images"
                />
              }
              key={titan.id}
              titanID={titan.id}
              onClick={() => {
                flipCard();
                setTimeout(() => {
                  let shuffleCards = shuffleArray(titans);
                  setTitans(shuffleCards);
                  setCurrentTitan(titan.id);
                }, 400);
              }}
              isFlipped={flip}
            />
          );
        })}
      </div>
      <Multimedia />
    </>
  );
}
