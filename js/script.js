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
    console.log('show error message')
    return
  }

  const imc = calculateIMC(weight, height)

  console.log(imc)
  Modal.displayMessage(`Seu IMC é de ${imc}`) 
  

}



console.log("script started!")