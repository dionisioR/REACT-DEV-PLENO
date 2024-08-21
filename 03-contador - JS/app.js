let btnIncrementar = document.querySelector('#incrementar')
let btnDecrementar = document.querySelector('#decrementar')
let contador = document.querySelector('#contador')

let numero = 0

const incrementerNumero = () => {
    numero++
    contador.innerHTML = numero
}
const decrementarNumero = () => {
    numero--
    contador.innerHTML = numero
}

btnIncrementar.addEventListener('click', incrementerNumero)
btnDecrementar.addEventListener('click', decrementarNumero)