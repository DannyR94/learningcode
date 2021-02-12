const viewport = document.getElementById('viewport');
const rightBtn = document.getElementById('move-right');
const leftBtn = document.getElementById('move-left');
const forwardBtn = document.getElementById('move-forward');
const useBtn = document.getElementById('use');
var posX = -300;
var posY = 0;

// Starting Location
viewport.style.backgroundImage = "url('map_1.png')";
viewport.style.backgroundSize = "3000px 3000px";
viewport.style.backgroundRepeat = "no-repeat";
viewport.style.backgroundPosition = posX +'px ' + posY +'px';



// Movement
rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);
forwardBtn.addEventListener('click', moveForward);
useBtn.addEventListener('click', use);

function moveRight() {
    console.log('You Turn Right');
}
function moveLeft() {
    console.log('You Turn Left');
}
function moveForward() {
    console.log('You Walk Forward');
}
function use() {
    console.log('You preform an action');
}




console.log(viewport);