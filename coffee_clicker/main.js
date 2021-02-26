// Grabbing DOM Elements
const clickBtn = document.getElementById('clickBtn')
const moneyDisplay = document.getElementById('moneyDisplay')

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
    moneyAmt += ((cfeStndAmt * 5) + (cfeBrwyAmt * 25) + (cfeSiloAmt * 100) + (cfeFctyAmt * 500) + (cfePortAmt * 1000) + (cfeSpstAmt * 10000) + (cfeUnvsAmt * 100000))
    moneyDisplay.innerHTML = '$'+ moneyAmt;
}, 1000);

// Coffee Stand Elements
var cfeStndBase = 50;
var cfeStndAmt = gameState[1];
var cfeStndCost = Math.ceil(cfeStndBase * Math.pow(1.15, cfeStndAmt));
const cfeStnd = document.getElementById('cfeStnd');
const cfeStndCntr = document.getElementById('cfeStndCntr');
// Buys a Coffee Stand
cfeStnd.addEventListener('click', buyCfeStnd);
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
    } else {
        cfeStnd.style.color = "red";
        setTimeout(function() {
            cfeStnd.style.color = "black";
        }, 1000);    
    }
}

// Coffee Brewery Elements
var cfeBrwyBase = 500;
var cfeBrwyAmt = gameState[2];
var cfeBrwyCost = Math.ceil(cfeBrwyBase * Math.pow(1.15, cfeBrwyAmt));
const cfeBrwy = document.getElementById('cfeBrwy');
const cfeBrwyCntr = document.getElementById('cfeBrwyCntr');
cfeBrwy.addEventListener('click', buyCfeBrwy);
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
        } else if(cfeBrwyAmt >= 1 && moneyAmt >= cfeBrwyCost){
            cfeBrwyAmt += 1;
            cfeBrwyCost = Math.ceil(cfeBrwyBase * Math.pow(1.15, cfeBrwyAmt));
            moneyAmt -= cfeBrwyCost;
            updateUI();
        } else {
            cfeBrwy.style.color = "red";
            setTimeout(function() {
                cfeBrwy.style.color = "black";
            }, 1000); 
        }
    }
}

// Coffee Silo Elements
var cfeSiloBase = 5000;
var cfeSiloAmt = gameState[3];
const cfeSilo = document.getElementById('cfeSilo');
const cfeSiloCntr = document.getElementById('cfeSiloCntr');
cfeSilo.addEventListener('click', buyCfeSilo);
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
            updateUI();
        } else if(cfeSiloAmt >= 1 && moneyAmt >= Math.ceil(cfeSiloBase * Math.pow(1.15, cfeSiloAmt))){
            moneyAmt -= Math.ceil(cfeSiloBase * Math.pow(1.15, cfeSiloAmt));
            cfeSiloAmt += 1;
            updateUI();
        } else {
            cfeSilo.style.color = "red";
            setTimeout(function() {
                cfeSilo.style.color = "black";
            }, 1000);
        }
    }
}

// Coffee Factory Elements
var cfeCfeBase = 50000;
var cfeFctyAmt = gameState[4];
const cfeFcty = document.getElementById('cfeFcty');
const cfeFctyCntr = document.getElementById('cfeFctyCntr');
cfeFcty.addEventListener('click', buyCfeFcty);
// Buys a Coffee Factory
function buyCfeFcty(e) {
    if(cfeSiloAmt <= 0){
        e.preventDefault();
    } else {
        if(cfeFctyAmt <= 0 && moneyAmt >= cfeCfeBase){
            for(i = 100; i > 0; i--){
                let e = i;
                setTimeout(function() {
                    wrapper.style.backgroundSize = ((e += 100)/4)+'%';
                }, 10 * (100-i));
            };
            wrapper.style.backgroundSize = '25%';
            moneyAmt -= cfeCfeBase;
            cfeFctyAmt += 1;
            updateUI();
        } else if(cfeFctyAmt >= 1 && moneyAmt >= Math.ceil(cfeCfeBase * Math.pow(1.15, cfeFctyAmt))){
            moneyAmt -= Math.ceil(cfeCfeBase * Math.pow(1.15, cfeFctyAmt));
            cfeFctyAmt += 1;
            updateUI();
        } else {
            cfeFcty.style.color = "red";
            setTimeout(function() {
                cfeFcty.style.color = "black";
            }, 1000);
        }
    }
}

// Coffee Port Elements
var cfePortBase = 500000;
var cfePortAmt = gameState[5];
const cfePort = document.getElementById('cfePort');
const cfePortCntr = document.getElementById('cfePortCntr');
cfePort.addEventListener('click', buyCfePort);
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
            updateUI();
        } else if(cfePortAmt >= 0 && moneyAmt >= Math.ceil(cfePortBase * Math.pow(1.15, cfePortAmt))){
            moneyAmt -= Math.ceil(cfePortBase * Math.pow(1.15, cfePortAmt));
            cfePortAmt += 1;
            updateUI();
        } else {
            cfePort.style.color = "red";
            setTimeout(function() {
                cfePort.style.color = "black";
            }, 1000);
        }
    }
}

// Coffee Space Station Elements
var cfeSpstBase = 5000000;
var cfeSpstAmt = gameState[6];
const cfeSpst = document.getElementById('cfeSpst');
const cfeSpstCntr = document.getElementById('cfeSpstCntr');
cfeSpst.addEventListener('click', buyCfeSpst);
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
            updateUI();
        } else if(cfeSpstAmt >= 0 && moneyAmt >= Math.ceil(cfeSpstBase * Math.pow(1.15, cfeSpstAmt))){
            moneyAmt -= Math.ceil(cfeSpstBase * Math.pow(1.15, cfeSpstAmt));
            cfeSpstAmt += 1;
            updateUI();
        } else {
            cfeSpst.style.color = "red";
            setTimeout(function() {
                cfeSpst.style.color = "black";
            }, 1000);
        }
    }
}

// Coffee Universe Elements
var cfeUnvsBase = 50000000;
var cfeUnvsAmt = gameState[7];
const cfeUnvs = document.getElementById('cfeUnvs');
const cfeUnvsCntr = document.getElementById('cfeUnvsCntr');
cfeUnvs.addEventListener('click', buyCfeUnvs);
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
            updateUI();
        } else if(cfeUnvsAmt >= 0 && moneyAmt >= Math.ceil(cfeUnvsBase * Math.pow(1.15, cfeUnvsAmt))){
            moneyAmt -= Math.ceil(cfeUnvsBase * Math.pow(1.15, cfeUnvsAmt));
            cfeUnvsAmt += 1;
            updateUI();
        } else {
            cfeUnvs.style.color = "red";
            setTimeout(function() {
                cfeUnvs.style.color = "black";
            }, 1000);
        }
    }
}





















window.onLoad = renderUI();

// Lore Library
stndLore = "This is the lore for the Coffee Stand";
brwyLore = "This is the lore for the Coffee Brewery";
siloLore = "This is the lore for the Coffee Silo";
fctyLore = "This is the lore for the Coffee Factory";
portLore = "This is the lore for the Coffee Port";
spstLore = "This is the lore for the Coffee Space Station";
unvsLore = "This is the lore for the Coffee Universe";