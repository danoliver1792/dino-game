// selecionando o dinossauro
const dino = document.querySelector(".dino");
let isJumping = false;

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
    let position = 0;

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

document.addEventListener("keyup", handleKeyUp);
