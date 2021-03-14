// Grabbing DOM Elements
const clickBtn = document.getElementById('clickBtn')
const moneyDisplay = document.getElementById('moneyDisplay')
const dscrTitle = document.getElementById('dscrTitle')
const dscrStats = document.getElementById('dscrStats')
const dscrLore = document.getElementById('dscrLore')

//Title Library
stndTitle = "Coffee Stand";
brwyTitle = "Coffee Brewery";
siloTitle = "Coffee Storage Silo";
fctyTitle = "Coffee Factory";
portTitle = "Coffee Shipping Port";
spstTitle = "Coffee Orbital Station";
unvsTitle = "Pocket Coffee Universe";

//Stats Library
stndStats = "Cost: $"+cfeStndCost+"<br>INCOME: +$"+stndPSec+"p/s each<br>CLICK BONUS: +"+stndPClk+"p/c each";
brwyStats = "Cost: $"+cfeBrwyCost+"<br>INCOME: +$"+brwyPSec+"p/s each<br>CLICK BONUS: +$"+brwyPClk+"p/c each";
siloStats = "Cost: $"+cfeSiloCost+"<br>INCOME: +$"+siloPSec+"p/s each<br>CLICK BONUS: +$"+siloPClk+"p/c each";
fctyStats = "Cost: $"+cfeFctyCost+"<br>INCOME: +$"+fctyPSec+"p/s each<br>CLICK BONUS: +$"+fctyPClk+"p/c each";
portStats = "Cost: $"+cfePortCost+"<br>INCOME: +$"+portPSec+"p/s each<br>CLICK BONUS: +$"+portPClk+"p/c each";
spstStats = "Cost: $"+cfeSpstCost+"<br>INCOME: +$"+spstPSec+"p/s each<br>CLICK BONUS: +$"+spstPClk+"p/c each";
unvsStats = "Cost: $"+cfeUnvsCost+"<br>INCOME: +$"+unvsPSec+"p/s each<br>CLICK BONUS: +$"+unvsPClk+"p/c each";


// Lore Library
stndLore = "Selling coffee the old fashion way, with a stand on the side of the road.";
brwyLore = "A brewery that produces good old fashion coffee for the masses.";
siloLore = "With the increasing demand for your coffee you'll need to start storing bulk coffee in advance.";
fctyLore = "Now you're producing coffee on a truly capitalist scale. By untilizing underpaid workers and ignoring all safety guidlines, you can produce more coffee than ever!";
portLore = "Your coffee now has demand over-seas, you'll need a shipping port to export enough coffee.";
spstLore = "News of your legendarily medicore, yet affordable, coffee has reached the stars. Otherworldly visitors from around cosmos have started to arrive to get some for themselves.";
unvsLore = "Demand for your coffee is so high you've had to start creating entire pocket universes to house production.";

// Start the game
var gameState = JSON.parse(localStorage.getItem('gameState'));
if (gameState === null){
    var gameState = [0, 0, 0, 0, 0, 0, 0, 0];
    localStorage.setItem ('gameState', JSON.stringify(gameState));
}
var moneyAmt = gameState[0];
moneyDisplay.innerHTML = '$'+ moneyAmt;

// Renders Proper UI state when page is loaded
function renderUI() {
    let cfeStndAmt = gameState[1];
    let cfeBrwyAmt = gameState[2];
    let cfeSiloAmt = gameState[3];
    let cfeFctyAmt = gameState[4];
    let cfePortAmt = gameState[5];
    let cfeSpstAmt = gameState[6];
    updateUI();
    if(cfeStndAmt >= 1){
        wrapper.style.backgroundSize = '200%';
    }
    if(cfeBrwyAmt >= 1){
        wrapper.style.backgroundSize = '100%';
    }
    if(cfeSiloAmt >= 1){
        wrapper.style.backgroundSize = '50%';
    }
    if(cfeFctyAmt >= 1){
        wrapper.style.backgroundSize = '25%';
    }
    if(cfePortAmt >= 1){
        wrapper.style.backgroundSize = '10%';
    }
    if(cfeSpstAmt >= 1){
        wrapper.style.backgroundSize = '5%';
    }
    if(cfeUnvsAmt >= 1){
        wrapper.style.backgroundSize = '1%';
    }
}

