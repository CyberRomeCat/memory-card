import { useState, useEffect } from 'react';
import TitanCards from './TitanCards';
import LocationCards from './LocationCards';

const FetchTitans = () => {
  const [titans, setTitans] = useState([]);

  useEffect(() => {
    fetch('https://api.attackontitanapi.com/titans')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTitans(data.results);
      });
  }, []);

  return (
    <>
      <TitanCards titans={titans} setTitans={setTitans} />
    </>
  );
};

const FetchLocations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch('https://api.attackontitanapi.com/locations')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLocations(data.results);
      });
  }, []);

  return (
    <>
      <LocationCards locations={locations} setLocations={setLocations} />
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
        setImg(response.data.images.original.url);
      });
  }, []);

  return <img src={img} id="loser" />;
};

export { FetchTitans, FetchGiphy, FetchLocations };
