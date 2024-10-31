import Card from './card';
import shuffleArray from '../logic/shuffleCards';
import score from '../logic/score';
import Header from './displayHeader';
import DisplayStatus from './displayStatus';
import { useState, useEffect } from 'react';

export default function TitanCards({ titans, setTitans }) {
  const [flip, setFlip] = useState(false);
  const [currentTitan, setCurrentTitan] = useState(null);
  const [allScore, setAllScore] = useState(score(null));

  useEffect(() => {
    if (currentTitan) {
      setAllScore(score(currentTitan, 'titans'));
    }
  }, [currentTitan]);

  const flipCard = () => {
    setFlip(true);
    setTimeout(() => {
      setFlip(false);
    }, 700);
  };

  const handleCardClick = (titanId) => {
    if (!flip) {
      flipCard();
      setTimeout(() => {
        if (currentTitan === titanId) {
          setCurrentTitan(null);
          setAllScore(score(titanId, 'titans'));
        } else {
          const shuffledCards = shuffleArray(titans);
          setTitans(shuffledCards);
          setCurrentTitan(titanId);
        }
      }, 400);
    }
  };

  return (
    <>
      <Header allScore={allScore} card={'titans'} />
      <DisplayStatus status={allScore.status} />
      <div className="titan-cards">
        {titans.map((titan) => {
          if (titan.name === 'Colossal Titan' || titan.name === 'Jaw Titan')
            return null;

          const newString = titan.img.split('/revision')[0];

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
              onClick={() => handleCardClick(titan.id)}
              isFlipped={flip}
            />
          );
        })}
      </div>
    </>
  );
}