// Updates the UI
function updateUI() {
    moneyDisplay.innerHTML = '$'+ moneyAmt;
    cfeStnd.style.color = "black";
    cfeStndCntr.style.color ="black";
    cfeStndCntr.textContent = "x"+cfeStndAmt;
    if(cfeStndAmt >= 1){
        cfeBrwy.style.color = "black";
        cfeBrwyCntr.style.color ="black";
        cfeBrwyCntr.textContent = "x"+cfeBrwyAmt;
    }
    if(cfeBrwyAmt >= 1){
        cfeSilo.style.color = "black";
        cfeSiloCntr.style.color ="black"
        cfeSiloCntr.textContent = "x"+cfeSiloAmt;
    }
    if(cfeSiloAmt >= 1){
        cfeFcty.style.color = "black";
        cfeFctyCntr.style.color ="black";
        cfeFctyCntr.textContent = "x"+cfeFctyAmt;
    }
    if(cfeFctyAmt >= 1){
        cfePort.style.color = "black";
        cfePortCntr.style.color ="black";
        cfePortCntr.textContent = "x"+cfePortAmt;
    }
    if(cfePortAmt >= 1){
        cfeSpst.style.color = "black";
        cfeSpstCntr.style.color ="black";
        cfeSpstCntr.textContent = "x"+cfeSpstAmt;
    }
    if(cfeSpstAmt >= 1){
        cfeUnvs.style.color = "black";
        cfeUnvsCntr.style.color ="black";
        cfeUnvsCntr.textContent = "x"+cfeUnvsAmt;
    }
}

// Manual Clicking
var clkWorth = 1;
clickBtn.addEventListener('click', basicClk);
function basicClk() {
    clkWorth = 1 + ((cfeStndAmt * 1) + (cfeBrwyAmt * 5) + (cfeSiloAmt * 15) + (cfeFctyAmt * 30) + (cfePortAmt * 100) + (cfeSpstAmt * 500) + (cfeUnvsAmt * 1000));
    moneyAmt += clkWorth;
    // moneyAmt += 5000000000;
    moneyDisplay.innerHTML = '$'+ moneyAmt;
}

// Saves Game
const saveBtn = document.getElementById('saveBtn');
saveBtn.addEventListener('click', saveGame)

// Saves game when window is closed or reloaded
window.onbeforeunload = saveGame;

function saveGame() {
var gameState = [moneyAmt, cfeStndAmt, cfeBrwyAmt, cfeSiloAmt, cfeFctyAmt, cfePortAmt, cfeSpstAmt, cfeUnvsAmt];
localStorage.setItem ('gameState', JSON.stringify(gameState));
}

//Restart Game
restartBtn = document.getElementById('restartBtn');
restartBtn.addEventListener('click', restartGame);
function restartGame() {
    moneyAmt = 0;
    cfeStndAmt = 0;
    cfeBrwyAmt = 0;
    cfeSiloAmt = 0;
    cfeFctyAmt = 0;
    cfePortAmt = 0;
    cfeSpstAmt = 0;
    cfeUnvsAmt = 0;
    localStorage.clear();
    var gameState = [0, 0, 0, 0, 0, 0, 0, 0];
    localStorage.setItem ('gameState', JSON.stringify(gameState));
    location.reload();
}

// Adds money from shops once per second
setInterval(function(){
    moneyAmt += ((cfeStndAmt * 5) + (cfeBrwyAmt * 25) + (cfeSiloAmt * 100) + (cfeFctyAmt * 500) + (cfePortAmt * 1000) + (cfeSpstAmt * 10000) + (cfeUnvsAmt * 100000));
    moneyDisplay.innerHTML = '$'+ moneyAmt;
}, 1000);

