const initMaxRange = 8;
const initAttempts = 3;
const initPrize = 100;
const divMultNum = 2;
const AddRange = 4;
const attemptLefter = 1;
let attemptsLeft, possiblePrize, userAnswer, maxRange, maxPrize;
let totalPrize = 0;
let isGame = true;
let isGameBegin = true;
let isGameContinue = false;
let guessNumber = 0;
if (!confirm('Do you want to play a game?')) {
  alert('You did not become a billionaire, but can.');
  isGame = false;
}
while (isGame) {
  if (isGameBegin) {
    maxRange = isGameContinue ? maxRange + AddRange : initMaxRange;
    maxPrize = isGameContinue ? maxPrize * divMultNum : initPrize;
    totalPrize = isGameContinue ? totalPrize : 0;
    guessNumber = Math.round(Math.random() * maxRange);
    attemptsLeft = initAttempts;
    possiblePrize = maxPrize;
    isGameBegin = false;
    isGameContinue = false;
  }
  userAnswer = parseInt(
    prompt(`Choose a roulette pocket number from 0 to ${maxRange}
            Attempts left: ${attemptsLeft}
            Total prize: ${totalPrize}
            Possible prize on current attempt: ${possiblePrize} `)
  );
  if (userAnswer === guessNumber) {
    totalPrize += possiblePrize;
    alert(`Congratulation, you won! Your prize is: ${totalPrize}$.`);
    confirm('Do you want to continue?')
      ? isGameContinue = true
      : attemptsLeft = 0;
    isGameBegin = true;
  } else {
    attemptsLeft -= attemptLefter;
    possiblePrize /= divMultNum;
  }
  if (attemptsLeft === 0) {
    alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
    isGame = confirm('Do you want to play again?')
      ? isGameBegin = true
      : false;
  }
}
