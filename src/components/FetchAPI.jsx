import { useState, useEffect } from 'react';
import TitanCards from './TitanCards';

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
