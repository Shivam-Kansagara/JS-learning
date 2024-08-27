'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const scrollButton = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

scrollButton.addEventListener('click', () => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

const navLinks = document.querySelector('.nav__links');

navLinks.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const operationsTabContainer = document.querySelector(
  '.operations__tab-container'
);
const operationsContents = document.querySelectorAll('.operations__content');
operationsTabContainer.addEventListener('click', function (e) {
  if (
    e.target?.closest('.operations__tab').classList.contains('operations__tab')
  ) {
    document.querySelectorAll('.operations__tab').forEach(function (val) {
      val.classList.remove('operations__tab--active');
    });
    operationsContents.forEach(function (val) {
      val.classList.remove('operations__content--active');
    });

    e.target
      .closest('.operations__tab')
      .classList.add('operations__tab--active');

    const tabNumber = e.target
      .closest('.operations__tab')
      .getAttribute('data-tab');

    document
      .querySelector(`.operations__content--${tabNumber}`)
      .classList.add('operations__content--active');
  }
});
