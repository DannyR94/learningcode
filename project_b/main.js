const viewport = document.getElementById('viewport');
const clickBtn = document.getElementById('clickBtn');
const moneyBal = document.getElementById('moneyBal');
const buyMenu = document.getElementById('buyMenu');
const ctrlBar = document.getElementById('ctrlBar');

// Legacy Varibles
var li = document.createElement('li');
var input = document.createElement('input');

// Start the game
var bank = 0;
moneyBal.innerHTML = '$'+ bank;

// Manual Clicking
var clkWorth = 1;
clickBtn.addEventListener('click', basicClk);
function basicClk() {
    clkWorth = 1 + ((cfeStndAmt * 1) + (cfeBrwyAmt * 5) + (cfeSiloAmt * 15) + (cfeFctyAmt * 30) + (cfePortAmt * 100) + (cfeXAmt * 500) + (cfeUnvsAmt * 1000));
    bank += clkWorth;
    moneyBal.innerHTML = '$'+ bank;
}

// Adds money from shops once per second
setInterval(function(){
    bank += ((cfeStndAmt * 5) + (cfeBrwyAmt * 25) + (cfeSiloAmt * 100) + (cfeFctyAmt * 500) + (cfePortAmt * 1000) + (cfeXAmt * 10000) + (cfeUnvsAmt * 100000))
    moneyBal.innerHTML = '$'+ bank;
}, 1000);

// Coffee Stand Elements
var hasCfeStnd = false;
var cfeStndAmt = 0;
const cfeStnd = document.getElementById('cfeStnd');
const cfeStndCntr = document.getElementById('cfeStndCntr');
// Buys a Coffee Stand
cfeStnd.addEventListener('click', buyCfeStnd);
function buyCfeStnd() {
    if(hasCfeStnd === false && bank >= 50){
        cfeBrwy.style.display = 'inherit';
        bank -= 50;
        moneyBal.innerHTML = '$'+ bank;
        hasCfeStnd = true;
        cfeStndAmt += 1;
        cfeStndCntr.textContent = "x"+cfeStndAmt;
    } else if(hasCfeStnd === true && bank >= 50){
        bank -= 50;
        moneyBal.innerHTML = '$'+ bank;
        cfeStndAmt += 1;
        cfeStndCntr.textContent = "x"+cfeStndAmt;
    } else {
        alert('you need more money');
    }
}

// Coffee Brewery Elements
var hasCfeBrwy = false;
var cfeBrwyAmt = 0;
const cfeBrwy = document.getElementById('cfeBrwy');
const cfeBrwyCntr = document.getElementById('cfeBrwyCntr');
cfeBrwy.addEventListener('click', buyCfeBrwy);
// Buys a Coffee Brewery
function buyCfeBrwy() {
    if(hasCfeBrwy === false && bank >= 500){
        cfeSilo.style.display = 'inherit';
        bank -= 500;
        moneyBal.innerHTML = '$'+ bank;
        hasCfeBrwy = true;
        cfeBrwyAmt += 1;
        cfeBrwyCntr.textContent = "x"+cfeBrwyAmt;
    } else if(hasCfeBrwy === true && bank >= 500){
        bank -= 500;
        moneyBal.innerHTML = '$'+ bank;
        cfeBrwyAmt += 1;
        cfeBrwyCntr.textContent = "x"+cfeBrwyAmt;
    } else {
        alert('you need more money');
    }
}

// Coffee Silo Elements
var hasCfeSilo = false;
var cfeSiloAmt = 0;
const cfeSilo = document.getElementById('cfeSilo');
const cfeSiloCntr = document.getElementById('cfeSiloCntr');
cfeSilo.addEventListener('click', buyCfeSilo);
// Buys a Coffee Silo
function buyCfeSilo() {
    if(hasCfeSilo === false && bank >= 5000){
        cfeFcty.style.display = 'inherit';
        bank -= 5000;
        moneyBal.innerHTML = '$'+ bank;
        hasCfeSilo = true;
        cfeSiloAmt += 1;
        cfeSiloCntr.textContent = "x"+cfeSiloAmt;
    } else if(hasCfeSilo === true && bank >= 5000){
        bank -= 5000;
        moneyBal.innerHTML = '$'+ bank;
        cfeSiloAmt += 1;
        cfeSiloCntr.textContent = "x"+cfeSiloAmt;
    } else {
        alert('you need more money');
    }
}

