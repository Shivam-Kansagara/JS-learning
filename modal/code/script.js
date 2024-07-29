'use strict';
const modal = document.querySelector('.modal');
const showModal = document.querySelectorAll('.show-modal');
const overlayModal = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

const viewModal = () => {
  modal.classList.remove('hidden');
  overlayModal.classList.remove('hidden');
};

const hideModal = () => {
  modal.classList.add('hidden');
  overlayModal.classList.add('hidden');
};
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', viewModal);
}
closeModal.addEventListener('click', hideModal);

overlayModal.addEventListener('click', hideModal);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    hideModal();
  }
});
