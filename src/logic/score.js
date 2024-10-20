let titansId = [];
let prevId;
let scores = { currentScore: 0, bestScore: 0, status: 'counting' };

export default function score(Id) {
  let currentId = Id;
  if (Id != undefined && Id != null)
    if (titansId.includes(currentId) || prevId == currentId) {
      scores.currentScore = 0;
      titansId = [];
      scores.status = 'loser';
    } else {
      if (scores.bestScore == scores.currentScore) scores.bestScore++;
      scores.currentScore++;
      if (scores.currentScore == 7) {
        scores.currentScore = 0;
        titansId = [];
        scores.status = 'winner';
      } else {
        scores.status = 'counting';
        titansId.push(currentId);
      }
    }
  return scores;
}
