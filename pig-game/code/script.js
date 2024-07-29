'use strict';

let currentScore1 = document.querySelector('#current--0');
let currentScore2 = document.querySelector('#current--1');
let totalScorePlayer1 = document.querySelector('#score--0');
let totalScorePlayer2 = document.querySelector('#score--1');
const diceValue = document.querySelector('.dice');
totalScorePlayer1.textContent = '0';
totalScorePlayer2.textContent = '0';
let activePlayer = 1;
diceValue.classList.add('hidden');
currentScore1.textContent = 0;
currentScore2.textContent = 0;

function changeActivePlayerto(player) {
  if (player === 1) {
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    activePlayer = 1;
    currentScore2.textContent = '0';
  } else {
    document.querySelector('.player--1').classList.add('player--active');
    document.querySelector('.player--0').classList.remove('player--active');
    currentScore1.textContent = '0';
    activePlayer = 2;
  }
}
document.querySelector('.btn--roll').addEventListener('click', () => {
  const randomNumber = Math.trunc(Math.random() * 6) + 1;
  diceValue.classList.remove('hidden');
  diceValue.src = `dice-${randomNumber}.png`;
  if (randomNumber !== 1) {
    if (activePlayer === 1) {
      currentScore1.textContent = (
        Number(currentScore1.textContent) + Number(randomNumber)
      ).toString();
    } else {
      currentScore2.textContent = (
        Number(currentScore2.textContent) + Number(randomNumber)
      ).toString();
    }
  } else {
    if (activePlayer === 1) {
      changeActivePlayerto(2);
    } else {
      changeActivePlayerto(1);
    }
  }
});

document.querySelector('.btn--hold').addEventListener('click', () => {
  if (activePlayer === 1) {
    totalScorePlayer1.textContent = (
      Number(currentScore1.textContent) + Number(totalScorePlayer1.textContent)
    ).toString();
    changeActivePlayerto(2);
  } else {
    totalScorePlayer2.textContent = (
      Number(currentScore2.textContent) + Number(totalScorePlayer2.textContent)
    ).toString();
    changeActivePlayerto(1);
  }
});

document.querySelector('.btn--new').addEventListener('click', () => {
  currentScore1.textContent = '0';
  currentScore2.textContent = '0';
  totalScorePlayer1.textContent = '0';
  totalScorePlayer2.textContent = '0';
  activePlayer = 1;
  changeActivePlayerto(1);
  diceValue.classList.add('hidden');
});
