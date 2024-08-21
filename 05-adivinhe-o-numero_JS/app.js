let btnIniciarJogo = document.querySelector("#iniciar");
let btnMenor = document.querySelector("#menor");
let btnMaior = document.querySelector("#maior");
let btnAcertou = document.querySelector("#acertou");
let p = document.querySelector("#palpite");

let palpite = 150;
let chutes = 1;
let max = 300;
let min = 0;

function iniciarJogo() {
  document.querySelector("#inicio").classList.add("d-none");
  document.querySelector("#jogando").classList.remove("d-none");
  palpite = 150;
  chutes = 1;
  max = 300;
  min = 0;
  escrever()
}

function menor() {
  chutes++;
  max = palpite;
  palpite = parseInt((palpite -min) / 2) + min;
  escrever()
}

function maior() {
    chutes++
    min = palpite
    palpite = parseInt((max - palpite) / 2 + min)
    escrever()
}

function acertou() {
    document.querySelector("#jogando").classList.add("d-none");
    document.querySelector("#inicio").classList.remove("d-none");
}

function escrever() {
  p.innerHTML = `
    Palpite: ${palpite} <br>Número de chutes: ${chutes}
    `;
}

btnIniciarJogo.addEventListener("click", iniciarJogo);
btnMenor.addEventListener("click", menor);
btnMaior.addEventListener("click", maior);
btnAcertou.addEventListener("click", acertou);