// Coffee Stand Elements
var cfeStndBase = 50;
var cfeStndAmt = gameState[1];
var cfeStndCost = Math.ceil(cfeStndBase * Math.pow(1.15, cfeStndAmt));
var stndPClk = 1;
var stndPSec = 5;
const cfeStnd = document.getElementById('cfeStnd');
const stndBtn1 = document.getElementById('buyStndBtn1');
const cfeStndCntr = document.getElementById('cfeStndCntr');
// Buys a Coffee Stand
stndBtn1.addEventListener('click', buyCfeStnd);
function buyCfeStnd() {
    if(cfeStndAmt <= 0 && moneyAmt >= cfeStndBase){
        for(i = 100; i > 0; i--){
            let e = i;
            setTimeout(function() {
                wrapper.style.backgroundSize = (e += 200)+'%';
            }, 10 * (100-i));
        };
        moneyAmt -= cfeStndCost;
        cfeStndCost = Math.ceil(cfeStndBase * Math.pow(1.15, cfeStndAmt));
        cfeStndAmt += 1;
        updateUI();
    } else if(cfeStndAmt >= 1 && moneyAmt >= cfeStndCost){
        moneyAmt -= cfeStndCost;
        cfeStndCost = Math.ceil(cfeStndBase * Math.pow(1.15, cfeStndAmt));
        cfeStndAmt += 1;
        updateUI();
        stndUI();
    } else {
        cfeStnd.style.color = "red";
        stndBtn1.style.color = "red";
        setTimeout(function() {
            cfeStnd.style.color = "black";
            stndBtn1.style.color = "black";
        }, 1000);    
    }
}
// Coffee Stand Tooltip
cfeStnd.addEventListener('mouseover', stndUI);
function stndUI(){
    stndStats = "Cost: $"+cfeStndCost+"<br>INCOME: +$"+stndPSec+"p/s each<br>CLICK BONUS: +"+stndPClk+"p/c each";
    dscrTitle.innerHTML = stndTitle;
    dscrStats.innerHTML = stndStats;
    dscrLore.innerHTML = stndLore;
}

// Coffee Brewery Elements
var cfeBrwyBase = 500;
var cfeBrwyAmt = gameState[2];
var cfeBrwyCost = Math.ceil(cfeBrwyBase * Math.pow(1.15, cfeBrwyAmt));
var brwyPClk = 5;
var brwyPSec = 50;
const cfeBrwy = document.getElementById('cfeBrwy');
const brwyBtn1 = document.getElementById('buyBrwyBtn1')
const cfeBrwyCntr = document.getElementById('cfeBrwyCntr');
brwyBtn1.addEventListener('click', buyCfeBrwy);
// Buys a Coffee Brewery
function buyCfeBrwy(e) {
    if(cfeStndAmt <= 0){
        e.preventDefault();
    } else {
        if(cfeBrwyAmt <= 0 && moneyAmt >= cfeBrwyBase){
            for(i = 100; i > 0; i--){
                let e = i;
                setTimeout(function() {
                    wrapper.style.backgroundSize = (e += 100)+'%';
                }, 10 * (100-i));
            };
            wrapper.style.backgroundSize = '100%';
            moneyAmt -= cfeBrwyBase;
            cfeBrwyCost = Math.ceil(cfeBrwyBase * Math.pow(1.15, cfeBrwyAmt));
            cfeBrwyAmt += 1;
            updateUI();
            brwyUI();
        } else if(cfeBrwyAmt >= 1 && moneyAmt >= cfeBrwyCost){
            cfeBrwyAmt += 1;
            cfeBrwyCost = Math.ceil(cfeBrwyBase * Math.pow(1.15, cfeBrwyAmt));
            moneyAmt -= cfeBrwyCost;
            updateUI();
            brwyUI();
        } else {
            cfeBrwy.style.color = "red";
            brwyBtn1.style.color = "red";
            setTimeout(function() {
                cfeBrwy.style.color = "black";
                brwyBtn1.style.color = "black";
            }, 1000); 
        }
    }
}
// Coffee Brewery Tooltip
cfeBrwy.addEventListener('mouseover', brwyUI);
function brwyUI(){
    if(cfeStndAmt >= 1){
    brwyStats = "Cost: $"+cfeBrwyCost+"<br>INCOME: +$"+brwyPSec+"p/s each<br>CLICK BONUS: +$"+brwyPClk+"p/c each";
    dscrTitle.innerHTML = brwyTitle;
    dscrStats.innerHTML = brwyStats;
    dscrLore.innerHTML = brwyLore;
    }
}

