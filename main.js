const slides = document.querySelectorAll(".carrossel");
let posicaoDoSlide = 0;

/**
 * 
 * @param {1|-1} direcao 
 */
function mostraSlides(direcao) {

    if (posicaoDoSlide === 0 && direcao === -1) {
        posicaoDoSlide = 2;
    } else if (posicaoDoSlide === 2 && direcao === 1) {
        posicaoDoSlide = 0;
    } else {
        posicaoDoSlide = posicaoDoSlide + direcao;
    }

    slides.forEach((slide, indice) => {
        slide.style.display = "none";

        if (indice === posicaoDoSlide) {
            slide.style.display = "block";
        }

    })

}

/**@type {Array<HTMLElement>} */
const imagemsLook = document.querySelectorAll(".box-look-perfeito");
/**@type {Array<HTMLElement>} */
const dots = document.querySelectorAll(".dot");
let comecoDaTroca = 0;

function passaSlide(direcao) {
    if (comecoDaTroca === 0 && direcao === -1) {
        comecoDaTroca = 2;

    } else if (comecoDaTroca === 2 && direcao === 1) {
        comecoDaTroca = 0;
    } else {
        comecoDaTroca = comecoDaTroca + direcao;
    }

    imagemsLook.forEach((imgLook, indece) => {
        if (indece === comecoDaTroca) {
            imgLook.style.display = "flex";
        } else {
            imgLook.style.display = "none";
        }
    });

    dots.forEach((dot, idx, arr) => {
        dot.style.backgroundColor = "#fd7e14";

        if (idx === comecoDaTroca) {
            console.log({ comecoDaTroca, idx });
            dot.style.backgroundColor = "#ff6f61";
        }
    });;

}

function aparecerMenu() {
    const menu = document.querySelector("#menu-mobile");

    if (menu.className === "menu menu-display") {
        menu.className = "menu";
    } else {
        menu.className = "menu menu-display";
    }
}