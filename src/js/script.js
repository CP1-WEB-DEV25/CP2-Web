let imagens =[
    'src/assets/imagem2.jpg',
    'src/assets/imagem3.jpg',
    'src/assets/imagem4.jpg'
];


let index=0;
let tempo=3000;



function slideShow(){
    document.getElementById("image").src=imagens[index];
    index++;

    if(index == imagens.length){
        index=0;
    }
    setTimeout("slideShow()",tempo)
}
slideShow();

function irParaSobre() {
    const secaoSobre = document.querySelector(".sobre-nos");
    secaoSobre.scrollIntoView({ behavior: "smooth", block: "start" });
}

