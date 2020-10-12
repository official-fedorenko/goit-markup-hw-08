(() => {
  const refs = {
    closeModalBtn: document.querySelector('[menu-close]'),
    openModalBtn: document.querySelector('[menu-open]'),
    modal: document.querySelector('[top-menu-open]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();

(() => {
  const refs = {
    closeModalBtn: document.querySelector('[form-close]'),
    openModalBtn: document.querySelector('[form-open]'),
    modal: document.querySelector('[top-form-open]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();