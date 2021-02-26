const viewport = document.getElementById('viewport');
const clickBtn = document.getElementById('clickBtn');
const moneyBal = document.getElementById('moneyBal');
const wrapper = document.getElementById('wrapper');

// Legacy Varibles
var li = document.createElement('li');
var input = document.createElement('input');

// Start the game
var gameState = JSON.parse(localStorage.getItem('gameState'));
if (gameState === null){
    var gameState = [0, 0, 0, 0, 0, 0, 0, 0];
    localStorage.setItem ('gameState', JSON.stringify(gameState));
}
var bank = gameState[0];
moneyBal.innerHTML = '$'+ bank;

// Renders Proper UI state when page is loaded
function renderUI() {
    let cfeStndAmt = gameState[1];
    let cfeBrwyAmt = gameState[2];
    let cfeSiloAmt = gameState[3];
    let cfeFctyAmt = gameState[4];
    let cfePortAmt = gameState[5];
    let cfeXAmt = gameState[6];
    cfeStndCntr.textContent = "x"+cfeStndAmt;
    if(cfeStndAmt >= 1){
        cfeBrwy.style.display = 'inherit';
        cfeBrwyCntr.textContent = "x"+cfeBrwyAmt;
        wrapper.style.backgroundSize = '200%';
    }
    if(cfeBrwyAmt >= 1){
        cfeSilo.style.display = 'inherit';
        cfeSiloCntr.textContent = "x"+cfeSiloAmt;
        wrapper.style.backgroundSize = '100%';
    }
    if(cfeSiloAmt >= 1){
        cfeFcty.style.display = 'inherit';
        cfeFctyCntr.textContent = "x"+cfeFctyAmt;
        wrapper.style.backgroundSize = '50%';
    }
    if(cfeFctyAmt >= 1){
        cfePort.style.display = 'inherit';
        cfePortCntr.textContent = "x"+cfePortAmt;
        wrapper.style.backgroundSize = '25%';
    }
    if(cfePortAmt >= 1){
        cfeX.style.display = 'inherit';
        cfeXCntr.textContent = "x"+cfeXAmt;
        wrapper.style.backgroundSize = '10%';
    }
    if(cfeXAmt >= 1){
        cfeUnvs.style.display = 'inherit';
        cfeUnvsCntr.textContent = "x"+cfeUnvsAmt;
        wrapper.style.backgroundSize = '5%';
    }
    if(cfeUnvsAmt >= 1){
        wrapper.style.backgroundSize = '1%';
    }
}

// Manual Clicking
var clkWorth = 1;
clickBtn.addEventListener('click', basicClk);
function basicClk() {
    clkWorth = 1 + ((cfeStndAmt * 1) + (cfeBrwyAmt * 5) + (cfeSiloAmt * 15) + (cfeFctyAmt * 30) + (cfePortAmt * 100) + (cfeXAmt * 500) + (cfeUnvsAmt * 1000));
    bank += clkWorth;
    // bank += 5000000000; Debug-mode
    moneyBal.innerHTML = '$'+ bank;
}

// Saves Game
const saveBtn = document.getElementById('saveBtn');
saveBtn.addEventListener('click', saveGame)

// Saves game when window is closed or reloaded
window.onbeforeunload = saveGame;


function saveGame() {
var gameState = [bank, cfeStndAmt, cfeBrwyAmt, cfeSiloAmt, cfeFctyAmt, cfePortAmt, cfeXAmt, cfeUnvsAmt];
localStorage.setItem ('gameState', JSON.stringify(gameState));
console.log(gameState);
}

//Restart Game
restartBtn = document.getElementById('restartBtn');
restartBtn.addEventListener('click', restartGame);
function restartGame() {
    bank = 0;
    cfeStndAmt = 0;
    cfeBrwyAmt = 0;
    cfeSiloAmt = 0;
    cfeFctyAmt = 0;
    cfePortAmt = 0;
    cfeXAmt = 0;
    cfeUnvsAmt = 0;
    localStorage.clear();
    var gameState = [0, 0, 0, 0, 0, 0, 0, 0];
    localStorage.setItem ('gameState', JSON.stringify(gameState));
    location.reload();
}

