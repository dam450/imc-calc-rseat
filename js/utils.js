export function calculateIMC(weight, height) {
  const imc = weight / ((height/100) ** 2 )
  return imc.toFixed(2)
}

export function notNumber(value) {
  return isNaN(value) || value ===""
}