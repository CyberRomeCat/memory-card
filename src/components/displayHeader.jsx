import DisplayScore from './displayScore';

export default function Header({ allScore }) {
  return (
    <div className="header">
      <div className="title"></div>
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