// Adds money from shops once per second
setInterval(function(){
    bank += ((cfeStndAmt * 5) + (cfeBrwyAmt * 25) + (cfeSiloAmt * 100) + (cfeFctyAmt * 500) + (cfePortAmt * 1000) + (cfeXAmt * 10000) + (cfeUnvsAmt * 100000))
    moneyBal.innerHTML = '$'+ bank;
}, 1000);

// Coffee Stand Elements
var cfeStndBase = 50;
var cfeStndAmt = gameState[1];
const cfeStnd = document.getElementById('cfeStnd');
const cfeStndCntr = document.getElementById('cfeStndCntr');
// Buys a Coffee Stand
cfeStnd.addEventListener('click', buyCfeStnd);
function buyCfeStnd() {
    if(cfeStndAmt <= 0 && bank >= cfeStndBase){
        cfeBrwy.style.display = 'inherit';
        for(i = 100; i > 0; i--){
            let e = i;
            setTimeout(function() {
                wrapper.style.backgroundSize = (e += 200)+'%';
            }, 10 * (100-i));
        };
        bank -= cfeStndBase;
        moneyBal.innerHTML = '$'+ bank;
        cfeStndAmt += 1;
        cfeStndCntr.textContent = "x"+cfeStndAmt;
    } else if(cfeStndAmt >= 1 && bank >= Math.ceil(cfeStndBase * Math.pow(1.15, cfeStndAmt))){
        bank -= Math.ceil(cfeStndBase * Math.pow(1.15, cfeStndAmt));
        moneyBal.innerHTML = '$'+ bank;
        cfeStndAmt += 1;
        cfeStndCntr.textContent = "x"+cfeStndAmt;
    } else {
        alert('You need $'+Math.ceil(cfeStndBase * Math.pow(1.15, cfeStndAmt))+' to buy that!');
    }
}

// Coffee Brewery Elements
var cfeBrwyBase = 500;
var cfeBrwyAmt = gameState[2];
const cfeBrwy = document.getElementById('cfeBrwy');
const cfeBrwyCntr = document.getElementById('cfeBrwyCntr');
cfeBrwy.addEventListener('click', buyCfeBrwy);
// Buys a Coffee Brewery
function buyCfeBrwy() {
    if(cfeBrwyAmt <= 0 && bank >= cfeBrwyBase){
        cfeSilo.style.display = 'inherit';
        for(i = 100; i > 0; i--){
            let e = i;
            setTimeout(function() {
                wrapper.style.backgroundSize = (e += 100)+'%';
            }, 10 * (100-i));
        };
        wrapper.style.backgroundSize = '100%';
        bank -= cfeBrwyBase;
        moneyBal.innerHTML = '$'+ bank;
        cfeBrwyAmt += 1;
        cfeBrwyCntr.textContent = "x"+cfeBrwyAmt;
    } else if(cfeBrwyAmt >= 1 && bank >= Math.ceil(cfeBrwyBase * Math.pow(1.15, cfeBrwyAmt))){
        bank -= Math.ceil(cfeBrwyBase * Math.pow(1.15, cfeBrwyAmt));
        moneyBal.innerHTML = '$'+ bank;
        cfeBrwyAmt += 1;
        cfeBrwyCntr.textContent = "x"+cfeBrwyAmt;
    } else {
        alert('You need $'+Math.ceil(cfeBrwyBase * Math.pow(1.15, cfeBrwyAmt))+' to buy that!');
    }
}

