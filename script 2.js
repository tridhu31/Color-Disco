const button = document.querySelector(".btn");

button.addEventListener("click", changeColor);

const body = document.querySelector('body')

var color = ["red","blue","Orange","beige","violet","pink","aquamarine","yellow","olive", "grey", "magenta"];

var length = color.length;

function changeColor(){

    var random = generateRandomNumbers(length)

    body.style.background = color [random] ;
}

function generateRandomNumbers(length){
    var randomNum = Math.random()*length;

    var randomInteger = parseInt(randomNum)

    console.log(randomInteger)

    return randomInteger;
}