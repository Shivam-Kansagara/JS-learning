'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let intialHighScore = 0;
document.querySelector('.number').textContent = randomNumber;

document.querySelector('.again').addEventListener('click', () => {
  window.location.reload();
});

document.querySelector('.check').addEventListener('click', () => {
  if (document.querySelector('.check').textContent == 'Check!') {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
      document.querySelector('.message').textContent = 'not a valid number';
    } else {
      if (guess > randomNumber) {
        if (score <= 1) {
          document.querySelector('.message').textContent = 'you Lost!';
          score = 0;
          document.querySelector('.score').textContent = score;
        } else {
          document.querySelector('.message').textContent = 'Too High!';
          score--;
          document.querySelector('.score').textContent = score;
        }
        intialHighScore++;
      } else if (guess < randomNumber) {
        if (score <= 1) {
          document.querySelector('.message').textContent = 'you Lost!';
          score = 0;
          document.querySelector('.score').textContent = score;
        } else {
          document.querySelector('.message').textContent = 'Too Low!';
          score--;
          document.querySelector('.score').textContent = score;
        }
        intialHighScore++;
      } else {
        document.querySelector('.message').textContent = 'You Won!!';
        document.querySelector('.highscore').textContent = Math.max(
          20 - intialHighScore,
          document.querySelector('.highscore').textContent
        );
        document.querySelector('.check').textContent = 'Play Again';
      }
    }
  } else {
    document.querySelector('.check').textContent = 'Check!';
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = randomNumber;
    intialHighScore = 0;
    score = 20;
    document.querySelector('.score').textContent = score;
  }
});