// Coffee Factory Elements
var hasCfeFcty = false;
var cfeFctyAmt = 0;
const cfeFcty = document.getElementById('cfeFcty');
const cfeFctyCntr = document.getElementById('cfeFctyCntr');
cfeFcty.addEventListener('click', buyCfeFcty);
// Buys a Coffee Factory
function buyCfeFcty() {
    if(hasCfeFcty === false && bank >= 50000){
        cfePort.style.display = 'inherit';
        bank -= 50000;
        moneyBal.innerHTML = '$'+ bank;
        hasCfeFcty = true;
        cfeFctyAmt += 1;
        cfeFctyCntr.textContent = "x"+cfeFctyAmt;
    } else if(hasCfeFcty === true && bank >= 50000){
        bank -= 50000;
        moneyBal.innerHTML = '$'+ bank;
        cfeFctyAmt += 1;
        cfeFctyCntr.textContent = "x"+cfeFctyAmt;
    } else {
        alert('you need more money');
    }
}

// Coffee Port Elements
var hasCfePort = false;
var cfePortAmt = 0;
const cfePort = document.getElementById('cfePort');
const cfePortCntr = document.getElementById('cfePortCntr');
cfePort.addEventListener('click', buyCfePort);
// Buys a Coffee Port
function buyCfePort() {
    if(hasCfePort === false && bank >= 500000){
        cfeX.style.display = 'inherit';
        moneyBal.innerHTML = '$'+ bank;
        hasCfePort = true;
        cfePortAmt += 1;
        cfePortCntr.textContent = "x"+cfePortAmt;
    } else if(hasCfePort === true && bank >= 500000){
        bank -= 500000;
        moneyBal.innerHTML = '$'+ bank;
        cfePortAmt += 1;
        cfePortCntr.textContent = "x"+cfePortAmt;
    } else {
        alert('you need more money');
    }
}

// CoffeeX Elements
var hasCfeX = false;
var cfeXAmt = 0;
const cfeX = document.getElementById('cfeX');
const cfeXCntr = document.getElementById('cfeXCntr');
cfeX.addEventListener('click', buyCfeX);
// Buys a CoffeeX
function buyCfeX() {
    if(hasCfeX === false && bank >= 5000000){
        cfeUnvs.style.display = 'inherit';
        moneyBal.innerHTML = '$'+ bank;
        hasCfeX = true;
        cfeXAmt += 1;
        cfeXCntr.textContent = "x"+cfeXAmt;
    } else if(hasCfeX === true && bank >= 5000000){
        bank -= 5000000;
        moneyBal.innerHTML = '$'+ bank;
        cfeXAmt += 1;
        cfeXCntr.textContent = "x"+cfeXAmt;
    } else {
        alert('you need more money');
    }
}

// Coffee Universe Elements
var hasCfeUnvs = false;
var cfeUnvsAmt = 0;
const cfeUnvs = document.getElementById('cfeUnvs');
const cfeUnvsCntr = document.getElementById('cfeUnvsCntr');
cfeUnvs.addEventListener('click', buyCfeUnvs);
// Buys a Coffee Universe
function buyCfeUnvs() {
    if(hasCfeUnvs === false && bank >= 50000000){
        // cfeUnvs.style.display = 'inherit';
        moneyBal.innerHTML = '$'+ bank;
        hasCfeUnvs = true;
        cfeUnvsAmt += 1;
        cfeUnvsCntr.textContent = "x"+cfeUnvsAmt;
    } else if(hasCfeUnvs === true && bank >= 50000000){
        bank -= 50000000;
        moneyBal.innerHTML = '$'+ bank;
        cfeUnvsAmt += 1;
        cfeUnvsCntr.textContent = "x"+cfeUnvsAmt;
    } else {
        alert('you need more money');
    }
}

// Anti-Cheat
// document.addEventListener("keydown", devMode);

// function devMode(e){
//     e.preventDefault();
//     var code = e.keyCode;
//     if (e.keyCode){
//         clickBtn.innerHTML = '<input type="button" value="IM A DIRTY CHEATER">';
//     }
// }