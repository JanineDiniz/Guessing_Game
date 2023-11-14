const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)
let attempts = 1
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

// eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e){
  if(e.key == 'Enter' && screen1.classList.contains('hide')){
    handleResetClick()
  }
})

// função callback
function handleTryClick(event){
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber){
    toggleScreen()

    screen2.querySelector("h2").innerText = `Você acertou em ${attempts} tentativas`
    inputNumber.value = ""
    randomNumber = Math.round(Math.random() * 10)
  }

  attempts ++
}

function handleResetClick(){
  toggleScreen()
  attempts = 1
}

function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}