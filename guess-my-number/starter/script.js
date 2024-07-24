'use strict';
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'not a valid number';
  } else {
    document.querySelector('.message').textContent = 'Start guessing...';
  }
});
