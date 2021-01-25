var details = [
    'd', 'a', 'n', 'i', 'e', 'l'
 ];
 var isPresent;
 var records = [];
 var matchWords = ['a', 'e'];
 for (var index = 0; index < details.length; index++){
    isPresent = true;
    for (var outer = 0; outer< matchWords.length; outer++) {
       if (details[index].indexOf(matchWords[outer]) === -1) {
          isPresent = false;
          break;
       }
    }
    if (isPresent){
       records.push(details[index]);
    }
 }
 console.log(records)








// var my_array = ['d', 'a', 'n', 'i' ,'e' ,'l']


// var find = my_array.filter(function(result) {
//     return result.param1 === 'a' || result.param2 === 'e';
// });

// console.log(find);



// create string/array "id-key" from all the values returned by the questionire and call on that for each part of the "horoscope"