// Coffee Silo Elements
var cfeSiloBase = 5000;
var cfeSiloAmt = gameState[3];
var cfeSiloCost = Math.ceil(cfeSiloBase * Math.pow(1.15, cfeSiloAmt));
var siloPClk = 15;
var siloPSec = 100;
const cfeSilo = document.getElementById('cfeSilo');
const siloBtn1 = document.getElementById('buySiloBtn1');
const cfeSiloCntr = document.getElementById('cfeSiloCntr');
siloBtn1.addEventListener('click', buyCfeSilo);
// Buys a Coffee Silo
function buyCfeSilo(e) {
    if(cfeBrwyAmt <= 0){
        e.preventDefault();
    } else {
        if(cfeSiloAmt <= 0 && moneyAmt >= cfeSiloBase){
            for(i = 100; i > 0; i--){
                let e = i;
                setTimeout(function() {
                    wrapper.style.backgroundSize = ((e += 100)/2)+'%';
                }, 10 * (100-i));
            };
            wrapper.style.backgroundSize = '50%';
            moneyAmt -= cfeSiloBase;
            cfeSiloAmt += 1;
            cfeSiloCost = Math.ceil(cfeSiloBase * Math.pow(1.15, cfeSiloAmt));
            updateUI();
            siloUI();
        } else if(cfeSiloAmt >= 1 && moneyAmt >= Math.ceil(cfeSiloBase * Math.pow(1.15, cfeSiloAmt))){
            moneyAmt -= Math.ceil(cfeSiloBase * Math.pow(1.15, cfeSiloAmt));
            cfeSiloAmt += 1;
            cfeSiloCost = Math.ceil(cfeSiloBase * Math.pow(1.15, cfeSiloAmt));
            updateUI();
            siloUI();
        } else {
            cfeSilo.style.color = "red";
            siloBtn1.style.color = "red";
            setTimeout(function() {
                cfeSilo.style.color = "black";
                siloBtn1.style.color = "black";
            }, 1000);
        }
    }
}
// Coffee Silo Tooltip
cfeSilo.addEventListener('mouseover', siloUI);
function siloUI(){
    if(cfeBrwyAmt >= 1){
    siloStats = "Cost: $"+cfeSiloCost+"<br>INCOME: +$"+siloPSec+"p/s each<br>CLICK BONUS: +$"+siloPClk+"p/c each";
    dscrTitle.innerHTML = siloTitle;
    dscrStats.innerHTML = siloStats;
    dscrLore.innerHTML = siloLore;
    }
}

// Coffee Factory Elements
var cfeFctyBase = 50000;
var cfeFctyAmt = gameState[4];
var cfeFctyCost = Math.ceil(cfeFctyBase * Math.pow(1.15, cfeFctyAmt));
var fctyPClk = 30;
var fctyPSec = 500;
const cfeFcty = document.getElementById('cfeFcty');
const fctyBtn1 = document.getElementById('buyFctyBtn1');
const cfeFctyCntr = document.getElementById('cfeFctyCntr');
fctyBtn1.addEventListener('click', buyCfeFcty);
// Buys a Coffee Factory
function buyCfeFcty(e) {
    if(cfeSiloAmt <= 0){
        e.preventDefault();
    } else {
        if(cfeFctyAmt <= 0 && moneyAmt >= cfeFctyBase){
            for(i = 100; i > 0; i--){
                let e = i;
                setTimeout(function() {
                    wrapper.style.backgroundSize = ((e += 100)/4)+'%';
                }, 10 * (100-i));
            };
            wrapper.style.backgroundSize = '25%';
            moneyAmt -= cfeFctyBase;
            cfeFctyAmt += 1;
            cfeFctyCost = Math.ceil(cfeFctyBase * Math.pow(1.15, cfeFctyAmt));
            updateUI();
            fctyUI();
        } else if(cfeFctyAmt >= 1 && moneyAmt >= Math.ceil(cfeFctyBase * Math.pow(1.15, cfeFctyAmt))){
            moneyAmt -= Math.ceil(cfeCfeBase * Math.pow(1.15, cfeFctyAmt));
            cfeFctyAmt += 1;
            updateUI();
            fctyUI();
        } else {
            cfeFcty.style.color = "red";
            fctyBtn1.style.color = "red";
            setTimeout(function() {
                cfeFcty.style.color = "black";
                fctyBtn1.style.color = "black";
            }, 1000);
        }
    }
}
// Coffee Factory Tooltip
cfeFcty.addEventListener('mouseover', fctyUI);
function fctyUI(){
    if(cfeSiloAmt >= 1){
    fctyStats = "Cost: $"+cfeFctyCost+"<br>INCOME: +$"+fctyPSec+"p/s each<br>CLICK BONUS: +$"+fctyPClk+"p/c each";
    dscrTitle.innerHTML = fctyTitle;
    dscrStats.innerHTML = fctyStats;
    dscrLore.innerHTML = fctyLore;
    }
}

