// selecionando o dinossauro
const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
let isJumping = false;
let position = 0;

// identificando quando o usuário pressionou "space"
function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();
        }
    }
}

// programando o pulo do dino com espaço
function jump() {

    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

            // descendo
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + "px";
                }
            }, 20);
        } else {
            // subindo
            position += 20;
            dino.style.bottom = position + "px";
        }

    }, 20);
}

// gerando os cactus
function createCactus() {
    // gerando HTML novos
    const cactus = document.createElement("div");
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add("cactus");
    cactus.style.left = 1000 + "px";
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        // movendo os cactus para esquerda
        cactusPosition -= 5;
        cactus.style.left = cactusPosition + "px";

        // fazendo os cactus desaparecer ao chegar no limite da tela
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            // Game Over
            clearInterval(leftInterval);
            document.body.innerHTML = "<h1 class='game-over'>Fim de Jogo</h1>"
        } else {
            cactusPosition -= 5;
            cactus.style.left = cactusPosition + "px";
        }
    }, 20);

    // gerando novos cactus
    setTimeout(createCactus, randomTime);
}

createCactus();

document.addEventListener("keyup", handleKeyUp);
