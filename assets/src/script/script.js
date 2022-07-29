const IMG = document.getElementsByClassName("img");
const IMG_STYLE = document.getElementById("img");
const BTN_NEXT = document.getElementById("next");
const BTN_BACK = document.getElementById("back");

let atualImg = 0;

function nextImg() {
    if (atualImg>=IMG.length-1) {
        IMG[atualImg].classList.remove("imgVisivel");
        atualImg = 0;
        IMG[atualImg].classList.add("imgVisivel");
    }else{
        IMG[atualImg].classList.remove("imgVisivel");
        atualImg++;
        IMG[atualImg].classList.add("imgVisivel");
    }
}

function backImg() {
    if (atualImg<=0) {
        IMG[atualImg].classList.remove("imgVisivel");
        atualImg = 5;
        IMG[atualImg].classList.add("imgVisivel");
    }else{
        IMG[atualImg].classList.remove("imgVisivel");
        atualImg--;
        IMG[atualImg].classList.add("imgVisivel");
    }
}

BTN_NEXT.addEventListener("click", nextImg);
BTN_BACK.addEventListener("click", backImg);