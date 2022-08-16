import { AlertError as alert } from './alert.js'
import { Modal } from './modal.js'
import { calculateIMC, notNumber } from './utils.js'


const formImc = document.querySelector('#imc-form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


formImc.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightInvalid = notNumber(height) || notNumber(weight)

  if (weightOrHeightInvalid) {
    alert.open()
    if (inputWeight.value === '') inputWeight.focus()
    else inputHeight.focus()
    return
  }

  alert.close()

  const imc = calculateIMC(weight, height)

  console.log(imc)
  Modal.displayMessage(`Seu IMC é de ${imc}`) 
}

inputWeight.oninput = () => alert.close()
inputHeight.oninput = () => alert.close()
