// selecionando o dinossauro
const dino = document.querySelector(".dino");

// identificando quando o usuário pressionou "space"
function handleKeyUp(event) {
    if (event.keyCode === 32) {
        console.log(`Pressionou espaço`);
    }
}

// programando o pulo do dino com espaço
document.addEventListener("keyup", handleKeyUp);
