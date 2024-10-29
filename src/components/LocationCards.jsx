import Card from './card';
import shuffleArray from '../logic/shuffleCards';
import score from '../logic/score';
import Header from './displayHeader';
import DisplayStatus from './displayStatus';
import { useState } from 'react';
import Multimedia from './multimedia';

export default function LocationCards({ locations, setLocations }) {
  const [flip, setFlip] = useState(false);
  const [currentLocation, setCurrentLocation] = useState();
  const allScore = score(currentLocation);
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
        {locations.map((location) => {
          if (location.id >= 10) {
            return;
          }
          let originalString = location.img;
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
                  key={location.id}
                  src={newString}
                  alt={location.name}
                  className="titan-images"
                />
              }
              key={location.id}
              titanID={location.id}
              onClick={() => {
                flipCard();
                setTimeout(() => {
                  let shuffleCards = shuffleArray(locations);
                  setLocations(shuffleCards);
                  setCurrentLocation(location.id);
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
