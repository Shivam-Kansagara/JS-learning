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
const section2 = document.querySelector('#section--2');
const section3 = document.querySelector('#section--3');

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

const navLink = document.querySelectorAll('.nav__link');

const handlerOver = function (e) {
  if (e.target.classList.contains('nav__link')) {
    navLink.forEach(function (val) {
      if (val !== e.target) {
        val.style.opacity = this; // cannot use this keyword directly inside foreach if want to use external vars then pass in as third argument.
      }
    }, this);
  }
};
document
  .querySelector('.nav__links')
  .addEventListener('mouseover', handlerOver.bind(0.5));

document
  .querySelector('.nav__links')
  .addEventListener('mouseout', handlerOver.bind(1));

const headerOptions = {
  root: null,
  threshold: 0,
};
function headerCallback(entries, observer) {
  if (entries[0].isIntersecting === false) {
    header.querySelector('.nav').classList.add('sticky');
  } else {
    header.querySelector('.nav').classList.remove('sticky');
  }
}
const headerObserver = new IntersectionObserver(headerCallback, headerOptions);
const header = document.querySelector('.header');
headerObserver.observe(header);

function sectionCallback(entries, observer) {
  if (entries[0].isIntersecting) {
    document
      .querySelector(`#${entries[0].target.id}`)
      .classList.remove('section--hidden');
  } else {
    document
      .querySelector(`#${entries[0].target.id}`)
      .classList.add('section--hidden');
  }
}
const sectionOptions = {
  root: null,
  threshold: 0.1,
};
const sectionObserver = new IntersectionObserver(
  sectionCallback,
  sectionOptions
);
sectionObserver.observe(section1);
sectionObserver.observe(section2);
sectionObserver.observe(section3);

function imgCallback(entries, oberserver) {
  if (entries[0].isIntersecting) {
    entries[0].target.src = entries[0].target.dataset.src;
    entries[0].target.classList.remove('lazy-img');
  } else {
    entries[0].target.classList.add('lazy-img');
  }
}
const imgOptions = {
  root: null,
  threshold: 0.5,
};
const imgObserver = new IntersectionObserver(imgCallback, imgOptions);
const featuresImg = document.querySelectorAll('img[data-src]');
featuresImg.forEach(val => {
  imgObserver.observe(val);
});
