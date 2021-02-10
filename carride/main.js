var testItr = 100;
var a1 = [];
var a2 = [];
var a3 = [];
var percent = document.querySelector('.percent');
var testNum = document.querySelector('.testNum');

for (let i = 0; i < testItr; i++) {
   genArray();
}

console.log(average(a3));


percent.innerHTML = '<b>'+average(a3)+'</b>';
percent.style.fontWeight = 'bold';
percent.style.color = 'white';
percent.style.backgroundColor = 'grey';

testNum.innerHTML = '<b>'+testItr+'</b>';
testNum.style.fontWeight = 'bold';
testNum.style.color = 'white';
testNum.style.backgroundColor = 'grey';



function genArray() {
   for(let i = 0; i < 100; i++){
         x = Math.floor(Math.random() * 101) + 1;
         a1.push(x);
            if(i == 99) {
               for (let i = 0; i < a1.length; i++) {
                  if (a1.indexOf(a1[i]) !== a1.lastIndexOf(a1[i])) {
                     a2.push(a1.indexOf(a1[i]));
                  }
               }
               a1 = [];
               a3.push(a2.length);
               a2 = [];
            }
      }
}

 function average(a3) {
   var sum = 0;
   for(var i = 0; i < a3.length; i++) {
       sum += a3[i];
   }
   return sum / a3.length;
}