let cardId = [];
let prevId;
let scores = {
  currentScore: 0,
  bestScore: { titans: 0, locations: 0 },
  status: 'counting',
};

export default function score(Id, card) {
  let currentId = Id;
  if (Id != undefined && Id != null)
    if (
      cardId.includes(currentId) ||
      prevId == currentId ||
      currentId == 'reset'
    ) {
      scores.currentScore = 0;
      cardId = [];
      currentId != 'reset'
        ? (scores.status = 'loser')
        : (scores.status = 'counting');
    } else {
      if (scores.bestScore.titans == scores.currentScore && card == 'titans') {
        scores.bestScore.titans++;
      }
      if (
        scores.bestScore.locations == scores.currentScore &&
        card == 'locations'
      ) {
        scores.bestScore.locations++;
      }
      scores.currentScore++;
      if (
        (card == 'titans' && scores.currentScore == 7) ||
        (card == 'locations' && scores.currentScore == 9)
      ) {
        scores.currentScore = 0;
        cardId = [];
        scores.status = 'winner';
      } else {
        scores.status = 'counting';
        cardId.push(currentId);
      }
    }
  return scores;
}
