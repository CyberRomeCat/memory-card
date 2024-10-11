/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

export default function Score({ Id }) {
  const [score, setScore] = useState(0);
  const [cardId, setCardId] = useState([]);

  useEffect(() => {
    if (cardId.includes(Id)) {
      setScore(0);
      setCardId([]);
    } else {
      setScore((previousScore) => previousScore + 1);
      setCardId((previousId) => [...previousId, Id]);
    }
  }, [Id]);

  return <div className="score">Score:{score}</div>;
}
