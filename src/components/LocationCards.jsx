import Card from './card';
import shuffleArray from '../logic/shuffleCards';
import score from '../logic/score';
import Header from './displayHeader';
import DisplayStatus from './displayStatus';
import { useState, useEffect } from 'react';
import Multimedia from './multimedia';

export default function LocationCards({ locations, setLocations }) {
  const [flip, setFlip] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [allScore, setAllScore] = useState(score(null));

  useEffect(() => {
    if (currentLocation) {
      setAllScore(score(currentLocation));
    }
  }, [currentLocation]);

  function flipCard() {
    setFlip(!false);
    setTimeout(() => {
      setFlip(false);
    }, 700);
  }

  const handleCardClick = (locationId) => {
    if (!flip) {
      flipCard();
      setTimeout(() => {
        if (currentLocation == locationId) {
          setCurrentLocation(null);
          setAllScore(score(locationId));
        } else {
          let shuffleCards = shuffleArray(locations);
          setLocations(shuffleCards);
          setCurrentLocation(locationId);
        }
      }, 400);
    }
  };

  return (
    <>
      <Header allScore={allScore} />
      <DisplayStatus status={allScore.status} />
      <div className="titan-cards">
        {locations.map((location) => {
          if (location.id >= 10) {
            return;
          }
          const newString = location.img.split('/revision')[0];
          return (
            <Card
              image={
                <img
                  key={location.id}
                  src={newString}
                  alt={location.name}
                  className="titan-images"
                />
              }
              key={location.id}
              titanID={location.id}
              onClick={() => {
                handleCardClick(location.id);
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
