import { useState, useEffect } from 'react';

const Fetch = () => {
  const [titans, setTitans] = useState([]);
  useEffect(() => {
    fetch('https://api.attackontitanapi.com/titans')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTitans(data.results);
      });
  }, []);

  return (
    <div className="titans">
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
          <img
            key={titan.id}
            src={newString}
            alt={titan.name}
            width={350}
            height={350}
          />
        );
      })}
    </div>
  );
};

export default Fetch;