// Coffee Silo Elements
var cfeSiloBase = 5000;
var cfeSiloAmt = gameState[3];
const cfeSilo = document.getElementById('cfeSilo');
const cfeSiloCntr = document.getElementById('cfeSiloCntr');
cfeSilo.addEventListener('click', buyCfeSilo);
// Buys a Coffee Silo
function buyCfeSilo() {
    if(cfeSiloAmt <= 0 && bank >= cfeSiloBase){
        cfeFcty.style.display = 'inherit';
        for(i = 100; i > 0; i--){
            let e = i;
            setTimeout(function() {
                wrapper.style.backgroundSize = ((e += 100)/2)+'%';
            }, 10 * (100-i));
        };
        wrapper.style.backgroundSize = '50%';
        bank -= cfeSiloBase;
        moneyBal.innerHTML = '$'+ bank;
        cfeSiloAmt += 1;
        cfeSiloCntr.textContent = "x"+cfeSiloAmt;
    } else if(cfeSiloAmt >= 1 && bank >= Math.ceil(cfeSiloBase * Math.pow(1.15, cfeSiloAmt))){
        bank -= Math.ceil(cfeSiloBase * Math.pow(1.15, cfeSiloAmt));
        moneyBal.innerHTML = '$'+ bank;
        cfeSiloAmt += 1;
        cfeSiloCntr.textContent = "x"+cfeSiloAmt;
    } else {
        alert('You need $'+Math.ceil(cfeSiloBase * Math.pow(1.15, cfeSiloAmt))+' to buy that!');
    }
}

// Coffee Factory Elements
var cfeCfeBase = 50000;
var cfeFctyAmt = gameState[4];
const cfeFcty = document.getElementById('cfeFcty');
const cfeFctyCntr = document.getElementById('cfeFctyCntr');
cfeFcty.addEventListener('click', buyCfeFcty);
// Buys a Coffee Factory
function buyCfeFcty() {
    if(cfeFctyAmt <= 0 && bank >= cfeCfeBase){
        cfePort.style.display = 'inherit';
        for(i = 100; i > 0; i--){
            let e = i;
            setTimeout(function() {
                wrapper.style.backgroundSize = ((e += 100)/4)+'%';
            }, 10 * (100-i));
        };
        wrapper.style.backgroundSize = '25%';
        bank -= cfeCfeBase;
        moneyBal.innerHTML = '$'+ bank;
        cfeFctyAmt += 1;
        cfeFctyCntr.textContent = "x"+cfeFctyAmt;
    } else if(cfeFctyAmt >= 1 && bank >= Math.ceil(cfeCfeBase * Math.pow(1.15, cfeFctyAmt))){
        bank -= Math.ceil(cfeCfeBase * Math.pow(1.15, cfeFctyAmt));
        moneyBal.innerHTML = '$'+ bank;
        cfeFctyAmt += 1;
        cfeFctyCntr.textContent = "x"+cfeFctyAmt;
    } else {
        alert('You need $'+Math.ceil(cfeCfeBase * Math.pow(1.15, cfeFctyAmt))+' to buy that!');
    }
}

// Coffee Port Elements
var cfePortBase = 500000;
var cfePortAmt = gameState[5];
const cfePort = document.getElementById('cfePort');
const cfePortCntr = document.getElementById('cfePortCntr');
cfePort.addEventListener('click', buyCfePort);
// Buys a Coffee Port
function buyCfePort() {
    if(cfePortAmt <= 0 && bank >= cfePortBase){
        cfeX.style.display = 'inherit';
        for(i = 100; i > 0; i--){
            let e = i;
            setTimeout(function() {
                wrapper.style.backgroundSize = ((e += 100)/10)+'%';
            }, 10 * (100-i));
        };
        wrapper.style.backgroundSize = '10%';
        bank -= cfePortBase;
        moneyBal.innerHTML = '$'+ bank;
        cfePortAmt += 1;
        cfePortCntr.textContent = "x"+cfePortAmt;
    } else if(cfePortAmt >= 0 && bank >= Math.ceil(cfePortBase * Math.pow(1.15, cfePortAmt))){
        bank -= Math.ceil(cfePortBase * Math.pow(1.15, cfePortAmt));
        moneyBal.innerHTML = '$'+ bank;
        cfePortAmt += 1;
        cfePortCntr.textContent = "x"+cfePortAmt;
    } else {
        alert('You need $'+Math.ceil(cfePortBase * Math.pow(1.15, cfePortAmt))+' to buy that!');
    }
}

