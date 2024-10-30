export default function DisplayScore({ scores, card }) {
  let allScores = scores;
  return (
    <div className="score-container">
      <div className="score">Score: {allScores.currentScore}</div>
      <div className="best-score">
        Best Score:{' '}
        {card == 'titans'
          ? allScores.bestScore.titans
          : allScores.bestScore.locations}
      </div>
    </div>
  );
}
