function Modal(options = {}) {
  const settings = {
    modalClass: 'modal',
    modalCloseBtnClass: 'modal__close-btn',
    modalOpenedClass: 'modal--opened',
    ...options
  };

  const modals = {};

  function _onClickToggleElement(e) {
    e.preventDefault();
    const modalId = e.target.dataset.toggleModal;
    openModal(modalId);
  }

  function _onClickModalCloseBtn(e) {
    e.preventDefault();
    const modalId = e.target.modalId;
    closeModal(modalId);
  }

  function _startModalCloseBtnEvtListener() {
    for (let modalId in modals) {
      const modalCloseBtn = modals[modalId].modalCloseBtnElement;
      if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', _onClickModalCloseBtn);
      }
    }
  }

  function _startModalToggleEvtListener() {
    for (let modalId in modals) {
      modals[modalId].toggleElement.addEventListener(
        'click',
        _onClickToggleElement
      );
    }
  }

  function addModal(toggleElement) {
    const modalId = toggleElement.dataset.toggleModal;
    const modalElement = document.querySelector(`[data-modal="${modalId}"]`);
    const modalCloseBtnElement = modalElement.querySelector(
      `.${settings.modalCloseBtnClass}`
    );
    modalCloseBtnElement.modalId = modalId;
    modals[modalId] = {
      modalId,
      modalElement,
      modalCloseBtnElement,
      toggleElement
    };
    _startModalCloseBtnEvtListener();
    _startModalToggleEvtListener();
  }

  function openModal(modalId) {
    if (modals[modalId]) {
      modals[modalId].modalElement.classList.add(settings.modalOpenedClass);
    }
  }

  function closeModal(modalId) {
    modals[modalId].modalElement.classList.remove(settings.modalOpenedClass);
  }

  function init() {
    const modalToggles = document.querySelectorAll('[data-toggle-modal]');
    modalToggles.forEach((modalToggle) => {
      addModal(modalToggle);
    });
  }

  return {
    init,
    addModal,
    closeModal,
    openModal
  };
}
