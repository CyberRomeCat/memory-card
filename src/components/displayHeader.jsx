import { Link } from 'react-router-dom';
import DisplayScore from './displayScore';

export default function Header({ allScore }) {
  if (allScore == undefined) {
    return (
      <div className="header">
        <Link className="title" to="/"></Link>
      </div>
    );
  }
  return (
    <div className="header">
      <Link className="title" to="/"></Link>
      <div className="scores">
        <DisplayScore scores={allScore} />
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
