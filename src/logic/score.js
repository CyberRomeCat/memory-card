let titansId = [];
let prevId;
let scores = { currentScore: 0, bestScore: 0 };

export default function score(Id) {
  let currentId = Id;
  if (Id != undefined)
    if (titansId.includes(currentId) || prevId == currentId) {
      scores.currentScore = 0;
      titansId = [];
    } else {
      if (scores.bestScore == scores.currentScore) scores.bestScore++;
      scores.currentScore++;
      titansId.push(currentId);
    }
  return scores;
}
