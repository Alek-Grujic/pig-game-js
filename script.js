const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const currentNum1 = document.querySelector('#current--0');

// buttons variables
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

rollDiceBtn.addEventListener('click', function () {
  let rollTheDice = Math.trunc(Math.random() * 6) + 1;
  currentNum1.textContent = rollTheDice;
  diceEl.classList.remove('hidden');
  diceEl.src = `images/dice-${rollTheDice}.png`;
});