// Coffee Port Elements
var cfePortBase = 500000;
var cfePortAmt = gameState[5];
var cfePortCost = Math.ceil(cfePortBase * Math.pow(1.15, cfePortAmt));
var portPClk = 100;
var portPSec = 1000;
const cfePort = document.getElementById('cfePort');
const portBtn1 = document.getElementById('buyPortBtn1');
const cfePortCntr = document.getElementById('cfePortCntr');
portBtn1.addEventListener('click', buyCfePort);
// Buys a Coffee Port
function buyCfePort(e) {
    if(cfeFctyAmt <= 0){
        e.preventDefault();
    } else {
        if(cfePortAmt <= 0 && moneyAmt >= cfePortBase){
            for(i = 100; i > 0; i--){
                let e = i;
                setTimeout(function() {
                    wrapper.style.backgroundSize = ((e += 100)/10)+'%';
                }, 10 * (100-i));
            };
            wrapper.style.backgroundSize = '10%';
            moneyAmt -= cfePortBase;
            cfePortAmt += 1;
            cfePortCost = Math.ceil(cfePortBase * Math.pow(1.15, cfePortAmt));
            updateUI();
            portUI();
        } else if(cfePortAmt >= 0 && moneyAmt >= Math.ceil(cfePortBase * Math.pow(1.15, cfePortAmt))){
            moneyAmt -= Math.ceil(cfePortBase * Math.pow(1.15, cfePortAmt));
            cfePortAmt += 1;
            cfePortCost = Math.ceil(cfePortBase * Math.pow(1.15, cfePortAmt));
            updateUI();
            portUI();
        } else {
            cfePort.style.color = "red";
            portBtn1.style.color = "red";
            setTimeout(function() {
                cfePort.style.color = "black";
                portBtn1.style.color = "black";
            }, 1000);
        }
    }
}
// Coffee Port Tooltip
cfePort.addEventListener('mouseover', portUI);
function portUI(){
    if(cfeFctyAmt >= 1){
    portStats = "Cost: $"+cfePortCost+"<br>INCOME: +$"+portPSec+"p/s each<br>CLICK BONUS: +$"+portPClk+"p/c each";
    dscrTitle.innerHTML = portTitle;
    dscrStats.innerHTML = portStats;
    dscrLore.innerHTML = portLore;
    }
}

