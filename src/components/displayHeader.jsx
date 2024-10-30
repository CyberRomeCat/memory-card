import { Link } from 'react-router-dom';
import DisplayScore from './displayScore';
import score from '../logic/score';

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
          href="https://www.reddit.com/r/titanfolk/comments/t1ywni/my_attempt_at_making_the_rumbling/"
          className="bg-original-photo"
        >
          KlutchLord
        </a>
      </div>
    </div>
  );
}
