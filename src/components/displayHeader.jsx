import DisplayScore from './displayScore';

export default function Header({ allScore }) {
  return (
    <div className="header">
      <div className="title"></div>
      <div className="scores">
        <DisplayScore scores={allScore} />
      </div>
    </div>
  );
}
