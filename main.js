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


let fotos = document.querySelectorAll(".box-categoria");
let pagina = 0;
const translateX = -55;

function trocaSlide(movimentacaoFoto) {
    if (pagina === 0 && movimentacaoFoto === -1) {
        pagina = fotos.length - 1;
    } else if (pagina === (fotos.length - 1) && movimentacaoFoto === 1) {
        pagina = 0;
    } else {
        pagina = pagina + movimentacaoFoto;
    }

    const novoSlide = fotos[pagina].cloneNode(true);

    console.log({ pagina, novoSlide, slideRemovido: fotos[pagina] });

    pagina = pagina + movimentacaoFoto;
    const carroselFotos = document.querySelector(".box-categoria-fotos-conteudo");
    carroselFotos.style.transform = `translateX(${translateX * (pagina+1)}px)`;

    carroselFotos.appendChild(novoSlide);
    // fotos[pagina].remove();
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
            dot.style.backgroundColor = "#a6a6a6";
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