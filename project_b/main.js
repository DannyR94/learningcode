const viewport = document.getElementById('viewport');
const clickBtn = document.getElementById('clickBtn');
const moneyBal = document.getElementById('moneyBal');
const buyMenu = document.getElementById('buyMenu');
const ctrlBar = document.getElementById('ctrlBar');

// Legacy Varibles
var li = document.createElement('li');
var input = document.createElement('input');

// Start the game
var bank = 100000;
moneyBal.innerHTML = '$'+ bank;

// Manual Clicking
var clkWorth = 1;
clickBtn.addEventListener('click', basicClk);
function basicClk() {
    clkWorth = 1 + ((cfeStndAmt * 1) + (cfeBrwyAmt * 5) + (cfeSiloAmt * 15) + (cfeFctyAmt * 30) + (cfePortAmt * 100) + (cfeXAmt * 500) + (cfeUnvsAmt * 1000));
    console.log(1 + ((cfeStndAmt * 1) + (cfeBrwyAmt * 5) + (cfeSiloAmt * 15) + (cfeFctyAmt * 30) + (cfePortAmt * 100) + (cfeXAmt * 500) + (cfeUnvsAmt * 1000)));
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
var cfeStndBase = 50;
var cfeStndAmt = 0;
const cfeStnd = document.getElementById('cfeStnd');
const cfeStndCntr = document.getElementById('cfeStndCntr');
// Buys a Coffee Stand
cfeStnd.addEventListener('click', buyCfeStnd);
function buyCfeStnd() {
    if(hasCfeStnd === false && bank >= cfeStndBase){
        cfeBrwy.style.display = 'inherit';
        bank -= cfeStndBase;
        moneyBal.innerHTML = '$'+ bank;
        hasCfeStnd = true;
        cfeStndAmt += 1;
        cfeStndCntr.textContent = "x"+cfeStndAmt;
    } else if(hasCfeStnd === true && bank >= Math.ceil(cfeStndBase * Math.pow(1.15, cfeStndAmt))){
        bank -= Math.ceil(cfeStndBase * Math.pow(1.15, cfeStndAmt));
        // console.log("You Payed "+ Math.ceil(cfeStndBase * Math.pow(1.15, cfeStndAmt)));
        moneyBal.innerHTML = '$'+ bank;
        cfeStndAmt += 1;
        cfeStndCntr.textContent = "x"+cfeStndAmt;
    } else {
        alert('You need $'+Math.ceil(cfeStndBase * Math.pow(1.15, cfeStndAmt))+' to buy that!');
    }
}

// Coffee Brewery Elements
var hasCfeBrwy = false;
var cfeBrwyBase = 500;
var cfeBrwyAmt = 0;
const cfeBrwy = document.getElementById('cfeBrwy');
const cfeBrwyCntr = document.getElementById('cfeBrwyCntr');
cfeBrwy.addEventListener('click', buyCfeBrwy);
// Buys a Coffee Brewery
function buyCfeBrwy() {
    if(hasCfeBrwy === false && bank >= cfeBrwyBase){
        cfeSilo.style.display = 'inherit';
        bank -= cfeBrwyBase;
        moneyBal.innerHTML = '$'+ bank;
        hasCfeBrwy = true;
        cfeBrwyAmt += 1;
        cfeBrwyCntr.textContent = "x"+cfeBrwyAmt;
    } else if(hasCfeBrwy === true && bank >= Math.ceil(cfeBrwyBase * Math.pow(1.15, cfeBrwyAmt))){
        bank -= Math.ceil(cfeBrwyBase * Math.pow(1.15, cfeBrwyAmt));
        // console.log("You Payed "+ Math.ceil(cfeBrwyBase * Math.pow(1.15, cfeBrwyAmt)));
        moneyBal.innerHTML = '$'+ bank;
        cfeBrwyAmt += 1;
        cfeBrwyCntr.textContent = "x"+cfeBrwyAmt;
    } else {
        alert('You need $'+Math.ceil(cfeBrwyBase * Math.pow(1.15, cfeBrwyAmt))+' to buy that!');
    }
}

// Coffee Silo Elements
var hasCfeSilo = false;
var cfeSiloBase = 5000;
var cfeSiloAmt = 0;
const cfeSilo = document.getElementById('cfeSilo');
const cfeSiloCntr = document.getElementById('cfeSiloCntr');
cfeSilo.addEventListener('click', buyCfeSilo);
// Buys a Coffee Silo
function buyCfeSilo() {
    if(hasCfeSilo === false && bank >= cfeSiloBase){
        cfeFcty.style.display = 'inherit';
        bank -= cfeSiloBase;
        moneyBal.innerHTML = '$'+ bank;
        hasCfeSilo = true;
        cfeSiloAmt += 1;
        cfeSiloCntr.textContent = "x"+cfeSiloAmt;
    } else if(hasCfeSilo === true && bank >= Math.ceil(cfeSiloBase * Math.pow(1.15, cfeSiloAmt))){
        bank -= Math.ceil(cfeSiloBase * Math.pow(1.15, cfeSiloAmt));
        moneyBal.innerHTML = '$'+ bank;
        cfeSiloAmt += 1;
        cfeSiloCntr.textContent = "x"+cfeSiloAmt;
    } else {
        alert('You need $'+Math.ceil(cfeSiloBase * Math.pow(1.15, cfeSiloAmt))+' to buy that!');
    }
}

// Coffee Factory Elements
var hasCfeFcty = false;
var cfeCfeBase = 50000;
var cfeFctyAmt = 0;
const cfeFcty = document.getElementById('cfeFcty');
const cfeFctyCntr = document.getElementById('cfeFctyCntr');
cfeFcty.addEventListener('click', buyCfeFcty);
// Buys a Coffee Factory
function buyCfeFcty() {
    if(hasCfeFcty === false && bank >= cfeCfeBase){
        cfePort.style.display = 'inherit';
        bank -= cfeCfeBase;
        moneyBal.innerHTML = '$'+ bank;
        hasCfeFcty = true;
        cfeFctyAmt += 1;
        cfeFctyCntr.textContent = "x"+cfeFctyAmt;
    } else if(hasCfeFcty === true && bank >= Math.ceil(cfeCfeBase * Math.pow(1.15, cfeFctyAmt))){
        bank -= Math.ceil(cfeCfeBase * Math.pow(1.15, cfeFctyAmt));
        moneyBal.innerHTML = '$'+ bank;
        cfeFctyAmt += 1;
        cfeFctyCntr.textContent = "x"+cfeFctyAmt;
    } else {
        alert('You need $'+Math.ceil(cfeCfeBase * Math.pow(1.15, cfeFctyAmt))+' to buy that!');
    }
}

// Coffee Port Elements
var hasCfePort = false;
var cfePortBase = 500000;
var cfePortAmt = 0;
const cfePort = document.getElementById('cfePort');
const cfePortCntr = document.getElementById('cfePortCntr');
cfePort.addEventListener('click', buyCfePort);
// Buys a Coffee Port
function buyCfePort() {
    if(hasCfePort === false && bank >= cfePortBase){
        cfeX.style.display = 'inherit';
        bank -= cfePortBase;
        moneyBal.innerHTML = '$'+ bank;
        hasCfePort = true;
        cfePortAmt += 1;
        cfePortCntr.textContent = "x"+cfePortAmt;
    } else if(hasCfePort === true && bank >= Math.ceil(cfePortBase * Math.pow(1.15, cfePortAmt))){
        bank -= Math.ceil(cfePortBase * Math.pow(1.15, cfePortAmt));
        moneyBal.innerHTML = '$'+ bank;
        cfePortAmt += 1;
        cfePortCntr.textContent = "x"+cfePortAmt;
    } else {
        alert('You need $'+Math.ceil(cfePortBase * Math.pow(1.15, cfePortAmt))+' to buy that!');
    }
}

// CoffeeX Elements
var hasCfeX = false;
var cfeXBase = 5000000;
var cfeXAmt = 0;
const cfeX = document.getElementById('cfeX');
const cfeXCntr = document.getElementById('cfeXCntr');
cfeX.addEventListener('click', buyCfeX);
// Buys a CoffeeX
function buyCfeX() {
    if(hasCfeX === false && bank >= cfeXBase){
        cfeUnvs.style.display = 'inherit';
        bank -= cfeXBase;
        moneyBal.innerHTML = '$'+ bank;
        hasCfeX = true;
        cfeXAmt += 1;
        cfeXCntr.textContent = "x"+cfeXAmt;
    } else if(hasCfeX === true && bank >= Math.ceil(cfeXBase * Math.pow(1.15, cfeXAmt))){
        bank -= Math.ceil(cfeXBase * Math.pow(1.15, cfeXAmt));
        moneyBal.innerHTML = '$'+ bank;
        cfeXAmt += 1;
        cfeXCntr.textContent = "x"+cfeXAmt;
    } else {
        alert('You need $'+Math.ceil(cfeXBase * Math.pow(1.15, cfeXAmt))+' to buy that!');
    }
}

// Coffee Universe Elements
var hasCfeUnvs = false;
var cfeUnvsBase = 50000000;
var cfeUnvsAmt = 0;
const cfeUnvs = document.getElementById('cfeUnvs');
const cfeUnvsCntr = document.getElementById('cfeUnvsCntr');
cfeUnvs.addEventListener('click', buyCfeUnvs);
// Buys a Coffee Universe
function buyCfeUnvs() {
    if(hasCfeUnvs === false && bank >= cfeUnvsBase){
        // cfeUnvs.style.display = 'inherit';
        bank -= cfeUnvsBase;
        moneyBal.innerHTML = '$'+ bank;
        hasCfeUnvs = true;
        cfeUnvsAmt += 1;
        cfeUnvsCntr.textContent = "x"+cfeUnvsAmt;
    } else if(hasCfeUnvs === true && bank >= Math.ceil(cfeUnvsBase * Math.pow(1.15, cfeUnvsAmt))){
        bank -= Math.ceil(cfeUnvsBase * Math.pow(1.15, cfeUnvsAmt));
        moneyBal.innerHTML = '$'+ bank;
        cfeUnvsAmt += 1;
        cfeUnvsCntr.textContent = "x"+cfeUnvsAmt;
    } else {
        alert('You need $'+Math.ceil(cfeUnvsBase * Math.pow(1.15, cfeUnvsAmt))+' to buy that!');
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