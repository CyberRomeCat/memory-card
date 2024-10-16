import { useState, useEffect } from 'react';
import Card from './card';
import shuffleArray from '../logic/shuffleCards';
import DisplayScore from './displayScore';
import DisplayStatus from './displayStatus';
import score from '../logic/score';

const FetchTitans = () => {
  const [titans, setTitans] = useState([]);
  const [currentTitan, setCurrentTitan] = useState();
  useEffect(() => {
    fetch('https://api.attackontitanapi.com/titans')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTitans(data.results);
      });
  }, []);

  const allScore = score(currentTitan);

  return (
    <>
      <div className="header">
        <div className="title"></div>
        <div className="scores">
          <DisplayScore scores={allScore} />
        </div>
      </div>
      <DisplayStatus status={allScore.status} />
      <div className="titan-cards" key={titans.join('-')}>
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
                  width={350}
                  height={450}
                />
              }
              key={titan.id}
              titanID={titan.id}
              onClick={() => {
                let shuffleCards = shuffleArray(titans);
                setTitans(shuffleCards);
                setCurrentTitan(titan.id);
              }}
            />
          );
        })}
      </div>
    </>
  );
};

const FetchGiphy = () => {
  const [img, setImg] = useState('');
  useEffect(() => {
    fetch(
      'https://api.giphy.com/v1/gifs/XyuSZLzAHyIVy?api_key=c9Bala7R0Bz3ZN4xTPpgNWNGhDWPV0jI&s',
      { mode: 'cors' }
    )
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log(response);
        setImg(response.data.images.original.url);
      });
  }, []);

  return <img src={img} id="loser" />;
};

export { FetchTitans, FetchGiphy };