// Coffee Space Station Elements
var cfeSpstBase = 5000000;
var cfeSpstAmt = gameState[6];
var cfeSpstCost = Math.ceil(cfeSpstBase * Math.pow(1.15, cfeSpstAmt));
var spstPClk = 500;
var spstPSec = 10000;
const cfeSpst = document.getElementById('cfeSpst');
const spstBtn1 = document.getElementById('buySpstBtn1')
const cfeSpstCntr = document.getElementById('cfeSpstCntr');
spstBtn1.addEventListener('click', buyCfeSpst);
// Buys a Coffee Space Station
function buyCfeSpst(e) {
    if(cfePortAmt <= 0){
        e.preventDefault();
    } else {
        if(cfeSpstAmt <= 0 && moneyAmt >= cfeSpstBase){
            for(i = 100; i > 0; i--){
                let e = i;
                setTimeout(function() {
                    wrapper.style.backgroundSize = ((e += 100)/25)+'%';
                }, 10 * (100-i));
            };
            wrapper.style.backgroundSize = '5%';
            moneyAmt -= cfeSpstBase;
            cfeSpstAmt += 1;
            cfeSpstCost = Math.ceil(cfeSpstBase * Math.pow(1.15, cfeSpstAmt));
            updateUI();
            spstUI();
        } else if(cfeSpstAmt >= 0 && moneyAmt >= Math.ceil(cfeSpstBase * Math.pow(1.15, cfeSpstAmt))){
            moneyAmt -= Math.ceil(cfeSpstBase * Math.pow(1.15, cfeSpstAmt));
            cfeSpstAmt += 1;
            cfeSpstCost = Math.ceil(cfeSpstBase * Math.pow(1.15, cfeSpstAmt));
            updateUI();
            spstUI();
        } else {
            cfeSpst.style.color = "red";
            spstBtn1.style.color = "red";
            setTimeout(function() {
                cfeSpst.style.color = "black";
                spstBtn1.style.color = "black";
            }, 1000);
        }
    }
}
// Coffee Orbital(Space) Station Tooltip
cfeSpst.addEventListener('mouseover', spstUI);
function spstUI(){
    if(cfePortAmt >= 1){
    spstStats = "Cost: $"+cfeSpstCost+"<br>INCOME: +$"+spstPSec+"p/s each<br>CLICK BONUS: +$"+spstPClk+"p/c each";
    dscrTitle.innerHTML = spstTitle;
    dscrStats.innerHTML = spstStats;
    dscrLore.innerHTML = spstLore;
    }
}

// Coffee Universe Elements
var cfeUnvsBase = 50000000;
var cfeUnvsAmt = gameState[7];
var cfeUnvsCost = Math.ceil(cfeUnvsBase * Math.pow(1.15, cfeUnvsAmt));
var unvsPClk = 1000;
var unvsPSec = 100000;
const cfeUnvs = document.getElementById('cfeUnvs');
const unvsBtn1 = document.getElementById('buyUnvsBtn1')
const cfeUnvsCntr = document.getElementById('cfeUnvsCntr');
unvsBtn1.addEventListener('click', buyCfeUnvs);
// Buys a Coffee Universe
function buyCfeUnvs(e) {
    if(cfeSpstAmt <= 0){
        e.preventDefault();
    } else {
        if(cfeUnvsAmt <= 0 && moneyAmt >= cfeUnvsBase){
            // cfeSomething.style.display = 'inherit';
            wrapper.style.backgroundSize = '1%';
            for(i = 100; i > 0; i--){
                let e = i;
                setTimeout(function() {
                    wrapper.style.backgroundSize = ((e += 100)/99)+'%';
                }, 10 * (100-i));
            };
            moneyAmt -= cfeUnvsBase;
            cfeUnvsAmt += 1;
            cfeUnvsCost = Math.ceil(cfeUnvsBase * Math.pow(1.15, cfeUnvsAmt));
            updateUI();
            unvsUI();
        } else if(cfeUnvsAmt >= 0 && moneyAmt >= Math.ceil(cfeUnvsBase * Math.pow(1.15, cfeUnvsAmt))){
            moneyAmt -= Math.ceil(cfeUnvsBase * Math.pow(1.15, cfeUnvsAmt));
            cfeUnvsAmt += 1;
            cfeUnvsCost = Math.ceil(cfeUnvsBase * Math.pow(1.15, cfeUnvsAmt));
            updateUI();
            unvsUI();
        } else {
            cfeUnvs.style.color = "red";
            unvsBtn1.style.color = "red";
            setTimeout(function() {
                cfeUnvs.style.color = "black";
                unvsBtn1.style.color = "black";
            }, 1000);
        }
    }
}
// Coffee Unviverse Tooltip
cfeUnvs.addEventListener('mouseover', unvsUI);
function unvsUI(){
    if(cfeSpstAmt >= 1){
    unvsStats = "Cost: $"+cfeUnvsCost+"<br>INCOME: +$"+unvsPSec+"p/s each<br>CLICK BONUS: +$"+unvsPClk+"p/c each";
    dscrTitle.innerHTML = unvsTitle;
    dscrStats.innerHTML = unvsStats;
    dscrLore.innerHTML = unvsLore;
    }
}

// Renders UI elements based on save data
// Its at the end of the doc to ensure all varibles have been instantiated.
window.onLoad = renderUI();