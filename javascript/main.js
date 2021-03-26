let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('marcador');
const result_div = document.querySelector('.result p');
const piedra_div = document.getElementById('r')
const papel_div = document.getElementById('p')
const tijera_div = document.getElementById('t')

function movidaComp() {
    const opciones = ['r', 'p', 't'];
    const random = Math.floor(Math.random() * 3);
    const movida= opciones[random];
    return (movida);
}

function convertirLetra(opcion) {
    if (opcion == 'r') {
        return "Piedra";
    }
    else if (opcion == 'p'){
        return "Papel";
    }
    else{
        return "Tijeras";
    }
}

function ganar(opcionUser, opcionPc) {
    userScore++;
    userScore_span.innerHTML= userScore;
    result_div.innerHTML= convertirLetra(opcionUser)+" le gana a "+convertirLetra(opcionPc)+". Tu ganaste."
}
function perder(opcionPc, opcionUser) {
    compScore++;
    compScore_span.innerHTML= compScore;
    result_div.innerHTML= convertirLetra(opcionPc)+" le gana a "+convertirLetra(opcionUser)+". Tu perdiste."

}
function empate(opcionUser) {
    result_div.innerHTML= "Ambos eligierón "+convertirLetra(opcionUser)+". Es un empate."
}

function game(opcion) {
    const movidaPc = movidaComp();
    const movidaUser = opcion;
    switch (movidaUser+movidaPc) {
        case 'rt':
        case 'pr':
        case 'tp':
            ganar(movidaUser, movidaPc);
        break;
        case 'rp':
        case 'pt':
        case 'tr':
            perder(movidaPc, movidaUser);
        break;
        case 'pp':
        case 'ss':
        case 'rr':
            empate(movidaUser);
        break;
    }
}   

function main() {
    piedra_div.addEventListener('click', () => game("r"));
    papel_div.addEventListener('click', () => game("p"));
    tijera_div.addEventListener('click', () => game("t"));
}

main();