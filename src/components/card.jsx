import logocard from '../assets/backcard.jpg';
import ReactCardFlip from 'react-card-flip';

export default function Card({ image, titanID, onClick, isFlipped }) {
  return (
    <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
      <div className="front" onClick={onClick} id={titanID}>
        {image}
      </div>
      <div className="back">
        <img className="backcardimg" src={logocard} />
      </div>
    </ReactCardFlip>
  );
}