// CoffeeX Elements
var cfeXBase = 5000000;
var cfeXAmt = gameState[6];
const cfeX = document.getElementById('cfeX');
const cfeXCntr = document.getElementById('cfeXCntr');
cfeX.addEventListener('click', buyCfeX);
// Buys a CoffeeX
function buyCfeX() {
    if(cfeXAmt <= 0 && bank >= cfeXBase){
        cfeUnvs.style.display = 'inherit';
        for(i = 100; i > 0; i--){
            let e = i;
            setTimeout(function() {
                wrapper.style.backgroundSize = ((e += 100)/25)+'%';
            }, 10 * (100-i));
        };
        wrapper.style.backgroundSize = '5%';
        bank -= cfeXBase;
        moneyBal.innerHTML = '$'+ bank;
        cfeXAmt += 1;
        cfeXCntr.textContent = "x"+cfeXAmt;
    } else if(cfeXAmt >= 0 && bank >= Math.ceil(cfeXBase * Math.pow(1.15, cfeXAmt))){
        bank -= Math.ceil(cfeXBase * Math.pow(1.15, cfeXAmt));
        moneyBal.innerHTML = '$'+ bank;
        cfeXAmt += 1;
        cfeXCntr.textContent = "x"+cfeXAmt;
    } else {
        alert('You need $'+Math.ceil(cfeXBase * Math.pow(1.15, cfeXAmt))+' to buy that!');
    }
}

// Coffee Universe Elements
var cfeUnvsBase = 50000000;
var cfeUnvsAmt = gameState[7];
const cfeUnvs = document.getElementById('cfeUnvs');
const cfeUnvsCntr = document.getElementById('cfeUnvsCntr');
cfeUnvs.addEventListener('click', buyCfeUnvs);
// Buys a Coffee Universe
function buyCfeUnvs() {
    if(cfeUnvsAmt <= 0 && bank >= cfeUnvsBase){
        // cfeSomething.style.display = 'inherit';
        wrapper.style.backgroundSize = '1%';
        for(i = 100; i > 0; i--){
            let e = i;
            setTimeout(function() {
                wrapper.style.backgroundSize = ((e += 100)/99)+'%';
            }, 10 * (100-i));
        };
        bank -= cfeUnvsBase;
        moneyBal.innerHTML = '$'+ bank;
        cfeUnvsAmt += 1;
        cfeUnvsCntr.textContent = "x"+cfeUnvsAmt;
    } else if(cfeUnvsAmt >= 0 && bank >= Math.ceil(cfeUnvsBase * Math.pow(1.15, cfeUnvsAmt))){
        bank -= Math.ceil(cfeUnvsBase * Math.pow(1.15, cfeUnvsAmt));
        moneyBal.innerHTML = '$'+ bank;
        cfeUnvsAmt += 1;
        cfeUnvsCntr.textContent = "x"+cfeUnvsAmt;
    } else {
        alert('You need $'+Math.ceil(cfeUnvsBase * Math.pow(1.15, cfeUnvsAmt))+' to buy that!');
    }
}
window.onLoad = renderUI();
// Anti-Cheat
// document.addEventListener("keydown", devMode);

// function devMode(e){
//     e.preventDefault();
//     var code = e.keyCode;
//     if (e.keyCode){
//         clickBtn.innerHTML = '<input type="button" value="IM A DIRTY CHEATER">';
//     }
// }