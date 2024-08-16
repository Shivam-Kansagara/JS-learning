'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const printMovements = function () {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'DEPOSIT' : 'WITHDRAWAL';
    const html = `<div class="movements__row">
            <div class="movements__type movements__type--deposit">${i} ${type}</div>
            <div class="movements__value">${mov}</div>
          </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
printMovements();
/////////////////////////////////////////////////
// forEach
// doesnot have return value | manipulates in same array | takes 3 args (value,index,arr)

// map
// has return value that has been passed | operates on new array memory | takes 3 args (value,index,arr)
const arrMap = ['1', '2'].map(function (value) {
  return value * 2;
});
console.log(arrMap);

// filter
// has return value that has been passed | operates on new array memory | takes 3 args (value,index,arr)
const arrFilter = ['1', '2'].filter(function (value) {
  return value > 1;
});
console.log(arrFilter);

// reduce
// has return value but only single | operates on new array memory | takes 3 args ((accumulate,value,index,arr),value) this value is initial value on accumulate variable
const arrReduce = [1, 2].reduce(function (acc, value) {
  return acc + value;
}, 0);
console.log(arrReduce);

const maxReduce = [1, 2].reduce(function (acc, value) {
  if (acc > value) return acc;
  else return value;
}, Number.MIN_VALUE);
console.log(maxReduce);
