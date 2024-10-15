export default function DisplayScore({ score }) {
  let currentScore = score;
  return <div className="score">Score: {currentScore}</div>;
}
