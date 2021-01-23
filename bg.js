const body = document.querySelector("body");

const IMG_NUMBER = 3;


function paintImage(img){
    const image = new Image();
    image.src = `./images/${img + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function generateRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = generateRandom();
    paintImage(randomNumber);
}

init();