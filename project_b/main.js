const viewport = document.getElementById('viewport');
const clickBtn = document.getElementById('clickBtn');
const moneyBal = document.getElementById('moneyBal');
const buyMenu = document.getElementById('buyMenu');
const ctrlBar = document.getElementById('ctrlBar');


// Create sections for each button/buy option
const cfeStnd = document.getElementById('cfeStnd');
const cfeStndAmt = document.getElementById('cfeStndAmt');

var li = document.createElement('li');
var input = document.createElement('input');


var bank = 50;
var hasCfeStnd = false;

//Start the game
moneyBal.innerHTML = '$'+ bank;
clickBtn.addEventListener('click', basicClk);
cfeStnd.addEventListener('click', buyCfeStnd);

// Generates $1
function basicClk() {
    bank += 1;
    moneyBal.innerHTML = '$'+ bank;
}

// Buys a Coffee Stand
function buyCfeStnd() {
    if(hasCfeStnd === false && bank >= 50){
        li.appendChild(input);
        li.setAttribute("id", "buyCfeBrwy");
        input.setAttribute("type", "button");
        input.setAttribute("value", "Buy a Coffee Brewery");
        buyMenu.appendChild(li);
        bank -= 50;
        moneyBal.innerHTML = '$'+ bank;
        hasCfeStnd = true;
    } else if(hasCfeStnd === true && bank >= 50){
        bank -= 50;
        moneyBal.innerHTML = '$'+ bank;
    } else {
        alert('you need more money');
    }
}


console.log(bank);
console.log(ctrlBar);

// Anti-Cheat
// document.addEventListener("keydown", devMode);

// function devMode(e){
//     e.preventDefault();
//     var code = e.keyCode;
//     if (e.keyCode){
//         clickBtn.innerHTML = '<input type="button" value="IM A DIRTY CHEATER">';
//     }
// }