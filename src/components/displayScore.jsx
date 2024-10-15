export default function DisplayScore({ scores }) {
  let allScores = scores;
  return (
    <>
      <div className="score">Score: {allScores.currentScore}</div>
      <div className="best-score">Best Score: {allScores.bestScore}</div>
    </>
  );
}
