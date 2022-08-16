export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),
  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  },
  displayMessage(text) {
    Modal.message.innerHTML = text
    Modal.open()
  }
}

function keydownHandler ({key}) {
  if (key === 'Escape') 
    Modal.close()
}

Modal.buttonClose.onclick = () => {
  Modal.close()
}

window.addEventListener('keydown', keydownHandler)