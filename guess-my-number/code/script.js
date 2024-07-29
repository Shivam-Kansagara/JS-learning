'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let intialHighScore = 0;

document.querySelector('.again').addEventListener('click', () => {
  window.location.reload();
});

function handleGuessedNumber(message) {
  if (score <= 1) {
    document.querySelector('.message').textContent = 'you Lost!';
    score = 0;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = message;
    score--;
    document.querySelector('.score').textContent = score;
  }
  intialHighScore++;
}

function handleClick() {
  if (document.querySelector('.check').textContent == 'Check!') {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
      document.querySelector('.message').textContent = 'not a valid number';
    } else {
      if (guess > randomNumber) {
        handleGuessedNumber('Too High!');
      } else if (guess < randomNumber) {
        handleGuessedNumber('Too Low!');
      } else {
        document.querySelector('.message').textContent = 'You Won!!';
        document.querySelector('.highscore').textContent = Math.max(
          20 - intialHighScore,
          document.querySelector('.highscore').textContent
        );
        document.querySelector('.check').textContent = 'Play Again';
        document.querySelector('body').style.backgroundColor = '#6666ff';
        document.querySelector('.number').textContent = randomNumber;
      }
    }
  } else {
    document.querySelector('.check').textContent = 'Check!';
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = randomNumber;
    intialHighScore = 0;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
  }
}
document.querySelector('.check').addEventListener('click', handleClick);
document.querySelector('.guess').addEventListener('keydown', () => {
  if (event.key === 'Enter') {
    handleClick();
  }
});
