let titansId = [];
let prevId;
let currentScore = 0;

export default function score(Id) {
  let currentId = Id;
  if (Id != undefined)
    if (titansId.includes(currentId) || prevId == currentId) {
      currentScore = 0;
      titansId = [];
    } else {
      currentScore++;
      titansId.push(currentId);
    }
  console.log(currentScore);
  return currentScore;
}
