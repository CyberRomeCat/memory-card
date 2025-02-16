import { Link } from 'react-router-dom';
import DisplayScore from './displayScore';
import score from '../logic/score';
import svg from '../assets/github.svg';

export default function Header({ allScore, card }) {
  if (allScore == undefined) {
    return (
      <div className="header">
        <Link className="title" onClick={score('reset')} to="/"></Link>
      </div>
    );
  }
  return (
    <div className="header">
      <Link className="title" to="/"></Link>
      <div className="scores">
        <DisplayScore scores={allScore} card={card} />
        <a
          href="https://github.com/CyberRomeCat/memory-card"
          target="_blank"
          className="github-svg"
        >
          <img src={svg} />
        </a>
      </div>
    </div>
  );
}
